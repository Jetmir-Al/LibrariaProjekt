/*using LibrariaProjekt.Server.Data;
using LibrariaProjekt.Server.Models;

namespace LibrariaProjekt.Server.Repositories
{
    public class BorrowRepository : IBorrowRepository
    {
        private readonly ApplicationDBContext _context;
        public BorrowRepository(ApplicationDBContext context)
        {
            _context = context;
        }

        public List<Borrow> GetAll()
        {
            List<Borrow> borrows = _context.Borrows.ToList();
            return borrows;
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
            Borrow? borrow = _context.Borrows.Find(id);
            Save();
            return borrow;
        }
    }
}
*/