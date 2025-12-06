using System;
using System.ComponentModel.DataAnnotations;

namespace LibrariaProjekt.Server.DTO
{
    public class CreateBorrowDto
    {
        [Required]
        public DateTime BorrowDate { get; set; }

        [Required]
        public DateTime? ReturnDate { get; set; }

        [Required]
        public string CardholderName { get; set; }

        [Required]
        public string CardNumber { get; set; }
    }
}
