using LibrariaProjekt.Server.Data;
using LibrariaProjekt.Server.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace LibrariaProjekt.Server.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly ApplicationDbContext _context;

        public UserRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public List<User> GetAll()
        {
            return _context.Users.ToList();
        }

        public User GetById(int id)
        {
            
            return _context.Users
                           .Include(u => u.Borrows)
                           .Include(u => u.Purchases)
                           .Include(u => u.Reviews)
                           .FirstOrDefault(u => u.Id == id);
        }

        public void Insert(User user)
        {
            _context.Users.Add(user);
            Save();
        }

        public void Update(User user)
        {
            _context.Users.Update(user);
            Save();
        }

        public void Delete(User user)
        {
            if (user != null)
            {
                _context.Users.Remove(user);
                Save(); 
            }
        }

        public void Save()
        {
            _context.SaveChanges();
        }
    }
}
