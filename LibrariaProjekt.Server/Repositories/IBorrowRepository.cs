using LibrariaProjekt.Server.Models;
namespace LibrariaProjekt.Server.Repositories
{
    public interface IBorrowRepository
    {
        List<Borrow> GetAll();
        Borrow GetById(int id);
        List<Borrow> GetBorrowByUserId(int userId);
        void Insert(Borrow borrow);
        void Update(Borrow borrow);
        void Delete(Borrow borrow);
        void Save();
    }
}
