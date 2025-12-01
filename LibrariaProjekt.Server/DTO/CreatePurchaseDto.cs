using System;
using System.ComponentModel.DataAnnotations;

namespace LibrariaProjekt.Server.DTO
{
    public class CreatePurchaseDto
    {

      
        [Required]
        public string CardholderName { get; set; }

        [Required]
        public string CardNumber { get; set; }

        public DateTime PurchaseDate { get; set; } = DateTime.Now;
    }
}
