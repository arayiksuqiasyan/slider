const upBtn = document.querySelector(".up-button")
const downBtn = document.querySelector(".down-button")
const sidebar = document.querySelector(".sidebar")
const mainSlide = document.querySelector(".main-slide")
const container = document.querySelector(".container")
const slidesCount = mainSlide.querySelectorAll("div").length
let activeSlideactive = 0

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`

document.addEventListener("keydown", function (e) {
    console.log(e.keyCode);
    if (e.keyCode === 38) {
        changeSlide("up")
    } else if (e.keyCode === 40) {
        changeSlide("down")
    } else if (e.keyCode === 32) {
        container.style.cssText = `
        animation: bounce 1s;
        `
        setTimeout(() => {
            container.style.cssText = `
            animation: initial;
            `
        }, 1000)
    }
})

upBtn.addEventListener("click", () => {
    changeSlide("up")
})
downBtn.addEventListener("click", () => {
    changeSlide("down")
})


function changeSlide(directions) {
    if (directions === "up") {
        activeSlideactive++
        if (activeSlideactive === slidesCount) {
            activeSlideactive = 0
        }
    } else if (directions === "down") {
        activeSlideactive--
        if (activeSlideactive < 0) {
            activeSlideactive = slidesCount - 1
        }

    }
    const height = container.clientHeight
    console.log(height);
    mainSlide.style.transform = `translateY(-${activeSlideactive * height}px)`
    sidebar.style.transform = `translateY(${activeSlideactive * height}px)`
}