using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Deal_Management_System_API.Model
{
    [Table("Hotel")]
    public class Hotel
    {
        [Key]
        public int HotelID { get; set; }
        public string HotelName { get; set; }
        public string Address { get; set; }
        public string ContactNo {  get; set; }
        public decimal Rating { get; set; }


    }
}
