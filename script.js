const isMobile = window.innerWidth <= 768;

if (!isMobile) {
    window.addEventListener('scroll', function() {
        let scrollX = window.scrollX || document.documentElement.scrollLeft;

        document.querySelector('.layer-1').style.backgroundPosition = `${-scrollX * 0.05}px 0`;
        document.querySelector('.layer-2').style.backgroundPosition = `${-scrollX * 0.1}px 0`;
        document.querySelector('.layer-3').style.backgroundPosition = `${-scrollX * 0.15}px 0`;
        document.querySelector('.layer-4').style.backgroundPosition = `${-scrollX * 0.2}px 0`;
        document.querySelector('.layer-5').style.backgroundPosition = `${-scrollX * 0.25}px 0`;
        document.querySelector('.layer-6').style.backgroundPosition = `${-scrollX * 0.3}px 0`;
    });
}

const slider = document.querySelector(".content");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", () => isDown = false);
slider.addEventListener("mouseup", () => isDown = false);

slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;
});

if (isMobile) {
    slider.addEventListener("touchstart", (e) => {
        startX = e.touches[0].pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener("touchmove", (e) => {
        e.preventDefault();
        const x = e.touches[0].pageX - slider.offsetLeft;
        const walk = (x - startX) * 2;
        slider.scrollLeft = scrollLeft - walk;
    });
}
