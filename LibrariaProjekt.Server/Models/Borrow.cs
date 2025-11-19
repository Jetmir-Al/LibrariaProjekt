using System.ComponentModel.DataAnnotations;

namespace LibrariaProjekt.Server.Models
{
    public class Borrow
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int BookId { get; set; }
        [Required(ErrorMessage = "Shkruani Datën e huazimit")]
        public DateTime BorrowDate { get; set; }
        [Required(ErrorMessage = "Shkruani Datën e kthimit")]
        public DateTime? ReturnDate { get; set; }
        [Required(ErrorMessage = "Shkruani Sasinë e Librave")]
        public decimal Total { get; set; }
        [Required(ErrorMessage = "Shkruani Emrin e Bankës")]
        public string CardholderName { get; set; }
        [Required(ErrorMessage = "Shkruani Numrin e Kartës")]
        public string CardNumber { get; set; }
    }
}
