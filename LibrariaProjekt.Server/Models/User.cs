using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace LibrariaProjekt.Server.Models
{
    public class User
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Write Name")]
        public string Name { get; set; }

        [Required(ErrorMessage = "Write Email")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Write Password")]
        public string Password { get; set; }

        public DateTime CreatedAt { get; set; }

       
        public ICollection<Borrow> Borrows { get; set; }
        public ICollection<Purchase> Purchases { get; set; }
        public ICollection<Review> Reviews { get; set; }
    }
}
