using Deal_Management_System_API.Model;
using Microsoft.EntityFrameworkCore;

namespace Deal_Management_System_API.Repository
{
    public class HotelRepository: IHotelRepository
    {
        private readonly APIDbContext _appDBContext;
        public HotelRepository(APIDbContext context)
        {
            _appDBContext = context ??
                throw new ArgumentNullException(nameof(context));
        }
        public async Task<IEnumerable<Hotel>> GetHotels()
        {
            return await _appDBContext.Hotels.ToListAsync();
        }
        public async Task<Hotel> GetHotelByID(int ID)
        {
            return await _appDBContext.Hotels.FindAsync(ID);
        }
        public async Task<Hotel> InsertHotel(Hotel objHotel)
        {
            _appDBContext.Hotels.Add(objHotel);
            await _appDBContext.SaveChangesAsync();
            return objHotel;
        }
        public async Task<Hotel> UpdateHotel(Hotel objHotel)
        {
            _appDBContext.Entry(objHotel).State = EntityState.Modified;
            await _appDBContext.SaveChangesAsync();
            return objHotel;
        }
        public bool DeleteHotel(int ID)
        {
            bool result = false;
            var deal = _appDBContext.Hotels.Find(ID);
            if (deal != null)
            {
                _appDBContext.Entry(deal).State = EntityState.Deleted;
                _appDBContext.SaveChanges();
                result = true;
            }
            else
            {
                result = false;
            }
            return result;
        }
    }
}
