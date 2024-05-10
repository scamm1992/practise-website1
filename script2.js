var time =gsap.timeline ()
time.from("nav img, nav .item a, nav .help ",{
    y:-100,
    duration:1,
    delay:1,
    stagger:1
})
gsap.from(".text",{
    y:600,
    duration:1,
    delay:1,

})
gsap.from("#imageone",{
    x:500,
    scale:0,
    opacity:10,
    stagger:1,
    duration:1,
    delay:1,

})
gsap.from(" footer .box",{
    scale:0,
    rotate:360,
    scrollTrigger:{
        trigger:"footer .box",
        scroller:"body",
            
        
    }
})
// .to(".hover::hover",{
//     x:500,
//     duration:1,
//     delay:1,

// })