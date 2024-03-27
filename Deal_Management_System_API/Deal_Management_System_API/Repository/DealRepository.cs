using Deal_Management_System_API.Model;
using Microsoft.EntityFrameworkCore;

namespace Deal_Management_System_API.Repository
{
    public class DealRepository: IDealRepository
    {
        private readonly APIDbContext _appDBContext;
        public DealRepository(APIDbContext context)
        {
            _appDBContext = context ??
                throw new ArgumentNullException(nameof(context));
        }
        public async Task<IEnumerable<Deal>> GetDeal()
        {
            return await _appDBContext.Deals.ToListAsync();
        }
        public async Task<Deal> GetDealByID(int ID)
        {
            return await _appDBContext.Deals.FindAsync(ID);
        }
        public async Task<Deal> InsertDeal(Deal objDeal)
        {
            _appDBContext.Deals.Add(objDeal);
            await _appDBContext.SaveChangesAsync();
            return objDeal;
        }
        public async Task<Deal> UpdateDeal(Deal objDeal)
        {
            _appDBContext.Entry(objDeal).State = EntityState.Modified;
            await _appDBContext.SaveChangesAsync();
            return objDeal;
        }
        public bool DeleteDeal(int ID)
        {
            bool result = false;
            var deal = _appDBContext.Deals.Find(ID);
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
