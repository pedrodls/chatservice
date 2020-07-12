using Jose;
using System.Collections.Generic;
using System.Text;

namespace ChatService.Application
{
    public class CriarToken
    {
        public Dictionary<string, string> token = new Dictionary<string, string>();

        public string CriandoToken(string nome, string exp)
        {
            token.Add(nome, exp);

            var secretKey = UnicodeEncoding.UTF8.GetBytes("qwerty");

            var cod = "";

            cod = JWT.Encode(token, secretKey, JwsAlgorithm.HS256);

            return cod;
            
        }
    }
}
