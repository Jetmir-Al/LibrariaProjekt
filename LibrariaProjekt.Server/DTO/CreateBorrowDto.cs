using System;
using System.ComponentModel.DataAnnotations;

namespace LibrariaProjekt.Server.DTO
{
    public class CreateBorrowDto
    {
        [Required]
        public DateOnly BorrowDate { get; set; }

        [Required]
        public DateOnly? ReturnDate { get; set; }

        [Required]
        public string CardholderName { get; set; }

        [Required]
        public string CardNumber { get; set; }
    }
}
