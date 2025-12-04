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
            List<Borrow> Borrows = _context.Borrows.ToList();
            return Borrows;
        }
        public List<Borrow> GetBorrowByBookId(int bookId)
        {
            return _context.Borrows
                .Where(r => r.BookId == bookId)
                .Include(r => r.User)
                .Include(r => r.Book)
                .ToList();
        }
        public void Save()
        {
            _context.SaveChanges();
        }
        public void Insert(Borrow borrow)
        {
            _context.Borrows.Add(borrow);
            Save();
        }
        public void Update(Borrow borrow)
        {
            _context.Borrows.Update(borrow);
            Save();
        }
        public void Delete(Borrow borrow)
        {
            _context.Borrows.Remove(borrow);
            Save();
        }

        public Borrow GetById(int id)
        {
            return _context.Borrows
                .Include(r => r.User)
                .Include(r => r.Book)
                .FirstOrDefault(r => r.Id == id);
        }
    }
}
