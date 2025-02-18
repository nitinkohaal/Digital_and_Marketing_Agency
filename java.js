const lenis = new Lenis({
  duration:4
});

function raf(time){
      lenis.raf(time);
      requestAnimationFrame(raf);
}

requestAnimationFrame(raf);


// loader 


gsap.to(".loader-text", { opacity: 1, duration: 1, yoyo: true, repeat: -1, ease: "power1.inOut" });
  gsap.to(".loader-bar", { width: "100%", duration: 3, ease: "power2.out" });
  


window.addEventListener('DOMContentLoaded', () => {
  

  setTimeout(()=>{

   document.querySelector(".loader").style.display = "none"

  
    },5000)

});





// navigation 

let nav = document.getElementById('nav');


let lastScrollTop = 0;

window.addEventListener("scroll", (e) => {
    let scrollTop = window.scrollY;
    if (scrollTop > lastScrollTop) {
      // Scrolling Down
      gsap.to(nav,{
        y: -100+'%',
        duration: 0.5,

      })
        
    } else {
        gsap.to(nav,{
        y: 0,
        duration: 0.5
      })
     
    }

    lastScrollTop = scrollTop;
});


// cursor

const cursor = document.getElementById('cursor');

window.addEventListener('mousemove',(e)=>{
    let x = e.clientX;
    let y = e.clientY;

    gsap.to(cursor,{
      x:x,
      y:y,
      duration:0.1

    })

  


})




const mm = gsap.matchMedia();

mm.add("(min-width: 768px)", () =>{


let maintl= gsap.timeline({
  scrollTrigger:{
    trigger:'#main',
    scroller:'body',
    start:'top top',
    scrub:2,

  }
})

maintl.to('.main-heading',{
  x:-100+"%",
  opacity:0,
  duration:1

})



maintl.to('.main-p',{
  x:-100+"%",
  opacity:0,
  duration:1

},'-=1')

maintl.to('.main-three',{
  y:-100+"%",
  opacity:0,
  duration:1

},'-=1')

maintl.to('.btn-all',{
  y:-100+"%",
  opacity:0,
  duration:1

},'-=1')

maintl.to('.main-img',{
  y:-100+"%",
  opacity:0,
  duration:1

},'-=1')


// sec 2

const sec2tl=gsap.timeline({
  scrollTrigger:{
    trigger:'.section-3',
    scroller:'body',
    start:'top 50%',
    end:'top -10%',
    scrub:2
  }

})

  
sec2tl.from('#sec-3-h',{
  y:100,
  duration:1,
  opacity:0
}) 

sec2tl.from('#skill-1',{
  x:-100,
  opacity:0,
  duration:1
})

sec2tl.from('#skill-2',{
  x:100,
  opacity:0,
  duration:1
})

sec2tl.from('#skill-3',{
  x:-100,
  opacity:0,
  duration:1
})

sec2tl.from('#skill-4',{
  x:100,
  opacity:0,
  duration:1
})


// sec 4

const sec4tl = gsap.timeline({
  scrollTrigger:{
    trigger:'.sec-4',
    scroller:'body',
    start:'top 50%',
    end:'top -10%',
    scrub:true
  }
})

sec4tl.from('.sec4-1',{
    y:-100,
    opacity:0,
    duration:1
})

sec4tl.from('.sec4-2',{
  y:-100,
  opacity:0,
  duration:1
})

sec4tl.from('.sec4-3',{
  y:-100,
  opacity:0,
  duration:1
})

// sec 5


const sec5tl = gsap.timeline({
  scrollTrigger:{
    trigger:'.sec-5',
    scroller:'body',
    start:'top 50%',
    end:'top -10%',
    scrub:true
  }
})

sec5tl.from('.sec5-1',{
    y:-100,
    opacity:0,
    duration:1
})

sec5tl.from('.sec5-2',{
  y:-100,
  opacity:0,
  duration:1
},'one')

sec5tl.from('.sec5-3',{
  y:-100,
  opacity:0,
  duration:1
},'one')


sec5tl.from('.sec5-4',{
  y:-100,
  opacity:0,
  duration:1
},'one')


// sec6 


const sec6tl = gsap.timeline({
  scrollTrigger:{
    trigger:'.sec-6',
    scroller:'body',
    start:'top 70%',
    end:'top 20%',
    scrub:true
  }
})

sec6tl.from('.sec6-1',{
  y:-100,
  opacity:0,
  duration:1
})

sec6tl.from('.sec6-2',{
  y:-100,
  opacity:0,
  duration:1
})


sec6tl.from('.sec6-3',{
  y:-100,
  opacity:0,
  duration:1
})



sec6tl.from('.sec6-4',{
  y:-100,
  opacity:0,
  duration:1
})



// sec 8

const sec8tl = gsap.timeline({
  scrollTrigger:{
    trigger:'.sec-8',
    scroller:'body',
    start:'top 50%',
    end:'top 0%',
    scrub:2,
  }
})



sec8tl.from('.sec8-1',{
  y:100,
  opacity:0,
  duration:1
})
sec8tl.from('.sec8-2',{
  y:100,
  opacity:0,
  duration:4
})


// sec 10  

// section 3

const contl=gsap.timeline({
  scrollTrigger:{
    trigger:'.sec-10',
    scroller:'body',
    start:'top 50%',
    end:'top 0',
    scrub:2

  }
})

contl.from('.sec10-1',{
  y:100,
  duration:3,
  opacity:0
},'one')

contl.from('.sec10-2',{
  y:100,
  duration:3,
  opacity:0
},'one')


})
























     
