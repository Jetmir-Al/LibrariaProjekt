/*using Microsoft.AspNetCore.Mvc;
using LibrariaProjekt.Server.Models;
using LibrariaProjekt.Server.Repositories;

namespace LibrariaProjekt.Server.Controllers
{
    public class PurchaseController : Controller
    {
        private readonly IPurchaseRepository _purchaseRepository;

        public PurchaseController(IPurchaseRepository
            purchaseRepository)
        {
            _purchaseRepository = purchaseRepository;
        }


        public IActionResult Index()
        {
            var entries = _purchaseRepository.GetAll().ToList();
            return View(entries);
        }

        [HttpGet]
        public IActionResult Create()
        {


            return View();
        }

        [HttpPost]
        public IActionResult Create(Purchase obj)
        {
            _purchaseRepository.Insert(obj);
            return RedirectToAction("Index");
        }


        [HttpGet]
        public IActionResult Edit(int id)
        {
            Purchase s1 = _purchaseRepository.GetById(id);
            return View(s1);
        }

        [HttpPost]
        public IActionResult Edit(Purchase purchase)
        {
            _purchaseRepository.Update(purchase);
            return RedirectToAction("Index");
        }
        [HttpGet]
        public IActionResult Delete(int id)
        {
            Purchase s1 = _purchaseRepository.GetById(id);
            return View(s1);
        }

        [HttpPost]
        public IActionResult Delete(Purchase purchase)
        {
            _purchaseRepository.Delete(purchase);
            return RedirectToAction("Index");
        }
    }
}
*/