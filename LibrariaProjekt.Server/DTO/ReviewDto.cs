namespace LibrariaProjekt.Server.DTO
{
    public class ReviewDto
    {
        public int Id { get; set; }
        public int UserID { get; set; }
        public UserDto User { get; set; }
        public string BookTitle { get; set; }
        public int Rating { get; set; }
        public string Comment { get; set; }

    }
}
