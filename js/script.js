$(function () {
    $("#submit").submit(function (e) {
        e.preventDefault();
        let data = {
            message: `
            Phone: ${$("#form_phone").val()}
            Email: ${$("#form_email").val()}
            `
        };
        console.log(data.message);
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