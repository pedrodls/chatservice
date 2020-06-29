using ChatService.Models;
using Microsoft.EntityFrameworkCore;
namespace ChatService.Application
{
    public class ChatContext: DbContext
    {
        
        public DbSet<Message> Message { get; set; }
        
        public ChatContext(DbContextOptions<ChatContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Message>().ToTable("Message");
        }
    }
}