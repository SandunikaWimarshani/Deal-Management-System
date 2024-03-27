using Deal_Management_System_API.Model;

namespace Deal_Management_System_API.Repository
{
    public interface IHotelRepository
    {
        Task<IEnumerable<Hotel>> GetHotels();
        Task<Hotel> GetHotelByID(int ID);
        Task<Hotel> InsertHotel(Hotel objHotel);
        Task<Hotel> UpdateHotel(Hotel objHotel);
        bool DeleteHotel(int ID);
    }
}
