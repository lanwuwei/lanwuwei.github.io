function darken() {
    $(this).addClass('darkened');
}
function lighten() {
    $(this).removeClass('darkened');
}

$(document).ready(function () {
    
    var prefix = '';
    if (window.location.href.indexOf('homework') > -1)
        prefix='../';
    
    var homeworks = {
        'Python Basics': prefix+'python-basics.html',
        'Homework 0': prefix+'homework/homework_0.html',
        'Homework 1': prefix+'homework/homework_1.html',
        'Homework 2': prefix+'homework/homework_2.pdf',
        'Homework 3': prefix+'homework/homework_3.html',
        'Homework 4': prefix+'homework/homework_4.pdf',
        'Homework 5': prefix+'homework/homework_5.html',
        'Homework 6': prefix+'homework/homework_6.pdf',
        'EC: AI Seminar': prefix+'homework/ai_seminar.html'
    }
    for (var name in homeworks) {
        $('#homework-list ul').append(
            '<li><a href="' + homeworks[name] + '">' + name + '</a></li>'
        );
    }
    $('#homework-list li a').mouseover(darken);
    $('#homework-list li a').mouseout(lighten);
})
