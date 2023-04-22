using Microsoft.EntityFrameworkCore;
using AutoFix.Context;

internal class Program
{
    private static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        // Add services to the container.
        builder.Services.AddDbContext<MotoristaContext>(options =>
        options.UseSqlServer(builder.Configuration.GetConnectionString("ConexaoPadrao")));

        // Add services to the container.
        builder.Services.AddDbContext<PrestadorContext>(options =>
        options.UseSqlServer(builder.Configuration.GetConnectionString("ConexaoPadrao")));

        builder.Services.AddDbContext<ServicoContext>(options =>
        options.UseSqlServer(builder.Configuration.GetConnectionString("ConexaoPadrao")));

        builder.Services.AddControllersWithViews();

        var app = builder.Build();
        // Configure the HTTP request pipeline.
        if (!app.Environment.IsDevelopment())
        {
            app.UseExceptionHandler("/Home/Error");
            app.UseHsts();
        }

        app.UseHttpsRedirection();

        app.UseAuthorization();

        app.MapControllerRoute(name: "default",
            pattern: "{controller=Home}/{action=Index}/{id?}");

        app.Run();
    }
}