using Microsoft.AspNetCore.Mvc;
using LibrariaProjekt.Server.Models;
using LibrariaProjekt.Server.Repositories;

namespace LibrariaProjekt.Server.Controllers
{
  
    public class BorrowController : Controller
    {
        private readonly IBorrowRepository _borrowRepository;
        private readonly IBookRepository _bookRepository;

        public BorrowController(IBorrowRepository borrowRepository, IBookRepository bookRepository)
        {
            _borrowRepository = borrowRepository;
            _bookRepository = bookRepository;
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
        public IActionResult Edit(Borrow borrowFromForm)
        {
            
            var borrow = _borrowRepository.GetById(borrowFromForm.Id);
            if (borrow == null)
                return NotFound();

           
            borrow.Returned = borrowFromForm.Returned;
            borrow.CardholderName = borrowFromForm.CardholderName;
            borrow.CardNumber = borrowFromForm.CardNumber;
            borrow.ReturnDate = borrowFromForm.ReturnDate;

           
            if (borrow.Returned)
            {
                borrow.LateFee = 0; 

               
                var book = _bookRepository.GetById(borrow.BookId);
                if (book != null)
                {
                    book.Quantity += 1;
                    _bookRepository.Update(book);
                }
            }

            
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
