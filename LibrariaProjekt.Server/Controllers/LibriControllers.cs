/*using Microsoft.AspNetCore.Mvc;
using LibrariaProjekt.Server.Models;
using LibrariaProjekt.Server.Repositories;

namespace LibrariaProjekt.Server.Controllers
{
    public class LibriControllers : Controller
    {
        private readonly ILibriRepository _libriRepository;

        public StudentController(IStudentRepository
            studentRepository)
        {
            _libriRepository = libriRepository;
        }


        public IActionResult Index()
        {
            var entries = _libriRepository.GetAll().ToList();
            return View(entries);
        }

        [HttpGet]
        public IActionResult Create()
        {


            return View();
        }

        [HttpPost]
        public IActionResult Create(Libri obj)
        {
            _libriRepository.Insert(obj);
            return RedirectToAction("Index");
        }


        [HttpGet]
        public IActionResult Edit(int id)
        {
            Libri s1 = _libriRepository.GetById(id);
            return View(s1);
        }

        [HttpPost]
        public IActionResult Edit(Libri libri)
        {
            _libriRepository.Update(libri);
            return RedirectToAction("Index");
        }
        [HttpGet]
        public IActionResult Delete(int id)
        {
            Libri s1 = _libriRepository.GetById(id);
            return View(s1);
        }

        [HttpPost]
        public IActionResult Delete(Libri libri)
        {
            _studentRepository.Delete(libri);
            return RedirectToAction("Index");
        }
    }
}
*/