using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using AutoFix.Models;
using Microsoft.AspNetCore.Authorization;

namespace AutoFix.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MotoristaController : Controller
    {

        private readonly ApplicationDbContext _context;

        public MotoristaController(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IActionResult> Index()
        {
            var applicationDbContext = _context.Motoristas;
            return View(await applicationDbContext.ToListAsync());
        }



        [HttpGet("{IdMotorista}")]
        public IActionResult ObterPorId(int id)
        {

            var motorista = _context.Motoristas.Find(id);

            if(motorista == null)
            {
                return NotFound();
            }

            return Ok(motorista);
        }

        [HttpGet("ObterTodos")]
        public IActionResult ObterTodos()
        {
            var motorista = _context.Motoristas.ToList();
            return Ok(motorista);
        }

        [HttpGet("ObterPorNome")]
        public IActionResult ObterPorNome(string nome)
        {
            var motorista = _context.Motoristas.Where(x => x.Nome.Contains(nome));
            return Ok(motorista);
        }
        [HttpPost]
        public IActionResult Criar(Motorista motorista)
        {
            _context.Add(motorista);
            _context.SaveChanges();

            return CreatedAtAction(nameof(ObterPorId), new { id = motorista.IdMotorista }, motorista);
        }

        [HttpPut("{IdMotorista}")]
        public IActionResult Atualizar(int id, Motorista motorista)
        {
            var motoristaBanco = _context.Motoristas.Find(id);

            if (motoristaBanco == null)
                return NotFound();

            motoristaBanco.Nome = motorista.Nome;
            motoristaBanco.Telefone = motorista.Telefone;
            motoristaBanco.Email = motorista.Email;
            motoristaBanco.Senha = motorista.Senha;

            _context.Motoristas.Update(motoristaBanco);
            _context.SaveChanges();

            return Ok(motoristaBanco);
        }

        [HttpDelete("{IdMotorista}")]
        public IActionResult Deletar(int id)
        {
            var motoristaBanco = _context.Motoristas.Find(id);

            if (motoristaBanco == null)
                return NotFound();

            _context.Motoristas.Remove(motoristaBanco);
            _context.SaveChanges();

            return NoContent();
        }
    }

}
