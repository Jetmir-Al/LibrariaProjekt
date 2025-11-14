using LibrariaProjekt.Server.Models;
namespace LibrariaProjekt.Server.Repositories
{
    public interface IReviewRepository
    {
        List<Review> GetAll();
        Review GetById(int id);
        void Insert(Review review);
        void Update(Review review);
        void Delete(Review review);
        void Save();
    }
}
