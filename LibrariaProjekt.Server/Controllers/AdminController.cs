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
        public IActionResult Create(Admin obj)
        {
            _adminRepository.Insert(obj);
            return RedirectToAction("Index");
        }


        [HttpGet]
        public IActionResult Edit(int id)
        {
            Admin s1 = _adminRepository.GetById(id);
            return View(s1);
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
            Admin s1 = _adminRepository.GetById(id);
            return View(s1);
        }

        [HttpPost]
        public IActionResult Delete(Admin admin)
        {
            _adminRepository.Delete(admin);
            return RedirectToAction("Index");
        }
    }
}
