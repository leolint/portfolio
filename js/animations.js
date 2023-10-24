function headerAnimation() {
    const logo = document.querySelector('.header_wrapper-logo')
    const button = document.querySelector('.header_wrapper-button')

    document.addEventListener('DOMContentLoaded', function () {
        logo.classList.add('onload')
        button.classList.add('onload')
    })
}


headerAnimation()


function sectionAboutAnimation() {
    const image = document.querySelector('.about_wrapper img')
    const text = document.querySelector('.about_wrapper figcaption')

    document.addEventListener('DOMContentLoaded', function () {
        image.classList.add('aboutOnloadAnimation')
        text.classList.add('aboutOnloadAnimation')
    })
}

sectionAboutAnimation()

function skillsAnimation() {

    const images = document.querySelectorAll('.skills_wrapper img')

    images.forEach((img , index)=> {
        setTimeout(() => {
            img.animate(
                [
                    { transform: "scale(1,1)" },
                    { transform: "scale(1.10,1.10)" },
                    { transform: "scale(1,1)" },
                ],
                {
                    duration: 1500,
                    iterations: Infinity,
                },
            );
        }, 250 * index);
    })

}

skillsAnimation()