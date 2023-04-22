using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace AutoFix.Models
{
    public enum Status
        {
            Disponível = 1,
            Indisponível = 2,
            Ocupado = 3,
        }
    public class PrestadorServico
    {
        [Key]
        public int IdPrestador { get; set; }
        public string Nome { get; set; }
        public string Sobrenome { get; set; }
        public string Telefone { get; set; }
        public string Logradouro { get; set; }
        public int Numero { get; set; }
        public string Bairro { get; set; }
        public string Cidade { get; set; }
        public string Estado { get; set; }
        public string HrFunc { get; set; } // Horário de Funcionamento
        public enum Status { get, set, }
        public double Avaliacao { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }

    }

}