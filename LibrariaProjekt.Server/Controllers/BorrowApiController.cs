using LibrariaProjekt.Server.DTO;
using LibrariaProjekt.Server.Models;
using LibrariaProjekt.Server.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace LibrariaProjekt.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize]
    public class BorrowApiController : ControllerBase
    {
        private readonly IBorrowRepository _borrowRepository;
        private readonly IUserRepository _userRepository;
        private readonly IBookRepository _bookRepository;

        public BorrowApiController(
            IBorrowRepository borrowRepository,
            IUserRepository userRepository,
            IBookRepository bookRepository)
        {
            _borrowRepository = borrowRepository;
            _userRepository = userRepository;
            _bookRepository = bookRepository;
        }


        [HttpPost("create/{bookId}")]
        public IActionResult CreateBorrow(int bookId, [FromBody] CreateBorrowDto dto)
        {
            var userIdClaim = User.FindFirst("Id");
            if (userIdClaim == null)
                return Unauthorized("User is not logged in");

            int userId = int.Parse(userIdClaim.Value);

            var book = _bookRepository.GetById(bookId);
            if (book == null)
                return BadRequest("Book not found");

            if (book.Quantity < 1)
                return BadRequest("This book is not available for borrowing");

            DateOnly borrowDate = dto.BorrowDate;
            DateOnly maxReturnDate = borrowDate.AddDays(14);
            DateOnly actualReturnDate = dto.ReturnDate ?? maxReturnDate;

            if (actualReturnDate > maxReturnDate)
                actualReturnDate = maxReturnDate;

            if (actualReturnDate < borrowDate)
                return BadRequest("Return date cannot be before borrow date");

            decimal totalPrice = book.Price / 2;

            var borrow = new Borrow
            {
                UserId = userId,
                BookId = bookId,
                BorrowDate = borrowDate,
                ReturnDate = actualReturnDate,
                Total = totalPrice,
                Returned = false, 
                CardholderName = dto.CardholderName,
                CardNumber = dto.CardNumber.Length >= 4 ? dto.CardNumber[^4..] : dto.CardNumber
            };

            _borrowRepository.Insert(borrow);
            _borrowRepository.Save();

            book.Quantity -= 1;
            _bookRepository.Update(book);
            _bookRepository.Save();

            return Ok("Borrow created successfully.");
        }

        [HttpGet("user/{userId}")]
        public IActionResult GetBorrowByUser(int userId)
        {
            var borrows = _borrowRepository.GetBorrowByUserId(userId)
                .Select(b =>
                {
                    _borrowRepository.CalculateLateFee(b); 
                    return new BorrowDto
                    {
                        Id = b.Id,
                        UserName = b.User.Name,
                        BookTitle = b.Book.Title,
                        BorrowDate = b.BorrowDate,
                        ReturnDate = b.ReturnDate ?? b.BorrowDate,
                        Total = b.Total,
                        CardholderName = b.CardholderName,
                        MaskedCardNumber = "**** **** **** " + b.CardNumber,
                        LateFee = b.LateFee,
                        Image = b.Book.Image
                    };
                })
                .ToList();

            return Ok(borrows);
        }

        
    }
}
