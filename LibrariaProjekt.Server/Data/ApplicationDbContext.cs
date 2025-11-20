using LibrariaProjekt.Server.Models;
using Microsoft.EntityFrameworkCore;

namespace LibrariaProjekt.Server.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<Admin> Admins { get; set; }
        public DbSet<Book> Books { get; set; }
        public DbSet<Borrow> Borrows { get; set; }
        public DbSet<Purchase> Purchases { get; set; }
        public DbSet<Review> Reviews { get; set; }
        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

           
            modelBuilder.Entity<Book>(entity =>
            {
                entity.Property(e => e.Price).HasPrecision(18, 2);
            });
            modelBuilder.Entity<Borrow>(entity =>
            {
                entity.Property(e => e.Total).HasPrecision(18, 2);
            });
            modelBuilder.Entity<Purchase>(entity =>
            {
                entity.Property(e => e.Total).HasPrecision(18, 2);
            });
        }
    }
}
