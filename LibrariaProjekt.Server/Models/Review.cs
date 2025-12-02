using System.ComponentModel.DataAnnotations;

namespace LibrariaProjekt.Server.Models
{
    public class Review
    {
        public int Id { get; set; }

        public int UserId { get; set; }
        public User User { get; set; }


        public int BookId { get; set; }
        public Book Book { get; set; }

        [Required(ErrorMessage = "Write Review")]
        public int Rating { get; set; }

        [Required(ErrorMessage = "Write Comment")]
        public string Comment { get; set; }
    }
}
