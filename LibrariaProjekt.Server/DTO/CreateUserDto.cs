using System.ComponentModel.DataAnnotations;

namespace LibrariaProjekt.Server.DTO
{
    public class CreateUserDto
    {
        
        [Required(ErrorMessage = "Write Name")]
        public string Name { get; set; }

        [Required(ErrorMessage = "Write Email")]
        [EmailAddress(ErrorMessage = "Invalid Email Format")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Write Password")]
        public string Password { get; set; }
    }
}

