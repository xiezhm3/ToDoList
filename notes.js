$(function () {
    'use strict';

    $('li').hide().each(function(index) {
        $(this).delay(600 * index).fadeIn(1500);
    });

    $('#addItem').on('submit', function (e) {
        e.preventDefault();
        var $item = $('input:text');
        var text = $item.val();
        if ($item.val()) {
            $('ul').prepend('<li>' + text + '</li>');
            $item.val('');
        } else {
            alert("Please enter a item you want to do.");
        }
    });

    $('body').on('click', 'li', function (e) {
        e.preventDefault();
        if (!$(this).hasClass('complete')) {
            var text = $(this).text();
            $(this).remove();
            $('ul').append('<li class = "complete" >' + text + '</li>');
        } else {
            $(this).remove();
        }
    });

    $('body').on('dbclick', 'li', function (e) {
        e.preventDefault;
        if ($(this).hasClass('complete')) {
            $(this).removeAttr('class');
        }
    });
});