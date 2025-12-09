using LibrariaProjekt.Server.Data;
using LibrariaProjekt.Server.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Net;

namespace LibrariaProjekt.Server.Repositories
{
    public class BorrowRepository : IBorrowRepository
    {
        private readonly ApplicationDbContext _context;
        public BorrowRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public List<Borrow> GetAll()
        {
            var borrows = _context.Borrows
                .Include(b => b.User)
                .Include(b => b.Book)
                .ToList();

            
            borrows.ForEach(b => CalculateLateFee(b));

            return borrows;
        }

        public List<Borrow> GetBorrowByBookId(int bookId)
        {
            var borrows = _context.Borrows
                .Where(r => r.BookId == bookId)
                .Include(r => r.User)
                .Include(r => r.Book)
                .ToList();

            borrows.ForEach(b => CalculateLateFee(b));
            return borrows;
        }
        public void Save()
        {
            _context.SaveChanges();
        }
        public void Insert(Borrow borrow)
        {
            CalculateLateFee(borrow);
            _context.Borrows.Add(borrow);
            Save();
        }
        public void Update(Borrow borrow)
        {
            CalculateLateFee(borrow);
            _context.Borrows.Update(borrow);
            Save();
        }
        public void Delete(Borrow borrow)
        {
            _context.Borrows.Remove(borrow);
            Save();
        }
        public List<Borrow> GetBorrowByUserId(int userId)
        {
            var borrows = _context.Borrows
                .Include(p => p.User)
                .Include(p => p.Book)
                .Where(p => p.UserId == userId)
                .ToList();

            borrows.ForEach(b => CalculateLateFee(b));
            return borrows;
        }

        public Borrow GetById(int id)
        {
            var borrow = _context.Borrows
                .Include(r => r.User)
                .Include(r => r.Book)
                .FirstOrDefault(r => r.Id == id);

            if (borrow != null)
                CalculateLateFee(borrow);

            return borrow;
        }

        public void CalculateLateFee(Borrow borrow)
        {
            if (borrow.ReturnDate.HasValue)
            {
                var today = DateOnly.FromDateTime(DateTime.Today);
                var overdueDays = today.DayNumber - borrow.ReturnDate.Value.DayNumber;
                borrow.LateFee = overdueDays > 0 ? overdueDays * 0.5m : 0m;
            }
            else
            {
                borrow.LateFee = 0m;
            }
        }
    }
}
