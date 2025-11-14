using LibrariaProjekt.Server.Models;
namespace LibrariaProjekt.Server.Repositories
{
    public interface IUserRepository
    {
        List<User> GetAll();
        User GetById(int id);
        void Insert(User user);
        void Update(User user);
        void Delete(User user);
        void Save();
    }
}
