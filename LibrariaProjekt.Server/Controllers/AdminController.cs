using Microsoft.AspNetCore.Mvc;
using LibrariaProjekt.Server.Models;
using LibrariaProjekt.Server.Repositories;
using LibrariaProjekt.Server.Data;

namespace LibrariaProjekt.Server.Controllers
{
   
    public class AdminController : Controller
    {
        private readonly IAdminRepository _adminRepository;

        public AdminController(IAdminRepository
            adminRepository)
        {
            _adminRepository = adminRepository;
        }


        public IActionResult Index()
        {
            var entries = _adminRepository.GetAll().ToList();
            return View(entries);
        }

        [HttpGet]
        public IActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Create(Admin admin)
        {
            _adminRepository.Insert(admin);
            return RedirectToAction("Index");
        }


        [HttpGet]
        public IActionResult Edit(int id)
        {
            Admin admin = _adminRepository.GetById(id);
            return View(admin);
        }

        [HttpPost]
        public IActionResult Edit(Admin admin)
        {
            _adminRepository.Update(admin);
            return RedirectToAction("Index");
        }
        [HttpGet]
        public IActionResult Delete(int id)
        {
            Admin admin = _adminRepository.GetById(id);
            return View(admin);
        }

        [HttpPost]
        public IActionResult DeleteConfirmed(int id)
        {
            Admin admin = _adminRepository.GetById(id);
            if (admin != null)
            {
                _adminRepository.Delete(admin);
            }
            return RedirectToAction("Index");
        }
    }
}
