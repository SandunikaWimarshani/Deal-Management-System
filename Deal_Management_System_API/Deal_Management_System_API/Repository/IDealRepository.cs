using Deal_Management_System_API.Model;

namespace Deal_Management_System_API.Repository
{
    public interface IDealRepository
    {
        Task<IEnumerable<Deal>> GetDeal();
        Task<Deal> GetDealByID(int ID);
        Task<Deal> InsertDeal(Deal objDeal);
        Task<Deal> UpdateDeal(Deal objDeal);
        bool DeleteDeal(int ID);
    }
}
