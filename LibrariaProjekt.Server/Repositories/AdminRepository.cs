using LibrariaProjekt.Server.Models;
using LibrariaProjekt.Server.Data;
using System.Collections.Generic;
using System.Linq;

namespace LibrariaProjekt.Server.Repositories
{
    public class AdminRepository : IAdminRepository
    {
        private readonly ApplicationDbContext _context;
        public AdminRepository(ApplicationDbContext context)
        {
            _context = context;
        }
        public List<Admin> GetAll()
        {
            List<Admin> admins = _context.Admins.ToList();
            return admins;
        }

        public void Save()
        {
            _context.SaveChanges();
        }

        public void Insert(Admin admin)
        {
            _context.Admins.Add(admin);
            Save();
        }

        public void Update(Admin admin)
        {
            _context.Admins.Update(admin);
            Save();
        }

        public void Delete(Admin admin)
        {
            _context.Admins.Remove(admin);
            Save();
        }

        public Admin GetById(int id)
        {
            Admin? admin = _context.Admins.Find(id);
            return admin;
        }
        public Admin GetByEmail(string email)
        {
            Admin? admin = _context.Admins.FirstOrDefault(a => a.Email == email);
            return admin;
        }


    }
}
