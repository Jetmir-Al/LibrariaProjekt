/*using LibrariaProjekt.Server.Data;
using LibrariaProjekt.Server.Models;

namespace LibrariaProjekt.Server.Repositories
{
    public class PurchaseRepository : IPurchaseRepository
    {
        private readonly ApplicationDbContext _context;

        public PurchaseRepository(ApplicationDbContext context)
        {
            _context = context;
        }
        public List<Purchase> GetAll()
        {
            List<Purchase> purchases = _context.Purchases.ToList();
            return purchases;
        }

        public void Save()
        {
            _context.SaveChanges();
        }
        public void Insert(Purchase purchase)
        {
            _context.Purchases.Add(purchase);
            Save();
        }
        public void Update(Purchase purchase)
        {
            _context.Purchases.Update(purchase);
            Save();
        }
        public void Delete(Purchase purchase)
        {
            _context.Purchases.Remove(purchase);
            Save();
        }
        public Purchase GetById(int id)
        {
            Purchase? purchase = _context.Purchases.Find(id);
            Save();
            return purchase;
        }
    }
}
*/