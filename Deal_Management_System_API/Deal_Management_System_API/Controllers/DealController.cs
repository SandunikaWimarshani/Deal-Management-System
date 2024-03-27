using Deal_Management_System_API.Model;
using Deal_Management_System_API.Repository;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Deal_Management_System_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DealController : ControllerBase
    {
        private readonly IDealRepository _deal;

        public DealController(IDealRepository deal)
        {
            _deal = deal ??
                throw new ArgumentNullException(nameof(deal));

        }


        // GET: api/<DealController>
        [HttpGet]
        [Route("GetDeal")]
        public async Task <IActionResult> Get()
        {
            return Ok(await _deal.GetDeal());
        }

        // GET api/<DealController>/5
        [HttpGet]
        [Route("GetDealID/{ID}")]
        public async Task <IActionResult> GetDealByID(int id)
        {
            return Ok(await _deal.GetDealByID(id));
        }

        // POST api/<DealController>
        [HttpPost]
        [Route("AddDeal")]
        public async Task<IActionResult> Post(Deal de)
        {
            var result = await _deal.InsertDeal(de);
            if (result.DealID == 0)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Something Went Wrong");
            }
            return Ok("Added Successfully");
        }
        [HttpPut]
        [Route("UpdateDeal")]
        public async Task<IActionResult> Put(Deal de)
        {
            await _deal.UpdateDeal(de);
            return Ok("Updated Successfully");
        }
        [HttpDelete]
        //[HttpDelete("{id}")]
        [Route("DeleteDeal")]
        public JsonResult Delete(int id)
        {
            _deal.DeleteDeal(id);
            return new JsonResult("Deleted Successfully");
        }
    }
}
