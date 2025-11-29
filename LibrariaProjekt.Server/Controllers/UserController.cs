using Microsoft.AspNetCore.Mvc;
using LibrariaProjekt.Server.Models;
using LibrariaProjekt.Server.Repositories;

namespace LibrariaProjekt.Server.Controllers
{
    public class UserController : Controller
    {
        private readonly IUserRepository _userRepository;

        public UserController(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public IActionResult Index()
        {
            var entries = _userRepository.GetAll();
            return View(entries);
        }

        [HttpGet]
        public IActionResult Create()
        {
            return View();
        }

        [HttpPost]
      
        public IActionResult Create(User user)
        {
            _userRepository.Insert(user);
            return RedirectToAction("Index");
        }

        [HttpGet]
        public IActionResult Edit(int id)
        {
            User user = _userRepository.GetById(id);
            return View(user);
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
            User user = _userRepository.GetById(id);
            return View(user);
        }

        [HttpPost]
      
        public IActionResult DeleteConfirmed(int id)
        {
            User user = _userRepository.GetById(id);
            if (user != null)
            {
                _userRepository.Delete(user);
            }
            return RedirectToAction("Index");
        }
    }
}
