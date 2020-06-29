using System;

namespace ChatService.Models
{
    public class Message
    {
        public Message()
        {
            date=DateTime.Now;
        }
        
        public int ID { get; set; }
        public Boolean Source { get; set; }
        public string Text { get; set; }
        public DateTime date { get; set; }
    }
}