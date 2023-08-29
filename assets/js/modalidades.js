const moviesContainers = [...document.querySelectorAll('.cardm-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

moviesContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let countainerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += countainerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= countainerWidth;
    })
})