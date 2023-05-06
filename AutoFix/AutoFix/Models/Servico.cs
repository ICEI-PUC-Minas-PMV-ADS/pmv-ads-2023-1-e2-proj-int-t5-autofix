using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AutoFix.Models
{
    public class Servico
    {
        [Key]
        public int IdServico { get; set; }
        public DateTime HrSolicitacao { get; set; } // Hora que foi solicitado o servico
        public double Valor { get; set; } // Valor do Serviço
        public double Avaliacao { get; set; } // Avaliação do Serviço

        [ForeignKey("IdMotorista")]
        public Motorista Motorista { get; set; }

        [ForeignKey("IdPrestador")]
        public PrestadorServico Prestador { get; set; }

    }
}