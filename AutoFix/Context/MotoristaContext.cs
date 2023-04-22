using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using AutoFix.Models;

namespace AutoFix.Context
{
    public class MotoristaContext : DbContext
    {
        public MotoristaContext(DbContextOptions<MotoristaContext> options) : base(options)
        {

        }

        public DbSet<Motorista> Motoristas { get; set; }

    }

}