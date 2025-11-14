namespace LibrariaProjekt.Server.Models
{
    public class Borrow
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int BookId { get; set; }
        public DateTime BorrowDate { get; set; }
        public DateTime? ReturnDate { get; set; }
        public decimal Total { get; set; }
        public string CardholderName { get; set; }
        public string CardNumber { get; set; }
    }
}
