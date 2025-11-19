using System.ComponentModel.DataAnnotations;

namespace LibrariaProjekt.Server.Models
{
    public class User
    {
        public int Id { get; set; }
        [Required(ErrorMessage = "Shkruani Emrin")]
        public string Name { get; set; }
        [Required(ErrorMessage = "Shkruani Email")]
        public string Email { get; set; }
        [Required(ErrorMessage = "Shkruani Fjalëkalimin")]
        public string Password { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}
