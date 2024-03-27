using Deal_Management_System_API.Model;
using Deal_Management_System_API.Repository;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Deal_Management_System_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HotelController : ControllerBase
    {
        private readonly IHotelRepository _hotel;
        private readonly IDealRepository _deal;
        private readonly IWebHostEnvironment _env;

        public HotelController(IHotelRepository hotel, IDealRepository deal, IWebHostEnvironment env)
        {
            _hotel = hotel ??
                throw new ArgumentNullException(nameof(hotel));
            _deal = deal ??
                throw new ArgumentNullException(nameof(deal));
            _env = env ??
                throw new ArgumentNullException(nameof(env));
        }

        // GET: api/<HotelController>
        [HttpGet]
        [Route("GetHotel")]
        public async Task<IActionResult> Get()
        {
            return Ok(await _hotel.GetHotels());
        }

        // GET api/<HotelController>/5
        [HttpGet("GetHotelByID{id}")]
        public async Task<IActionResult> GetHotelByID(int id)
        {
            return Ok(await _hotel.GetHotelByID(id));
        }

        // POST api/<HotelController>
        [HttpPost]
        [Route("AddHotel")]
        public async Task<IActionResult> Post(Hotel htl)
        {
            var result = await _hotel.InsertHotel(htl);
            if (result.HotelID == 0)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Something Went Wrong");
            }
            return Ok("Added Successfully");
        }

        // PUT api/<HotelController>/5
        [HttpPut]
        [Route("UpdateHotel")]
        public async Task<IActionResult> Put(Hotel htl)
        {
            await _hotel.UpdateHotel(htl);
            return Ok("Update Successfully");
        }

        // DELETE api/<HotelController>/5
        [HttpDelete]
        [Route("DeleteHotel")]
        public JsonResult Delete(int id)
        {
            var result = _hotel.DeleteHotel(id);
            return new JsonResult("Deleted Successfully");
        }

        [Route("SaveFile")]
        [HttpPost]
        public JsonResult SaveFile()
        {
            try
            {
                var httpRequest = Request.Form;
                var postedFile = httpRequest.Files[0];
                string filename = postedFile.FileName;
                var physicalPath = _env.ContentRootPath + "/Photos/" + filename;

                using (var stream = new FileStream(physicalPath, FileMode.Create))
                {
                    stream.CopyTo(stream);
                }

                return new JsonResult(filename);
            }
            catch (Exception)
            {
                return new JsonResult("anonymous.png");
            }
        }

        [HttpGet]
        [Route("GetDeal")]
        public async Task<IActionResult> GetAllDepartmentNames()
        {
            return Ok(await _deal.GetDeal());
        }
    }
}
