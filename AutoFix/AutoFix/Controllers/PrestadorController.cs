using Microsoft.AspNetCore.Mvc;
using AutoFix.Models;

namespace AutoFix.Controllers
{
    
[ApiController]
    [Route("api/[controller]")]
    public class PrestadorController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public PrestadorController(ApplicationDbContext context)
        {
            _context = context;
        }
        [HttpGet("{IdPrestador}")]
        public IActionResult ObterPorId(int id)
        {
            var prestador = _context.PrestadorServicos.Find(id);

            if(prestador == null)
            {
                return NotFound();
            }

            return Ok(prestador);
        }

        [HttpGet("ObterTodos")]
        public IActionResult ObterTodos()
        {
            var prestador = _context.PrestadorServicos.ToList();
            return Ok(prestador);
        }

        [HttpGet("ObterPorNome")]
        public IActionResult ObterPorNome(string nome)
        {
            var prestador = _context.PrestadorServicos.Where(x => x.Nome.Contains(nome));
            return Ok(prestador);
        }
        [HttpPost]
        public IActionResult Criar(PrestadorServico prestador)
        {     
            _context.Add(prestador);
            _context.SaveChanges();

            return CreatedAtAction(nameof(ObterPorId), new { id = prestador.IdPrestador }, prestador);
        }

        [HttpPut("{IdPrestador}")]
        public IActionResult Atualizar(int id, PrestadorServico prestador)
        {
            var prestadorBanco = _context.PrestadorServicos.Find(id);

            if (prestadorBanco == null)
                return NotFound();

            prestadorBanco.Nome = prestador.Nome;
            prestadorBanco.Telefone = prestador.Telefone;
            prestadorBanco.Logradouro = prestador.Logradouro;
            prestadorBanco.HrFunc = prestador.HrFunc;
            prestadorBanco.Email = prestador.Email;
            prestadorBanco.Senha = prestador.Senha;

            _context.PrestadorServicos.Update(prestadorBanco);
            _context.SaveChanges();

            return Ok(prestadorBanco);
        }

        [HttpDelete("{IdPrestador}")]
        public IActionResult Deletar(int id)
        {
            var prestadorBanco = _context.PrestadorServicos.Find(id);

            if (prestadorBanco == null)
                return NotFound();

            _context.PrestadorServicos.Remove(prestadorBanco);
            _context.SaveChanges();

            return NoContent();
        }

    }
}