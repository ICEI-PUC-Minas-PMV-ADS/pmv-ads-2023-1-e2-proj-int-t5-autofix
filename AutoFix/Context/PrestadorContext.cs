using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using AutoFix.Models;

namespace AutoFix.Context
{
    public class PrestadorContext : DbContext
    {
        public PrestadorContext(DbContextOptions<PrestadorContext> options) : base(options)
        {

        }

        public DbSet<PrestadorServico> Prestadores { get; set; }

    }

}