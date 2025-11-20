using LibrariaProjekt.Server.Data;
using LibrariaProjekt.Server.Models;
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
            List<User> users = _context.Users.ToList();
            return users;
        }
        public void Save()
        {
            _context.SaveChanges();
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
            _context.Users.Remove(user);
            Save();
        }
        public User GetById(int id)
        {
            User? user = _context.Users.Find(id);
            Save();
            return user;
        }
    }
}
