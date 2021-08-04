$('.result').html($('input[type="range"]').val());

$(document).on('input change', 'input[type="range"]', function() {
    $('.result').html($(this).val());
});