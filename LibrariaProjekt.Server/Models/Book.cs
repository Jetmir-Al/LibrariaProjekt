using System.ComponentModel.DataAnnotations;

namespace LibrariaProjekt.Server.Models
{
    public class Book
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Please enter the book title")]
        public string Title { get; set; }
        
        [Required(ErrorMessage = "Please enter the author's name")]
        public string Author { get; set; }
        [Required(ErrorMessage = "Please enter the year of publication")]
        public int PublishYear { get; set; }

        [Required(ErrorMessage = "Please enter the book price")]
        public decimal Price { get; set; }
        [Required(ErrorMessage = "Please enter the book quantity")]
        public int Quantity { get; set; }
        [Required(ErrorMessage = "Please enter the book category")]
        public string Category { get; set; }
        public string? Image { get; set; }



    }
}
