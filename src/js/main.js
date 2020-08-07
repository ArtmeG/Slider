let $slider = $('.slider-container');
let $row = $slider.find('.slides-row');

let windowWidth = $slider.width();

let activeSlide = 0;
let slidesCount = $row.find('.slide').length;

let $slide = $('.slide');

let direction = ['left', 'right'];

let template = '';

for (let i = 0; i < direction.length; i++) {
    template += '<a class="arrow ' + direction[i] + '">' + direction[i].toUpperCase() + '</a>';
}

template += '<div class="dots">';
template += '<a class="dot active" data-modal="1"></a>';

for (let i = 1; i < slidesCount; i++) {
    template += '<a class="dot" data-modal="' + (i + 1) + '"></a>'
}

template += '</div>';
$slider.append(template);

let $dots = $('.dots');
let $dot = $('[data-modal]');

$slide.css('width', windowWidth + 'px');

function sliderController(slide) {
    let distance = slide * windowWidth * (-1);
    $row.css('transform', 'translateX(' + distance + 'px)');

    $dot.removeClass('active');
    $('.dot[data-modal="' + (slide + 1) + '"]').addClass('active');
}

$row.css('width', (slidesCount * windowWidth + 100) + 'px');

$('.arrow.left').click(function () {
    activeSlide--;
    if (activeSlide < 0) activeSlide = slidesCount - 1;
    sliderController(activeSlide);
});

$('.arrow.right').click(function () {
    activeSlide++;
    if (activeSlide >= slidesCount) activeSlide = 0;
    sliderController(activeSlide);
});

$dot.click(function () {
    activeSlide = parseFloat($(this).attr('data-modal')) - 1;
    sliderController(activeSlide);
});

$dots.on('click', 'a', function () {
    activeSlide = parseFloat($(this).attr('data-modal')) - 1;
    sliderController(activeSlide);
});