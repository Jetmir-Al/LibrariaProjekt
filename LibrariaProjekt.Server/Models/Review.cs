using System.ComponentModel.DataAnnotations;

namespace LibrariaProjekt.Server.Models
{
    public class Review
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int BookId { get; set; }
        [Required(ErrorMessage = "Shkruani Vlerësimin")]
        public int Rating { get; set; }
        [Required(ErrorMessage = "Shkruani Komentimin")]
        public string Comment { get; set; }
    }
}
