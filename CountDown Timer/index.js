const dayss=document.getElementById('days');
const hourss=document.getElementById('hours');
const minutess=document.getElementById('minutes');
const secondss=document.getElementById('seconds');
const nxtYear = "1 Jan 2021"
function countDown(){
    const newYearsdate = new Date(nxtYear);
    const currentDate = new Date();

    const seconds = (newYearsdate-currentDate)/1000;

    

    console.log(newYearsdate);
    console.log(currentDate);
    console.log(seconds);
}
countDown();
