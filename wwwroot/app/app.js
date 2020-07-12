//$(function(){  

        var client=io('http://localhost:5050/');
        _token=localStorage.getItem('token');
        
        try {
            client.on('connect', function (socket) {
                $('#bullet-status').attr('class','connected')
            })

            client.on('disconnect', function (e) {
                $('#bullet-status').attr('class','disconnected')
            })

            client.on(_token, function (e) {
                     console.log(e)
            })
            
            client.on('message', function (e) {
                console.log(e)
                receive(e);
            })
        }catch (e) {
            
        }
        var receive=function(message){
            alert(message)
        }
        var send=function(msg){
            client.emit('message',{token:token,targetToken:'',message:'this is my message'});    
        }

//})