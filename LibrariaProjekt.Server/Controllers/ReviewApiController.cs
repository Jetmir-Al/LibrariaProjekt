using LibrariaProjekt.Server.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace LibrariaProjekt.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ReviewApiController : ControllerBase
    {
        private readonly IReviewRepository _reviewRepository;

        public ReviewApiController(IReviewRepository reviewRepository)
        {
            _reviewRepository = reviewRepository;
        }

        [HttpPost("reviews")]
        public async Task<IActionResult> GetReviews([FromBody] int bookId)
        {
            var reviews = _reviewRepository.GetReviewsByBookId(bookId);
            return Ok(reviews);
        }


        //public async Task<IActionResult> CreateReview([FromBody] DTO.CreateReviewDto createReviewDto)
        //{
        //    var review = await _reviewRepository.CreateReviewAsync(createReviewDto);
        //    return CreatedAtAction(nameof(GetReviewById), new { id = review.Id }, review);
        //}
    }
}
