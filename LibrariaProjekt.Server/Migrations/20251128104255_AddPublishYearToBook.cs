using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace LibrariaProjekt.Server.Migrations
{
    /// <inheritdoc />
    public partial class AddPublishYearToBook : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "PublishYear",
                table: "Books",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PublishYear",
                table: "Books");
        }
    }
}
