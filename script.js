const clouds = document.querySelectorAll('.cloud'),
    boat = document.querySelector('.boat'),
    quyosh = document.querySelector('.quyosh'),
    bird3 = document.querySelector('.bird3'),
    bird2 = document.querySelector('.bird2'),
    bird1 = document.querySelector('.bird1'),
    bird = document.querySelector('.bird')

window.addEventListener('scroll', () => {
    let windowY = window.scrollY
    for (let i = 0; i < clouds.length; i++) {
        const cloud = clouds[i];
        let speed = cloud.getAttribute('speed')
        cloud.style.transform = `translateX(${windowY * speed}px)`
    }
    let nur = quyosh.getAttribute('speed')
    boat.style.transform = `translateX(${windowY}px)`
    quyosh.style.transform = `translateY(${windowY*nur }px)`
    bird3.style.transform = `translateX(${windowY}px)`
    let birdspeed = bird.getAttribute('speed')
    bird1.style.transform = `translateY(${windowY * birdspeed}px)`
    bird2.style.transform = `translateY(${windowY * birdspeed}px)`
      
})






// const clouds = document.querySelectorAll('.cloud'),
//  boat = document.querySelector('.boat')
       

// window.addEventListener('scroll' , () => {
//     let windowY = window.scrollY
//     for (let i = 0; i < clouds.length; i++) {
//         const cloud = clouds[i];
//         let speed = cloud.getAttribute('speed')
//         cloud.style.transform = `translateX(${windowY * speed})`
//     }
//     console.log(windowY);
//     boat.style.transform = `translateX(${windowY})`
// })