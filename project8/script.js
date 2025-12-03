function page1 (){
    var tl = gsap.timeline();

tl.from("nav h1, nav h4, nav button",{
y:-40,
duration:0.5,
delay:0.5,
opacity:0,
stagger:0.15,
})

tl.from(".center_part1 h1",{
x:-200,
duration:0.5,
opacity:0,
})
tl.from(".center_part1 p",{
x:-100,
duration:0.4,
opacity:0,
})
tl.from(".center_part1 button",{
opacity:0,
duration:0.4
})
tl.from(".center_part2 img",{
opacity:0,
duration:0.5,
y:-400,
x:200,
ease:"bounce.InOut",
},"-=0.5") // delay inside timeline

tl.from(".sectino1bottom img",{
opacity:0,
y:30,
duration:0.6,
stagger:0.15,
})
tl.from(".sectino1bottom h1",{
opacity:0,
y:30,
duration:0.6,
stagger:0.15,
})
}

page1()

function page2(){
    var tl2 = gsap.timeline({  //timeline
    scrollTrigger:{
        trigger:".section2",
        scroller:"body",
        start:"top 50%",
        end:"top 50%",
        scrub:2,
    }
});

tl2.from(".services",{
    y:30,
   opacity:0,
   duration:0.5,
})
// line 1
tl2.from(".elem.line1.left",{
    x:-300,
    opacity:0,
    duration:1,
},"same")  // to animate them at same time when scrolling

tl2.from(".elem.line1.right",{
x:300,
opacity:0,
duration:1
},"same")

// line 2
tl2.from(".elem.line2.left",{
    x:-300,
    opacity:0,
    duration:1,
},"item")

tl2.from(".elem.line2.right",{
x:300,
opacity:0,
duration:1
},"item")
}

page2()