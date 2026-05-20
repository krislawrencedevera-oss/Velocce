var nextBtn = document.querySelector('.next'),
    prevBtn = document.querySelector('.prev'),
    carousel = document.querySelector('.carousel'),
    list = document.querySelector('.list'),
    runningTime = document.querySelector('.timeRunning')

let timeRunning = 3000
let timeAutoNext = 7000

nextBtn.onclick = function () {
    showSlider('next')
}

prevBtn.onclick = function () {
    showSlider('prev')
}

function showSlider(type) {
    let itemSlider = document.querySelectorAll('.carousel .list .item');
    if (type === 'next') {
        list.appendChild(itemSlider[0])
        carousel.classList.add('next')
    } else {
        list.prepend(itemSlider[itemSlider.length - 1])
        carousel.classList.add('prev')
    }

}



