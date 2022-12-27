import gsap from "gsap"

const s2Gsap = () => {
    let a1 = gsap.timeline({delay: 3.5});
    let a2 = gsap.timeline({delay: 4.5});

    a1.from('.about__main-text > div:nth-child(1)', {
        x: -120,
        opacity: 0,
        duration: 2,
        ease: 'power4',
    }, 0)
    a1.from('.about__main-text > div:nth-child(2)', {
        x: 100,
        opacity: 0,
        duration: 2,
        ease: "power4",
    }, 0)
    a1.from('.about__main-text > div:nth-child(3)', {
        x: -80,
        opacity: 0,
        duration: 2,
        ease: "power4",
    }, 0.5)
    a2.from('.about__desc', {
        opacity: 0,
        duration: 2,
        ease: "power4",
    }, 0)
    a1.from('.about__main-img', {
        y: 100,
        opacity: 0,
        duration: 2,
        ease: "power4",
    }, 0)
}

export default s2Gsap