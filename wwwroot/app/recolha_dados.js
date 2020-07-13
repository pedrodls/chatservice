var vetObj = [{id:0}];

var btnSbt = $("#send");

//Enviar SMS
btnSbt.on('click', iniciar);

$("#message").on('keypress', function (e){

    if (e.keyCode == 13) {
        iniciar();
        return false;

    }
});

function iniciar() {

    if ($("#message").val() == "") return;

    var obj = { text: $("#message").val() };
    obj.date = new Date();
    obj.id = vetObj[vetObj.length - 1].id + 1;
    obj.source = true;

    outGoing(obj.text);

    $("#message").val("");
}

// Enviar sms
function outGoing(sms) {

    var div = $('<div/>');

    div.addClass("col-md-12");

    var p = $('<p/>').attr('class', 'user-sms pull-right');

    p.html(sms);

    p.appendTo(div);

    div.appendTo($('.chatMessages'));

    $('.chatMessages').animate({scrollTop:9999999}, 500);

    //send();

    //vetObj.push(obj);

}

//Receber SMS
function inComming(sms) {

    var div = $('<div/>');

    div.addClass("col-md-12");

    var p = $('<p/>').attr('class', 'admin-sms pull-left');

    p.html(sms);

    p.appendTo(div);

    div.appendTo($('.chatMessages'));

    $('.chatMessages').animate({ scrollTop: 9999999 }, 500);
}
