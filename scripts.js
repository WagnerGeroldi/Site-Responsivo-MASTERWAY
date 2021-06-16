$(document).ready(function () {
    // Exibe ou oculta o botão
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.voltar-ao-topo').fadeIn(200);
        } else {
            $('.voltar-ao-topo').fadeOut(200);
        }
    });

    // Faz animação para subir
    $('.voltar-ao-topo').click(function (event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 300);
    })
});

function alerta() {
    alert('Sua mensagem não será enviada pois este site é apenas um modelo')
}


AOS.init();