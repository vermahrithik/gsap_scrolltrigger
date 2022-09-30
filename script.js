var tl=gsap.timeline();
tl
.to("#bottle",{
    scrollTrigger:{
        trigger:"#bottle",
        scroller:"body",
        start:"93% 98%",
        end:"93% -250%", 
        scrub:5,
    },
    rotate:-14,
    ease: "slow(0.7, 0.7, false)",
},"-=1")
.to("#bottle",{
    scrollTrigger:{
        trigger:"#bottle",
        scroller:"body",
        start:"93% -195%",
        end:"93% -265%", 
        scrub:5,
    },
    scale:0.37,
    opacity:0,
    ease: "slow(0.7, 0.7, false)",
},"-=1")