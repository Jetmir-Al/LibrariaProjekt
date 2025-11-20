using Microsoft.AspNetCore.Mvc;
using LibrariaProjekt.Server.Models;
using LibrariaProjekt.Server.Repositories;

namespace LibrariaProjekt.Server.Controllers
{
    public class UserController : Controller
    {
        private readonly IUserRepository _userRepository;

        public UserController(IUserRepository
            userRepository)
        {
            _userRepository = userRepository;
        }


        public IActionResult Index()
        {
            var entries = _userRepository.GetAll().ToList();
            return View(entries);
        }

        [HttpGet]
        public IActionResult Create()
        {


            return View();
        }

        [HttpPost]
        public IActionResult Create(User obj)
        {
            _userRepository.Insert(obj);
            return RedirectToAction("Index");
        }


        [HttpGet]
        public IActionResult Edit(int id)
        {
            User s1 = _userRepository.GetById(id);
            return View(s1);
        }

        [HttpPost]
        public IActionResult Edit(User user)
        {
            _userRepository.Update(user);
            return RedirectToAction("Index");
        }
        [HttpGet]
        public IActionResult Delete(int id)
        {
            User s1 = _userRepository.GetById(id);
            return View(s1);
        }

        [HttpPost]
        public IActionResult Delete(User user)
        {
            _userRepository.Delete(user);
            return RedirectToAction("Index");
        }
    }
}
