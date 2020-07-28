const sections = document.querySelectorAll('section');
const bubble = document.querySelector('.bubble');
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
            height: 20,
            width: 20,
            top: coords.top,
            left: coords.left
        };
        if (entry.isIntersecting){
            bubble.style.setProperty("left", `${directions.left}px`);
            bubble.style.setProperty("top", `${directions.top}px`);
            bubble.style.setProperty("width", `${directions.width}px`);
            bubble.style.setProperty("height", `${directions.height}px`);
            bubble.style.background = gradients[gradientIndex];
        }
    });
}

sections.forEach(section => {
    observer.observe(section);
});

function unhide() {
    
    let hiddenCogito = document.getElementById('hidden-cogito');
    let dictionaryCogito = document.getElementsByClassName('dictionary')[0];
    let hiddenVideo = document.getElementById('hidden-video');
    let dictionaryVideo = document.getElementsByClassName('dictionary')[1];
    // let unhideAudio = document.getElementById('hidden-audio');
    // let hoverAudio = document.getElementsByClassName('dictionary')[0];

    dictionaryCogito.addEventListener('mouseenter', () => {
        hiddenCogito.style.opacity = '1'
        hiddenCogito.style.background = "linear-gradient(to right top, #0f6596, #20257d)"
    });
    dictionaryCogito.addEventListener('mouseleave', () => {
        hiddenCogito.style.opacity = '0'
    });
    dictionaryVideo.addEventListener('click', () => {
        hiddenVideo.style.opacity = '1'
        hiddenVideo.style.zIndex = '1'
        hiddenVideo.play()
    });

    // hoverAudio.addEventListener('mouseenter', () => {unhideCogito.style.zIndex = '1'; unhideAudio.style.opacity = '1'});
    // hoverAudio.addEventListener('mouseleave', () => {unhideCogito.style.zIndex = '0'; unhideAudio.style.opacity = '0'});

};

unhide();





