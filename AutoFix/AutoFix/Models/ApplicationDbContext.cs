using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AutoFix.Models
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        public DbSet<Motorista> Motoristas { get; set; }
        public DbSet<PrestadorServico> PrestadorServicos { get; set; }
        public DbSet<Servico> Servicos { get; set; }
    }
}