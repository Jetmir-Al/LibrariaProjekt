using LibrariaProjekt.Server.Repositories;
using Microsoft.AspNetCore.Mvc;


namespace LibrariaProjekt.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BookApiController : ControllerBase
    {
        private readonly IBookRepository _bookRepository;
        private readonly IWebHostEnvironment _webHostEnvironment;

        public BookApiController(IBookRepository bookRepository, IWebHostEnvironment webHostEnvironment)
        {
            _bookRepository = bookRepository;
            _webHostEnvironment = webHostEnvironment;
        }

        [HttpGet("books")]
        public IActionResult GetAllBooks()
        {
            var books = _bookRepository.GetAll().ToList();
            return Ok(books);
        }

        [HttpGet("books/{id}")]
        public IActionResult GetBookById(int id)
        {
            var book = _bookRepository.GetById(id);
            if (book == null)
            {
                return NotFound();
            }
            return Ok(book);
        }
        [HttpGet("featured")]
        public IActionResult GetEightBooks()
        {
            var books = _bookRepository.GetAll()
                .Take(8)   
                .ToList();

            return Ok(books);
        }
        [HttpGet("latest")]
        public IActionResult GetLatestBooks()
        {
            var latestBooks = _bookRepository.GetAll()
                .OrderByDescending(b => b.Id)
                .Take(3)
                .ToList();

            return Ok(latestBooks);
        }
    }
}
