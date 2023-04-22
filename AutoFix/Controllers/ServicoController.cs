using Microsoft.AspNetCore.Mvc;
using AutoFix.Context;
using AutoFix.Models;

namespace AutoFix.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ServicoController : ControllerBase
    {
        private readonly ServicoContext _context;

        public ServicoController(ServicoContext contextServico)
        {
            _context = contextServico;
        }

        [HttpGet("{IdServico}")]
        public IActionResult ObterPorId(int id)
        {
            var servico = _context.Servicos.Find(id);

            if(servico == null)
            {
                return NotFound();
            }

            return Ok(servico);
        }

        [HttpGet("ObterTodos")]
        public IActionResult ObterTodos()
        {
            var servico = _context.Servicos.ToList();
            return Ok(servico);
        }

        [HttpGet("ObterPorNomePrestador")]
        public IActionResult ObterPorNomePrestador(string nome)
        {
            var servico = _context.Servicos.Where(x => x.Prestador.Nome.Contains(nome));
            return Ok(servico);
        }
        [HttpGet("ObterPorNomeMotorista")]
        public IActionResult ObterPorNomeMotorista(string nome)
        {
            var servico = _context.Servicos.Where(x => x.Motorista.Nome.Contains(nome));
            return Ok(servico);
        }
        [HttpPost]
        public IActionResult Criar(Servico servico)
        {     
            _context.Add(servico);
            _context.SaveChanges();

            return CreatedAtAction(nameof(ObterPorId), new { id = servico.IdServico }, servico);
        }

        [HttpDelete("{IdServico}")]
        public IActionResult Deletar(int id)
        {
            var servicoBanco = _context.Servicos.Find(id);

            if (servicoBanco == null)
                return NotFound();

            _context.Servicos.Remove(servicoBanco);
            _context.SaveChanges();

            return NoContent();
        }
    }
}