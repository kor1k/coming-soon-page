$(function () {
    $("#submit").submit(function (e) {
        e.preventDefault();
        let data = {
            message: `
            Phone: ${$("#form_phone").val()}
            Email: ${$("#form_email").val()}
            `
        };
        $.ajax({
            type: "POST",
            url: "../php/email.php",
            data: data,
            success: function () {
                $('.success').fadeIn(1000);
            }
        });
        $('#modal').addClass('open');
        $('.overlay').addClass('show');
        $("#form_phone").val('');
        $("#form_email").val('');

        $('.close, .overlay').click(function () {
            $('.overlay').removeClass('show');
            $('#modal').removeClass('open');
        });

        return false;
    });
});