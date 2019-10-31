$(document).ready(function () {
    $('#contaClique, .minhaContaX').on('click', function() {        
        var $div = $('#contaClique, .minhaContaX');
        if ($div.is(':hidden')) {
            $('#minhaConta').fadeIn('fast');
        }
    });
});

$(document).mouseup(function (e) {
    var $div = $("#minhaConta");

    // se o alvo do clique não é a DIV ou um filho da DIV
    if (!$div.is(e.target) && $div.has(e.target).length === 0) {
        // se a DIV está aberta
        if ($div.is(':visible')) {
            $div.fadeToggle('fast');                
        }
    }
});

$(window).on('keydown', function (event) {
    if (event.keyCode == 27) {
        if ($("#minhaConta").is(':visible')) {
            $("#minhaConta").fadeOut('fast');
        }
    }
});


$(document).ready(function () {
    $('.carrinhoButtonA, .carrinhoX').on('click', function() {        
        var $div = $('.carrinhoButtonA, .carrinhoX');
        if ($div.is(':hidden')) {
            $('#carrinho').fadeIn('fast');
        }
    });
});

$(document).mouseup(function (e) {
    var $div = $("#carrinho");

    // se o alvo do clique não é a DIV ou um filho da DIV
    if (!$div.is(e.target) && $div.has(e.target).length === 0) {
        // se a DIV está aberta
        if ($div.is(':visible')) {
            $div.fadeToggle('fast');                
        }
    }
});

$(window).on('keydown', function (event) {
    if (event.keyCode == 27) {
        if ($("#carrinho").is(':visible')) {
            $("#carrinho").fadeOut('fast');
        }
    }
});

