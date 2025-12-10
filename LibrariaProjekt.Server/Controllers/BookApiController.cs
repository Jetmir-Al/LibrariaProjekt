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
        [HttpGet("advanced")]
        public IActionResult GetBooksAdvanced(
            int page = 1,
            int pageSize = 20,
            string? search = null,
            string? categories = null,
            string? sort = null)
        {
            var query = _bookRepository.GetAll().AsQueryable();

            
            if (!string.IsNullOrEmpty(search))
            {
                query = query.Where(b =>
                    b.Title.Contains(search) ||
                    b.Author.Contains(search));
            }

          
            if (!string.IsNullOrEmpty(categories))
            {
                var list = categories.Split(',').ToList();
                query = query.Where(b => list.Contains(b.Category));
            }

            
            query = sort switch
            {
                "name" => query.OrderBy(b => b.Title),
                "price" => query.OrderBy(b => b.Price),
                "new" => query.OrderByDescending(b => b.Id),
                "old" => query.OrderBy(b => b.Id),
                _ => query.OrderBy(b => b.Id)
            };

            
            var totalBooks = query.Count();

           
            var books = query
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToList();

            return Ok(new
            {
                data = books,
                page = page,
                totalBooks = totalBooks,
                totalPages = (int)Math.Ceiling(totalBooks / (double)pageSize)
            });
        }
        [HttpPost("buy")]
        public IActionResult BuyBook(int id, int quantity)
        {
            var result = _bookRepository.ReduceQuantity(id, quantity);

            if (!result)
                return BadRequest("Nuk ka mjaftueshëm sasi!");

            return Ok("Blerja u krye me sukses!");
        }

    }
}


