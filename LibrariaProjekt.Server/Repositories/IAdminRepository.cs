using LibrariaProjekt.Server.Models;

namespace LibrariaProjekt.Server.Repositories
{
    public interface IAdminRepository
    {
        List<Admin> GetAll();
        Admin GetById(int id);
        void Insert(Admin admin);
        void Update(Admin admin);
        void Delete(Admin admin);
        void Save();
    }
}
