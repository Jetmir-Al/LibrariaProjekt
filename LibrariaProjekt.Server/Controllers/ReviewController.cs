/*using Microsoft.AspNetCore.Mvc;
using LibrariaProjekt.Server.Models;
using LibrariaProjekt.Server.Repositories;

namespace LibrariaProjekt.Server.Controllers
{
    public class ReviewController : Controller
    {
        private readonly IReviewRepository _reviewRepository;

        public ReviewController(IReviewRepository
            reviewRepository)
        {
            _reviewRepository = reviewRepository;
        }


        public IActionResult Index()
        {
            var entries = _reviewRepository.GetAll().ToList();
            return View(entries);
        }

        [HttpGet]
        public IActionResult Create()
        {


            return View();
        }

        [HttpPost]
        public IActionResult Create(Review obj)
        {
            _reviewRepository.Insert(obj);
            return RedirectToAction("Index");
        }


        [HttpGet]
        public IActionResult Edit(int id)
        {
            Review s1 = _reviewRepository.GetById(id);
            return View(s1);
        }

        [HttpPost]
        public IActionResult Edit(Review review)
        {
            _reviewRepository.Update(review);
            return RedirectToAction("Index");
        }
        [HttpGet]
        public IActionResult Delete(int id)
        {
            Review s1 = _reviewRepository.GetById(id);
            return View(s1);
        }

        [HttpPost]
        public IActionResult Delete(Review review)
        {
            _reviewRepository.Delete(review);
            return RedirectToAction("Index");
        }
    }
}
*/