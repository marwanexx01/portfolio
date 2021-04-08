// start navbar
$('document').ready(function() {

    $('.burger').click(function() {
        $('.nav-menu').toggleClass("open");
        $('.menu-list').toggleClass("list-open");
    });

});

// start navbar
// animation
const sr = ScrollReveal();


// sr.reveal('.burger ', {

//     // origin: 'top',
//     delay: 100,
//     distance: '120px',
//     easing: 'ease-in-out',
// });
// sr.reveal('h1 ', {

//     origin: 'top',
//     delay: 100,
//     distance: '120px',
//     easing: 'ease-in-out',
// });
// sr.reveal('.home-conainer ', {

//     origin: 'left',
//     delay: 100,
//     distance: '120px',
//     easing: 'ease-in-out',
// });
sr.reveal('.about-container p', {

    origin: 'right',
    delay: 100,
    distance: '120px',
    easing: 'ease-in-out',
});
sr.reveal('.about-container img', {

    origin: 'left',
    delay: 100,
    distance: '120px',
    easing: 'ease-in-out',
});
sr.reveal('.front', {

    origin: 'left',
    delay: 200,
    distance: '120px',
    easing: 'ease-in-out',
}, 500);
sr.reveal('.back', {

    origin: 'right',
    delay: 200,
    distance: '120px',
    easing: 'ease-in-out',
}, 500);
sr.reveal('.text', {

    origin: 'top',
    delay: 500,
    distance: '120px',
    easing: 'ease-in-out',
}, 500);
sr.reveal('.form', {

    origin: 'left',
    delay: 500,
    distance: '120px',
    easing: 'ease-in-out',
}, 500);
sr.reveal('.form2', {

    origin: 'right',
    delay: 200,
    distance: '120px',
    easing: 'ease-in-out',
}, 500);
// animation