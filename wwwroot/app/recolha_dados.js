var vetObj = [{id:0}];

var btnSbt = $("#send");

btnSbt.on('click', iniciar);

$("#message").on('keypress', function (e){

    if (e.keyCode == 13) {
        iniciar();
        return false;

    }
});

function iniciar() {
    var obj = { text: $("#message").val() };

    addObj(obj);

    $("#message").val("");
}

function addObj(obj) {

    obj.date = new Date();
    obj.id = vetObj[vetObj.length - 1].id + 1;
    obj.source = true;

    var div = $('<div/>');

    div.addClass("col-md-12");

    var p = $('<p/>').attr('class', 'admin-sms pull-right');

    p.html(obj.text);

    p.appendTo(div);

    div.appendTo($('.chatMessages'));

    $('.chatMessages').animate({scrollTop:9999999}, 500);

    vetObj.push(obj);
}
