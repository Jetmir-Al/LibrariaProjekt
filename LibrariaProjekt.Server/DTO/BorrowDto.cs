using System;

namespace LibrariaProjekt.Server.DTO
{
    public class BorrowDto
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string BookTitle { get; set; }
        public DateOnly BorrowDate { get; set; }
        public DateOnly ReturnDate { get; set; }
        public decimal Total { get; set; }
        public decimal LateFee { get; set; }

        public string CardholderName { get; set; }
        public string MaskedCardNumber { get; set; }
        public string? Image { get; set; }
    }
}
