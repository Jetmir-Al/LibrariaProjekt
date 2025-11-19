/*using LibrariaProjekt.Server.Models;

namespace LibrariaProjekt.Server.Repositories
{
    public class BookRepository : IBookRepository
    {
        private readonly ApplicationDbContext _context;
        public BookRepository(ApplicationDbContext context)
        {
            _context = context;
        }
        public List<Book> GetAll()
        {
            List<Book> books = _context.Books.ToList();
            return books;
        }

        public void Save()
        {
            _context.SaveChanges();
        }

        public void Insert(Book book)
        {
            _context.Books.Add(book);
            Save();
        }

        public void Update(Book book)
        {
            _context.Books.Update(book);
            Save();
        }

        public void Delete(Book book)
        {
            _context.Books.Remove(book);
            Save();
        }

        public Book BookById(int id)
        {
            Book? book = _context.Books.Find(id);
            Save();
            return book;
        }
    }
}
*/