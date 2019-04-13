using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TanPhuocVinh.Models;
using System.Globalization;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TanPhuocVinh.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostItemController : ControllerBase
    {
        private readonly PostItemContext _context;

        public PostItemController(PostItemContext context)
        {
            _context = context;
        }

        [HttpGet("GetAll")]
        public async Task<ActionResult<IEnumerable<PostItem>>> GetAll()
        {

            return await _context.PostItems.ToListAsync();
        }

        [HttpGet("GetPostItem")]
        public async Task<ActionResult<PostItem>> GetPostItem(int id)
        {
            var todoItem = await _context.PostItems.FindAsync(id);

            if (todoItem == null)
            {
                return NotFound();
            }

            //string time = todoItem.Time.ToString("dd/M/yyyy hh:mm:ss");
            //todoItem.Time = Convert.ToDateTime(time);

            return todoItem;
        }

        // POST: api/postitem
        [HttpPost("Add")]
        public async Task<IActionResult> Add([FromBody]PostItem item)
        {
            if (item == null)
            {
                return BadRequest();
            }

            item.Time = DateTime.Now;
            _context.PostItems.Add(item);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetPostItem), new { id = item.Id }, item);
        }

        [HttpPut("Update")]
        public async Task<IActionResult> Update(int id, [FromBody]PostItem item)
        {
            item.Id = id;
            item.Time = DateTime.Now;
            _context.Entry(item).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            var result = await _context.PostItems.FindAsync(id);
            return Ok(result);
        }

        [HttpDelete("Delete")]
        public async Task<IActionResult> Delete(int id)
        {
            var item = await _context.PostItems.FindAsync(id);

            if (item == null)
            {
                return NotFound();
            }

            _context.PostItems.Remove(item);
            await _context.SaveChangesAsync();

            return Ok();
        }
    }
}
