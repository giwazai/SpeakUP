let question = document.querySelectorAll('.question-body')
let answer = document.querySelectorAll('.question-text')
let icon = document.querySelectorAll('.fa-caret-down')
let burger_button = document.querySelector('.burger-icon')
let burger_menu = document.querySelector('.burger-body')

let isQuestionOpen = [false, false, false, false]

for (let i = 0; i < question.length; i++) {
    question[i].addEventListener("click", () => {
        isQuestionOpen[i] = !isQuestionOpen[i]
        if (isQuestionOpen[i]) {
            anime({
                targets: answer[i],
                duration: 200,
                easing: "easeInOutExpo",
                height: answer[i].scrollHeight,
                marginBottom: 20
            })
            anime({
                targets: icon[i],
                duration: 200,
                easing: "easeInOutExpo",
                rotate: 180
            })
        } else {
            anime({
                targets: answer[i],
                duration: 200,
                easing: "easeInOutExpo",
                height: 0,
                marginBottom: 0
            })
            anime({
                targets: icon[i],
                duration: 200,
                easing: "easeInOutExpo",
                rotate: 0
            })
        }
    })
}




let lastScroll = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    let currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll && currentScroll > 100) {
        header.classList.add('header-hidden');
    } else {
        header.classList.remove('header-hidden');
    }

    lastScroll = currentScroll;
});




let IsBurgerOpened = false

burger_button.addEventListener("click", () => {
    IsBurgerOpened = !IsBurgerOpened
    console.log("Hello world!")
    if (IsBurgerOpened) {
        anime({
            targets: burger_menu,
            duration: 500,
            easing: "easeInOutExpo",
            translateX: ['100%', '0%']
        })
    } else {
        anime({
            targets: burger_menu,
            duration: 500,
            easing: "easeInOutExpo",
            translateX: 100
        })
    }

})













