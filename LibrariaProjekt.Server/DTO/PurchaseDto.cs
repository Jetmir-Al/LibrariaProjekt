namespace LibrariaProjekt.Server.DTO
{
    public class PurchaseDto
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string BookTitle { get; set; }
        public int Quantity { get; set; }
        public decimal Total { get; set; }
        public DateTime PurchaseDate { get; set; }
        public string CardholderName { get; set; }
        public string MaskedCardNumber { get; set; }
        public string? Image { get; set; }

    }
}
