//$(function(){  

        _token=localStorage.getItem('token');
        _target='backoffice';
        try {
            var client=io('http://localhost:5050/');
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
        var send=function(msg){
            client.emit('message',{token:_token,targetToken:_target,message:'this is my message'});    
        }

//})