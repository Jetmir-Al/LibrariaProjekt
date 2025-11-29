using System;

namespace LibrariaProjekt.Server.Models
{
    public class Purchase
    {
        public int Id { get; set; }

      
        public int UserId { get; set; }
        public User User { get; set; }  

      
        public int BookId { get; set; }
        public Book Book { get; set; }

        public DateTime PurchaseDate { get; set; }

        public int Quantity { get; set; }

        public decimal Total { get; set; }

        public string CardholderName { get; set; }

        public string CardNumber { get; set; }
    }
}
