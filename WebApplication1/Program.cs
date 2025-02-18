using Microsoft.EntityFrameworkCore;
using TargetsMasterAPI.Data;
using TargetsMasterAPI.Repositories;
using TargetsMasterAPI.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend",
        policy => policy.WithOrigins("http://localhost:3000")  // Your frontend's URL
                        .AllowAnyHeader()
                        .AllowAnyMethod());
});

// Add services to the container.
builder.Services.AddControllers();

// Register the DbContext with the connection string (modify connection string as necessary)
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

// Register the repository and services
builder.Services.AddScoped<ITargetRepository, TargetRepository>();
builder.Services.AddScoped<ITargetService, TargetService>();

// Add Swagger for API documentation
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthorization();

app.MapControllers();

app.Run();
