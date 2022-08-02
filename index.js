const startbtn = document.getElementById('start');
const stopbtn = document.getElementById('stop');
const restartbtn = document.getElementById('restart');
const  time = document.getElementById('time');
const  narutorun = document.getElementById('narutorun');
const  narutostop = document.getElementById('narutostop');
const  narutoready = document.getElementById('narutoready');
const  runtitle = document.getElementById('runtitle');

let ms=0, s =0, m=0 , timer; // declacing variable ms = milisecond, s = seconds, m =minute;


const icon = () =>{ // hide start btn on click start and show stop btn;
   startbtn.style.display='none';
 stopbtn.style.visibility = 'inherit'
}
const run = () =>{ //when you start time on watch show jerk on going time from 0 to 10 to 100 on increaing 00
   // so we use turnery operator like if minute < 10 show 0 with it same for other's
   time.innerText = (m<10 ? '0' + m : m) + ":" +(s<10 ? '0'+s : s) + ":" +((ms<10) ?'00'+ms : (ms<100)? '0'+ms:ms);
   // now increa time on each time run was call;
   ms++;
   if (ms==999) {
      ms=000;
      s++;
   } if(s<3 && s>=0){
      runtitle.innerText = 'bus ker bhai rokh de 😩'
   }
   if(s>=3){
      runtitle.innerText = 'ab kiya bache ki jaan lega be 😵'
   }
   if (s==59) {
      s=00;
      m++;
   }
}
startbtn.addEventListener('click',()=>{ // creat event which make a call when start btn press;
   icon(); // changing  icon visibility;
   timer = setInterval(run,1);
    narutoready.style.display = 'none';
    narutorun.style.display = 'block';
    narutostop.style.display = 'none';
});

// stop time and set start btn display to block and stop visibility to hidden
stopbtn.addEventListener('click',() =>{
     clearInterval(timer);
     startbtn.style.display='block';
 stopbtn.style.visibility = 'hidden';
   narutorun.style.display = 'none';
   narutostop.style.display = 'block';
   narutoready.style.display = 'none'
   narutostop.style.width = '50%';
   runtitle.innerText = 'thoda aram mila 😮‍💨'
})

// restart time by clearing time and seting innertext intial time;
restartbtn.addEventListener('click',()=>{
   clearInterval(timer);
   time.innerText = '00:00:000';
   startbtn.style.display='block';
   stopbtn.style.visibility = 'hidden';
   narutorun.style.display = 'none';
   narutostop.style.display = 'none';
   narutoready.style.display = 'block';
   runtitle.innerText = `Let's Start`
})