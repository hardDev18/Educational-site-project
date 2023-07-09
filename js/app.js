$(document).ready(function () {

    $('[data-bs-toggle="tooltip"]').tooltip();

    $('#btn-gruop').on('click', function () {
        $(this).toggleClass('active');
    })
    $('.nav-link').on('click', function () {
        $('.nav-link').removeClass('active');
        $(this).addClass('active');
    });
});

// acconted style start
$(document).ready(function () {
    $('#btn-lgn').click(function () {
        $('#back-btn').addClass('active1');
        $('#login').addClass('active2');
        $('#regester').addClass('active3');
    })
    $('#btn-rst').click(function () {
        $('#back-btn').removeClass('active1');
        $('#login').removeClass('active2');
        $('#regester').removeClass('active3');
    })
})
// acconted style end