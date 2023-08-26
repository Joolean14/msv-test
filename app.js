gsap.registerPlugin(ScrollTrigger);


gsap.to(".square", {
    x: 700,
    duration: 8,
    scrollTrigger: {
        trigger: ".square",
        start: "top center",
        stop: "top end",
        scrub: 3,
        pin: true,
        toggleActions: "play reverse none none",
        //              onEnter onLeave onEnterBack onLeaveBack
        // play pause resume reverse restart reset complete none
        // markers: true
    }
})

gsap.to(".square2", {
    x: 700,
    duration: 8,
    scrollTrigger: {
        trigger: ".square",
        start: "top 50%",
        stop: "top 90%",
        scrub: 3,
        toggleActions: "play reverse none none",
        //              onEnter onLeave onEnterBack onLeaveBack
        // play pause resume reverse restart reset complete none
        // markers: true
    }
})


// markers: {
//     startColor: 
//     endColor:
//     fontSize:
//     indent:
// }

// toggleClass