using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using AutoFix.Models;

namespace AutoFix.Context
{
    public class ServicoContext : DbContext
    {
        public ServicoContext(DbContextOptions<ServicoContext> options) : base(options)
        {

        }

        public DbSet<Servico> Servicos { get; set; }

    }

}