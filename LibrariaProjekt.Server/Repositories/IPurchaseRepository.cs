using LibrariaProjekt.Server.Models;
namespace LibrariaProjekt.Server.Repositories
{
    public interface IPurchaseRepository
    {
        List<Purchase> GetAll();
        Purchase GetById(int id);
        List<Purchase> GetPurchaseByUserId(int userId);
        void Insert(Purchase purchase);
        void Update(Purchase purchase);
        void Delete(Purchase purchase);
        void Save();
    }
}
