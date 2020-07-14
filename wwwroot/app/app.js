//$(function(){  

       // _token='backoffice';//localStorage.getItem('token');
        //_target='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJQYXVsbyI6IjEzLzA3LzIwMjAgMjA6NTg6MjAifQ.zGRrlz_rrM419fXDu-V516c3dkywQGDFsdQkgJXBZt0';
        try {
            var client=io('http://localhost:6060/',{transports: [ 'websocket' ]});
            //_token_=client.io.engine.id
            client.on('connect', function (socket) {
                client.emit('register',{token:_token})
                $('#bullet-status').attr('class','connected')
                
            })
            client.on(_token, function (e) {
                //_target=e.token
                inComming(e.message)
            })
            client.on('disconnect', function (e) {
                $('#bullet-status').attr('class','disconnected')
            })
            client.on('message', function (e) {
                inComming(e.message)
            })
            
        }catch (e) {
            
        }
        var receive=function(data){
           // _target=data.token;
            inComming(message)
        }
        var signIn=function(){
            client.emit('sign_in',{token:_token});
        }       
        var send=function(message){
            client.emit('message',{token:_token,targetToken:_target,message:message});    
        }

//})