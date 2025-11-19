/*using Microsoft.AspNetCore.Mvc;
using LibrariaProjekt.Server.Models;
using LibrariaProjekt.Server.Repositories;

namespace LibrariaProjekt.Server.Controllers
{
    public class BookController : Controller
    {
        private readonly IBookRepository _bookRepository;

        public BookController(IBookRepository
            bookRepository)
        {
            _bookRepository = bookRepository;
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
        public IActionResult Create(Book obj)
        {
            _bookRepository.Insert(obj);
            return RedirectToAction("Index");
        }


        [HttpGet]
        public IActionResult Edit(int id)
        {
            Book s1 = _bookRepository.GetById(id);
            return View(s1);
        }

        [HttpPost]
        public IActionResult Edit(Book book)
        {
            _bookRepository.Update(book);
            return RedirectToAction("Index");
        }
        [HttpGet]
        public IActionResult Delete(int id)
        {
            Book s1 = _bookRepository.GetById(id);
            return View(s1);
        }

        [HttpPost]
        public IActionResult Delete(Book book)
        {
            _bookRepository.Delete(book);
            return RedirectToAction("Index");
        }
    }
}
*/