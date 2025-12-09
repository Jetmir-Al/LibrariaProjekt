using LibrariaProjekt.Server.Data;
using LibrariaProjekt.Server.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace LibrariaProjekt.Server.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly ApplicationDbContext _context;
        private readonly PasswordHasher<User> _passwordHasher = new PasswordHasher<User>();

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

        public User GetByEmail(string email)
        {
            return _context.Users
                           .Include(u => u.Borrows)
                           .Include(u => u.Purchases)
                           .Include(u => u.Reviews)
                           .FirstOrDefault(u => u.Email == email);
        }

        public void Insert(User user)
        {
            user.Password = _passwordHasher.HashPassword(user, user.Password);
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
