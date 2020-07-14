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