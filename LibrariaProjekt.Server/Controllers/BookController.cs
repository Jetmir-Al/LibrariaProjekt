using LibrariaProjekt.Server.Models;
using LibrariaProjekt.Server.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace LibrariaProjekt.Server.Controllers
{
    public class BookController : Controller
    {
        private readonly IBookRepository _bookRepository;
        private readonly IWebHostEnvironment _webHostEnvironment;

        public BookController(IBookRepository bookRepository, IWebHostEnvironment webHostEnvironment)
        {
            _bookRepository = bookRepository;
            _webHostEnvironment = webHostEnvironment;
        }

        public IActionResult Index()
        {
            var entries = _bookRepository.GetAll().ToList();
            return View(entries);
        }

        [HttpGet]
        public IActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Create(Book book, IFormFile? imageFile)
        {


            if (imageFile != null && imageFile.Length > 0)
            {
                string uploadsFolder = Path.Combine(_webHostEnvironment.WebRootPath, "images");
                Directory.CreateDirectory(uploadsFolder); // krijo folderin nëse nuk ekziston

                string uniqueFileName = Guid.NewGuid().ToString() + "_" + imageFile.FileName;
                string filePath = Path.Combine(uploadsFolder, uniqueFileName);

                using (var fileStream = new FileStream(filePath, FileMode.Create))
                {
                    imageFile.CopyTo(fileStream);
                }

                // Ruaj path-in e imazhit në databazë
                book.Image = "/images/" + uniqueFileName;
            }

            if (!ModelState.IsValid)
            {
                return View(book);
            }
            _bookRepository.Insert(book);
            return RedirectToAction("Index");
        }

        [HttpGet]
        public IActionResult Edit(int id)
        {
            Book book = _bookRepository.GetById(id);
            return View(book);
        }

        [HttpPost]
        public IActionResult Edit(Book book, IFormFile? imageFile)
        {
            if (imageFile != null && imageFile.Length > 0)
            {
                string uploadsFolder = Path.Combine(_webHostEnvironment.WebRootPath, "images");
                Directory.CreateDirectory(uploadsFolder);

                string uniqueFileName = Guid.NewGuid().ToString() + "_" + imageFile.FileName;
                string filePath = Path.Combine(uploadsFolder, uniqueFileName);

                using (var fileStream = new FileStream(filePath, FileMode.Create))
                {
                    imageFile.CopyTo(fileStream);
                }

                book.Image = "/images/" + uniqueFileName;
            }

            _bookRepository.Update(book);
            return RedirectToAction("Index");
        }

        [HttpGet]
        public IActionResult Delete(int id)
        {
            Book book = _bookRepository.GetById(id);
            return View(book);
        }

        [HttpPost]
        public IActionResult Delete(Book book)
        {
            _bookRepository.Delete(book);
            return RedirectToAction("Index");
        }
    }
}
