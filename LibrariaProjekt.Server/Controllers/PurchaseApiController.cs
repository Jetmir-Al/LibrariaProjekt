using LibrariaProjekt.Server.DTO;
using LibrariaProjekt.Server.Models;
using LibrariaProjekt.Server.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace LibrariaProjekt.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize] // Sigurohet që vetëm user-i i loguar mund të bëjë blerje
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
            //  Merr UserId nga user-i i loguar
            var userIdClaim = User.FindFirst(System.Security.Claims.ClaimTypes.NameIdentifier);
            if (userIdClaim == null)
                return Unauthorized("User is not logged in");

            int userId = int.Parse(userIdClaim.Value);

            //  Kontrollo nëse libri ekziston
            var book = _bookRepository.GetById(bookId);
            if (book == null)
                return BadRequest("Book not found");

            //  Krijo objektin Purchase
            var purchase = new Purchase
            {
                UserId = userId,
                BookId = bookId,
                Quantity = dto.Quantity,
                Total = dto.Quantity * book.Price,
                CardholderName = dto.CardholderName,
                CardNumber = dto.CardNumber,
                PurchaseDate = DateTime.Now
            };

            //  Ruaj në DB
            _purchaseRepository.Insert(purchase);
            _purchaseRepository.Save();

            return Ok("Purchase created successfully");
        }

        // GET: api/PurchaseApi
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
                    CardholderName = p.CardholderName
                }).ToList();

            return Ok(purchases);
        }
    }
}
