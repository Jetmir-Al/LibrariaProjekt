using LibrariaProjekt.Server.Data;
using LibrariaProjekt.Server.Models;
using System.Collections.Generic;
using System.Linq;

namespace LibrariaProjekt.Server.Repositories
{
    public class ReviewRepository :IReviewRepository
    {
        private readonly ApplicationDbContext _context;

        public ReviewRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public List<Review> GetAll()
        {
            List<Review> reviews = _context.Reviews.ToList();
            return reviews;
        }
        public void Save()
        {
            _context.SaveChanges();
        }
        public void Insert(Review review)
        {
            _context.Reviews.Add(review);
            Save();
        }
        public void Update(Review review)
        {
            _context.Reviews.Update(review);
            Save();
        }
        public void Delete(Review review)
        {
            _context.Reviews.Remove(review);
            Save();
        }
        public Review GetById(int id)
        {
            Review? review = _context.Reviews.Find(id);
            Save();
            return review;
        }
    }
}
