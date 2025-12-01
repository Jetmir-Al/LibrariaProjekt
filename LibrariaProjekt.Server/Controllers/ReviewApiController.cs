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
        //masi te bahet login per me i pa review

        [HttpGet("reviews")]
        public IActionResult GetAllReviews()
        {
            var reviews = _reviewRepository.GetAll().ToList();
            return Ok(reviews);
        }
    }
}
