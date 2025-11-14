using System.ComponentModel.DataAnnotations;

namespace LibrariaProjekt.Server.Models
{
    public class Book
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Shkruani Emrin e Librit")]
        public string Title { get; set; }
        
        [Required(ErrorMessage = "Shkruani Emrin e Autorit")]
        public string Author { get; set; }

        [Required(ErrorMessage = "Shkruani Çmimin e Librit")]
        public decimal Price { get; set; }
        [Required(ErrorMessage = "Shkruani Sasin e Librit")]
        public int Quantity { get; set; }
        [Required(ErrorMessage = "Shkruani Kategorin e Librit")]
        public string Category { get; set; }
    }
}
