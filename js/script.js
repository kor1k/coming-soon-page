$(function () {
    $("#contact .button").click(function (e) {
        e.preventdefault();
        let data = {
            name: $("#form_phone").val(),
            email: $("#form_email").val(),
            // message: $("#msg_text").val()
        };
        $.ajax({
            type: "POST",
            url: "../php/email.php",
            data: data,
            success: function () {
                $('.success').fadeIn(1000);
            }
        });
        return false;
    });
});