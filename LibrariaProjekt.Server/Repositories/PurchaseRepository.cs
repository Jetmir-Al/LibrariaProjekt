using LibrariaProjekt.Server.Data;
using LibrariaProjekt.Server.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace LibrariaProjekt.Server.Repositories
{
    public class PurchaseRepository : IPurchaseRepository
    {
        private readonly ApplicationDbContext _context;

        public PurchaseRepository(ApplicationDbContext context)
        {
            _context = context;
        }
        public List<Purchase> GetAll()
        {
            List<Purchase> purchases = _context.Purchases.ToList();
            return purchases;
        }
        public List<Purchase> GetPurchaseByBookId(int bookId)
        {
            // Include edhe User edhe Book
            return _context.Purchases
                .Where(r => r.BookId == bookId)
                .Include(r => r.User)
                .Include(r => r.Book)
                .ToList();
        }
        public void Save()
        {
            _context.SaveChanges();
        }
        public void Insert(Purchase purchase)
        {
            _context.Purchases.Add(purchase);
            Save();
        }
        public void Update(Purchase purchase)
        {
            _context.Purchases.Update(purchase);
            Save();
        }
        public void Delete(Purchase purchase)
        {
            _context.Purchases.Remove(purchase);
            Save();
        }

        public List<Purchase> GetPurchaseByUserId(int userId)
        {
            return _context.Purchases
                .Include(p => p.User)
                .Include(p => p.Book)
                .Where(p => p.UserId == userId)
                .ToList();
        }

        public Purchase GetById(int id)
        {
            return _context.Purchases
                .Include(r => r.User)
                .Include(r => r.Book)
                .FirstOrDefault(r => r.Id == id);
        }

    }
}
