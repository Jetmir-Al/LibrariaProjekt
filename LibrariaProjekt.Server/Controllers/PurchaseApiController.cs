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
    public class PurchaseApiController : ControllerBase
    {
        private readonly IPurchaseRepository _purchaseRepository;
        private readonly IUserRepository _userRepository;
        private readonly IBookRepository _bookRepository;

        public PurchaseApiController(
            IPurchaseRepository purchaseRepository,
            IUserRepository userRepository,
            IBookRepository bookRepository)
        {
            _purchaseRepository = purchaseRepository;
            _userRepository = userRepository;
            _bookRepository = bookRepository;
        }


        [HttpPost("create/{bookId}")]
        public IActionResult CreatePurchase(int bookId, [FromBody] CreatePurchaseDto dto)
        {
            
            var userIdClaim = User.FindFirst(System.Security.Claims.ClaimTypes.NameIdentifier);
            if (userIdClaim == null)
                return Unauthorized("User is not logged in");

            int userId = int.Parse(userIdClaim.Value);

           
            var book = _bookRepository.GetById(bookId);
            if (book == null)
                return BadRequest("Book not found");

           
            var purchase = new Purchase
            {
                UserId = userId,
                BookId = bookId,
                Quantity = dto.Quantity,
                Total = dto.Quantity * book.Price,
                CardholderName = dto.CardholderName,
                CardNumber = dto.CardNumber.Length >= 4 ? dto.CardNumber[^4..] : dto.CardNumber,
                PurchaseDate = DateTime.Now
            };

           
            _purchaseRepository.Insert(purchase);
            _purchaseRepository.Save();

            return Ok("Purchase created successfully");
        }

      
        [HttpGet]
        public IActionResult GetPurchases()
        {
            var purchases = _purchaseRepository.GetAll()
                .Select(p => new PurchaseDto
                {
                    Id = p.Id,
                    UserName = p.User.Name,
                    BookTitle = p.Book.Title,
                    Quantity = p.Quantity,
                    Total = p.Total,
                    PurchaseDate = p.PurchaseDate,
                    CardholderName = p.CardholderName,
                    MaskedCardNumber = "**** **** **** " + p.CardNumber 
                }).ToList();

            return Ok(purchases);
        }
        [HttpGet("{id}")]
        public IActionResult GetPurchaseById(int id)
        {
            var purchase = _purchaseRepository.GetById(id);
            if (purchase == null)
                return NotFound();

            var dto = new PurchaseDto
            {
                Id = purchase.Id,
                UserName = purchase.User.Name,
                BookTitle = purchase.Book.Title,
                Quantity = purchase.Quantity,
                Total = purchase.Total,
                PurchaseDate = purchase.PurchaseDate,
                CardholderName = purchase.CardholderName,
                MaskedCardNumber = "**** **** **** " + purchase.CardNumber
            };
            return Ok(dto);
        }
    }
}
