using System.ComponentModel.DataAnnotations;

namespace LibrariaProjekt.Server.DTO
{
    public class CreateReviewDto
    {

        [Required]
        public int Rating { get; set; }
        [Required]
        public string Comment { get; set; }
    }
}
