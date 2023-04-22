using Microsoft.AspNetCore.Mvc;
using AutoFix.Context;
using AutoFix.Models;

namespace AutoFix.Controllers
{
    
[ApiController]
    [Route("[controller]")]
    public class PrestadorController : ControllerBase
    {
        private readonly PrestadorContext _context;

        public PrestadorController(PrestadorContext contextPrestador)
        {
            _context = contextPrestador;
        }
        [HttpGet("{IdPrestador}")]
        public IActionResult ObterPorId(int id)
        {
            var prestador = _context.Prestadores.Find(id);

            if(prestador == null)
            {
                return NotFound();
            }

            return Ok(prestador);
        }

        [HttpGet("ObterTodos")]
        public IActionResult ObterTodos()
        {
            var prestador = _context.Prestadores.ToList();
            return Ok(prestador);
        }

        [HttpGet("ObterPorNome")]
        public IActionResult ObterPorNome(string nome)
        {
            var prestador = _context.Prestadores.Where(x => x.Nome.Contains(nome));
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
            var prestadorBanco = _context.Prestadores.Find(id);

            if (prestadorBanco == null)
                return NotFound();

            prestadorBanco.Nome = prestador.Nome;
            prestadorBanco.Sobrenome = prestador.Sobrenome;
            prestadorBanco.Telefone = prestador.Telefone;
            prestadorBanco.Logradouro = prestador.Logradouro;
            prestadorBanco.Numero = prestador.Numero;
            prestadorBanco.Bairro = prestador.Bairro;
            prestadorBanco.Cidade = prestador.Cidade;
            prestadorBanco.Estado = prestador.Estado;
            prestadorBanco.HrFunc = prestador.HrFunc;
            prestadorBanco.Email = prestador.Email;
            prestadorBanco.Senha = prestador.Senha;

            _context.Prestadores.Update(prestadorBanco);
            _context.SaveChanges();

            return Ok(prestadorBanco);
        }

        [HttpDelete("{IdPrestador}")]
        public IActionResult Deletar(int id)
        {
            var prestadorBanco = _context.Prestadores.Find(id);

            if (prestadorBanco == null)
                return NotFound();

            _context.Prestadores.Remove(prestadorBanco);
            _context.SaveChanges();

            return NoContent();
        }

    }
}