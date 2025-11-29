using System.ComponentModel.DataAnnotations;

namespace LibrariaProjekt.Server.Models
{
    public class Admin
    {
        public int Id { get; set; }
        [Required(ErrorMessage = "Name")]
        public string Name { get; set; }
        [Required(ErrorMessage = "Email")]
        public string Email { get; set; }
        [Required(ErrorMessage = "Password")]
        public string Password { get; set; }
    }
}
