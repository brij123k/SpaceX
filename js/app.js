const anim =(()=>{
    let socials = document.querySelectorAll('.social div')
   socials.forEach((social,index)=>{
    social.style.animation = `moveIn .5s cubic-bezier(.38,.55,.77,.67) forwards ${index/5+0.2}s`
   })


 
   let rocketPieces = document.querySelectorAll('.rocket-body span')

   let rocket = document.querySelector('.rocket')
   
   let triggerStart = window.innerHeight/3;
   
   let rocketOffsetTop = rocket.offsetTop;
   
   let thirdOffsetTop = rocketPieces[2].offsetTop;
   
   document.addEventListener('scroll', (e) => {
     if(window.scrollY > (rocketOffsetTop - triggerStart)) {
       rocketPieces[0].classList.add('active');
       rocketPieces[1].classList.add('active');
     } else {
       rocketPieces[0].classList.remove('active');
       rocketPieces[1].classList.remove('active');
     }
   
     if(window.scrollY > (thirdOffsetTop - triggerStart)) {
       rocketPieces[2].classList.add('active');
     } else {
       rocketPieces[2].classList.remove('active');
     }
   })

})

anim();
