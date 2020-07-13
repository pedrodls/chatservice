//$(function(){  

        _token='backoffice';//localStorage.getItem('token');
        _target='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJQYXVsbyI6IjEzLzA3LzIwMjAgMjA6NTg6MjAifQ.zGRrlz_rrM419fXDu-V516c3dkywQGDFsdQkgJXBZt0';
        try {
            var client=io('http://127.0.0.1:6060/');
            client.on('connect', function (socket) {
                $('#bullet-status').attr('class','connected')
                client.on(_token, function (e) {
                    inComming(e.message)
                })
            })

            client.on('disconnect', function (e) {
                $('#bullet-status').attr('class','disconnected')
            })

            
        }catch (e) {
            
        }
        var receive=function(data){
            _target=data.token;
            inComming(message)
        }
        var signIn=function(){
            client.emit('sign_in',{token:_token});
        }       
        var send=function(message){
            client.emit('message',{token:_token,targetToken:_target,message:message});    
        }

//})