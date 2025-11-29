using Microsoft.AspNetCore.Mvc;
using LibrariaProjekt.Server.Models;
using LibrariaProjekt.Server.Repositories;

namespace LibrariaProjekt.Server.Controllers
{
  
    public class BorrowController : Controller
    {
        private readonly IBorrowRepository _borrowRepository;

        public BorrowController(IBorrowRepository
            borrowRepository)
        {
            _borrowRepository = borrowRepository;
        }


        public IActionResult Index()
        {
            var entries = _borrowRepository.GetAll().ToList();
            return View(entries);
        }

        [HttpGet]
        public IActionResult Create()
        {


            return View();
        }

        [HttpPost]
        public IActionResult Create(Borrow obj)
        {
            _borrowRepository.Insert(obj);
            return RedirectToAction("Index");
        }


        [HttpGet]
        public IActionResult Edit(int id)
        {
            Borrow s1 = _borrowRepository.GetById(id);
            return View(s1);
        }

        [HttpPost]
        public IActionResult Edit(Borrow borrow)
        {
            _borrowRepository.Update(borrow);
            return RedirectToAction("Index");
        }
        [HttpGet]
        public IActionResult Delete(int id)
        {
            Borrow s1 = _borrowRepository.GetById(id);
            return View(s1);
        }

        [HttpPost]
        public IActionResult Delete(Borrow borrow)
        {
            _borrowRepository.Delete(borrow);
            return RedirectToAction("Index");
        }
    }
}
