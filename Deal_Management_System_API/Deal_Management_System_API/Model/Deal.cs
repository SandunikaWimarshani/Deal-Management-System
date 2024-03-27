using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Deal_Management_System_API.Model
{
    [Table("Deal")]
    public class Deal
    {
        [Key]
        public int DealID { get; set; }
        public string DealName { get; set; }
        public string Hotel { get; set; }
        public decimal Price { get; set; }
        public string Description { get; set; }

    }
}
