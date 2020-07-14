using System;
using Jose;
using System.Collections.Generic;
using System.Text;

namespace ChatService.Application
{
    public class CriarToken
    {
        public static string CriandoToken(string nome)
        {
            Dictionary<string, string> token = new Dictionary<string, string>();
            string exp = DateTime.Now.ToString();
            token.Add(nome, exp);
            
            var secretKey = UnicodeEncoding.UTF8.GetBytes("qwerty");
            return  JWT.Encode(token, secretKey, JwsAlgorithm.HS256);
        }
    }
}
