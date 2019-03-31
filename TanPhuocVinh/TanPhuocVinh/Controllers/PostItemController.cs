﻿using System;
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
    [Route("api/post")]
    public class PostItemController : Controller
    {
        private readonly PostItemContext _context;

        public PostItemController(PostItemContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("getall")]
        public async Task<ActionResult<IEnumerable<PostItem>>> GetAll()
        {
            //foreach(var item in _context.PostItems) {
            //    string time = item.Time.ToString("dd/M/yyyy hh:mm:ss");
            //    item.Time = Convert.ToDateTime(time);
            //}
            return await _context.PostItems.ToListAsync();
        }

        [HttpGet]
        [Route("get/{id}")]
        public async Task<ActionResult<PostItem>> GetPost(int id)
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
        [HttpPost]
        [Route("add")]
        public async Task<IActionResult> Add([FromBody]PostItem item)
        {
            if (item == null)
            {
                return BadRequest();
            }

            item.Time = DateTime.Now;
            _context.PostItems.Add(item);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetPost), new { id = item.Id }, item);
        }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
