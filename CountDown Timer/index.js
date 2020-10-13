const dayss=document.getElementById('days');
const hourss=document.getElementById('hours');
const minutess=document.getElementById('minutes');
const secondss=document.getElementById('seconds');
const nxtYear = "1 Jan 2021"
function countDown(){
    const newYearsdate = new Date(nxtYear);
    const currentDate = new Date();

    const seconds = (newYearsdate-currentDate)/1000;
    const d=seconds/86400;
    const h=(seconds/3600)%24;
    const m=(seconds/60)%60;
    const s=(seconds%60);
    console.log(Math.floor(d));
    console.log(Math.floor(h));
    console.log(Math.floor(m));
    console.log(Math.floor(s));

    dayss.innerHTML=Math.floor(d);
    hourss.innerHTML=setdigit(Math.floor(h));
    minutess.innerHTML=setdigit(Math.floor(m));
    secondss.innerHTML=setdigit(Math.floor(s));
}
function setdigit(time)
{
    if(time<10){
        return '0'+time;
    }
    else{
        return time;
    }
}
countDown();
setInterval(countDown,1000);