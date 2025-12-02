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
    [Authorize] 
    public class ReviewApiController : ControllerBase
    {
        private readonly IReviewRepository _reviewRepository;
        private readonly IUserRepository _userRepository;
        private readonly IBookRepository _bookRepository;

        public ReviewApiController(
            IReviewRepository reviewRepository,
            IUserRepository userRepository,
            IBookRepository bookRepository)
        {
            _reviewRepository = reviewRepository;
            _userRepository = userRepository;
            _bookRepository = bookRepository;
        }

        
        [HttpPost("create/{bookId}")]
        public IActionResult CreateReview(int bookId, [FromBody] CreateReviewDto dto)
        {
            
            var userIdClaim = User.FindFirst(System.Security.Claims.ClaimTypes.NameIdentifier);
            if (userIdClaim == null)
                return Unauthorized("User is not logged in");

            int userId = int.Parse(userIdClaim.Value);

           
            var book = _bookRepository.GetById(bookId);
            if (book == null)
                return BadRequest("Book not found");

            // Krijo review
            var review = new Review
            {
                UserId = userId,
                BookId = bookId,      
                Rating = dto.Rating,
                Comment = dto.Comment
            };

            _reviewRepository.Insert(review);
            _reviewRepository.Save();

            return Ok("Review created successfully");
        }

        
        [HttpGet("book/{bookId}")]
        public IActionResult GetReviewsByBook(int bookId)
        {
            var reviews = _reviewRepository.GetReviewsByBookId(bookId)
                .Select(r => new ReviewDto
                {
                    Id = r.Id,
                    UserName = r.User.Name,    
                    BookTitle = r.Book.Title,  
                    Rating = r.Rating,
                    Comment = r.Comment
                }).ToList();

            return Ok(reviews);
        }

        
        [HttpGet("{id}")]
        public IActionResult GetReviewById(int id)
        {
            var review = _reviewRepository.GetById(id);
            if (review == null)
                return NotFound();

            var dto = new ReviewDto
            {
                Id = review.Id,
                UserName = review.User.Name,
                BookTitle = review.Book.Title,
                Rating = review.Rating,
                Comment = review.Comment
            };

            return Ok(dto);
        }
    }
}
