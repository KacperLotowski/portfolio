const sections = document.querySelectorAll('section');
const square = document.querySelector('.square');
const gradients = [
    "linear-gradient(to right top, #1488cc, #2b32b2)",
    "linear-gradient(to right top, #aa076b, #61045f)",
    "linear-gradient(to right top, #1d976c, #7cf7a9)"
];

const options = {
    threshold: 0.7
};

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries){
    entries.forEach(entry => {
        const className = entry.target.className;
        const activeAnchor = document.querySelector(`[data-page=${className}]`);
        const gradientIndex = entry.target.getAttribute('data-index');
        const coords = activeAnchor.getBoundingClientRect();
        const directions = {
            height: 25,
            width: 25,
            top: coords.top,
            left: coords.left
        };
        if (entry.isIntersecting){
            square.style.setProperty("left", `${directions.left}px`);
            square.style.setProperty("top", `${directions.top}px`);
            square.style.setProperty("width", `${directions.width}px`);
            square.style.setProperty("height", `${directions.height}px`);
            square.style.background = gradients[gradientIndex];
        }
    });
}

sections.forEach(section => {
    observer.observe(section);
});

function unhide() {
    
    let hidden = document.getElementsByClassName('hidden-section');
    let showSvg = document.getElementsByClassName('svg-show');
    let dictionary = document.getElementsByClassName('dictionary');
    let hiddenVideo = document.getElementById('hidden-video');

    dictionary[0].addEventListener('mouseenter', () => {
        hidden[0].style.opacity = '1'
        showSvg[0].style.margin = '0'
    });
    dictionary[0].addEventListener('mouseleave', () => {
        hidden[0].style.opacity = '0'
        showSvg[0].style.margin = '0 0 0 -100px'
    });

    dictionary[1].addEventListener('mouseenter', () => {
        hidden[1].style.opacity = '1'
        showSvg[1].style.margin = '0'
    });
    dictionary[1].addEventListener('mouseleave', () => {
        hidden[1].style.opacity = '0'
        showSvg[1].style.margin = '0 0 0 -100px'
    });
    dictionary[1].addEventListener('click', () => {
        hiddenVideo.style.opacity = '1'
        hiddenVideo.style.zIndex = '1'
        hiddenVideo.play()
    });

    dictionary[2].addEventListener('mouseenter', () => {
        hidden[2].style.opacity = '1'
        showSvg[2].style.margin = '0'
    });
    dictionary[2].addEventListener('mouseleave', () => {
        hidden[2].style.opacity = '0'
        showSvg[2].style.margin = '0 0 0 -100px'
    });

};

unhide();