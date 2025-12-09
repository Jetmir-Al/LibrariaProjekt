using System;
using System.ComponentModel.DataAnnotations;

namespace LibrariaProjekt.Server.Models
{
    public class Borrow
    {
        public int Id { get; set; }

        public int UserId { get; set; }
        public User User { get; set; } 

        public int BookId { get; set; }
        public Book Book { get; set; } 

        [Required(ErrorMessage = "Please enter the borrow date")]
        public DateOnly BorrowDate { get; set; }

        [Required(ErrorMessage = "Please enter the return date")]
        public DateOnly? ReturnDate { get; set; }

        [Required(ErrorMessage = "Please enter the total number of books")]
        public decimal Total { get; set; }

        [Required(ErrorMessage = "Please enter the cardholder's name")]
        public string CardholderName { get; set; }

        [Required(ErrorMessage = "Please enter the card number")]
        public string CardNumber { get; set; }
        public bool Returned { get; set; } = false;
        public decimal LateFee { get; set; } = 0;

    }
}
