using System.ComponentModel.DataAnnotations;

namespace LibrariaProjekt.Server.DTO
{
    public class CreateReviewDto
    {
        [Required]
        public int UserId { get; set; }
        [Required]

        public int BookId { get; set; }
        [Required]

        public int Rating { get; set; }
        [Required]

        public string Comment { get; set; }
    }
}
