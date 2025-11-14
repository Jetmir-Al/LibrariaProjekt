using LibrariaProjekt.Server.Models;
namespace LibrariaProjekt.Server.Repositories
{
    public interface IBookRepository
    {
        List<Book> GetAll();
        Book GetById(int id);

        void Insert(Book book);
        void Update(Book book);
        void Delete(Book book);
        void Save();
    }
}
