using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Deal_Management_System_API.Migrations
{
    /// <inheritdoc />
    public partial class NewInitialDatabase : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Hotel",
                table: "Deal",
                type: "text",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Hotel",
                table: "Deal");
        }
    }
}
