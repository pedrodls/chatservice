_token="backoffice";

function inComming(message) {
    var msg=$('<div/>').addClass("incoming_msg").appendTo($('.msg_history'))
    var div1=$('<div/>').addClass("incoming_msg_img").html('<img src="https://ptetutorials.com/images/user-profile.png" alt="sunil">').appendTo(msg)
    var div2=$('<div/>').addClass('received_msg').appendTo(msg)
    var div=$('<div/>').addClass('received_withd_msg').appendTo(div2)
    $('<p/>').html(message).appendTo(div)
    $('<span/>').addClass('time_date').html('11:01 AM    |    June 9').appendTo(div)
}

function outGoing(message) {
    var msg=$('<div/>').addClass("outgoing_msg").appendTo($('.msg_history'))
    var div=$('<div/>').addClass("sent_msg").appendTo(msg)
    $('<p/>').html(message).appendTo(div)
    $('<span/>').addClass('time_date').html('11:01 AM    |    June 9').appendTo(div)
}

function chatHead(name,id){
    var d1=$('<div/>').addClass('chat_list').attr('client-token',name);
    var d2=$('<div/>').addClass('chat_people').appendTo(d1)
    var d3=$('<div/>').addClass('chat_img').html('<img src="https://ptetutorials.com/images/user-profile.png" alt="sunil">').appendTo(d2);
    var d4=$('<div/>').addClass('chat_ib').html('<h5>'+name+' <span class="chat_date">'+new Date()+'</span></h5>').appendTo(d2);
    var d5=$('<p/>').html('<p>'+id+'</p>').appendTo(d4)
    
    
    d1.appendTo($('.inbox_chat')).on('click',function () {
        $('.chat_list').removeClass('active')
        $(this).addClass('active')
        _target=$(this).attr('client-token')
    })
}

function sendMessage(message) {
    outGoing(message)
    send(message)
    $('input.write_msg').val('')
}

$('.msg_send_btn').on('click',function (e) {
    sendMessage($('input.write_msg').val())
})

$('input.write_msg').on('keypress',function (e) {
    if (e.keyCode == 13) {
        sendMessage($('input.write_msg').val())
        return false;
    }
})

client.on('sync_clients',function(e){
    $('.inbox_chat').html('')
    for(i=0; i<e.length;i++)
        if(e[i].token!='backoffice')
            chatHead(e[i].token,e[i].id)
    console.log(e)
})