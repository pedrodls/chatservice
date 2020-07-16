using System;
using Jose;
using System.Collections.Generic;
using System.Text;

namespace ChatService.Application
{
    public class CriarToken
    {
        public static byte[] secretKey = UnicodeEncoding.UTF8.GetBytes("qwerty");

        public byte[] SecretKey()
        {
            return secretKey;
        }

        public static string CriandoToken(string nome)
        {
            Dictionary<string, string> token = new Dictionary<string, string>();
            string exp = DateTime.Now.ToString();
            token.Add(nome, exp);
            
            
            return  JWT.Encode(token, secretKey, JwsAlgorithm.HS256);
        }
    }
}
