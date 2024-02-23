const clock = document.querySelector('.clock');
const period = document.querySelector('.date');

const term = () => {
    const moment = new Date();
    const  day = dateFns.format(moment,'dddd');
    const  date = dateFns.format(moment,'Do');
    const  month= dateFns.format(moment,'MMMM');
    const  year = dateFns.format(moment,'YYYY');
    const html = `<span>${day}<span>, 
    <span>${date}<span>
    <span>${month}<span>
    <span>${year}<span>`;
    
    period.innerHTML = html;
}
setInterval(term);



const tick = () =>{
    const now = new Date();
    const hour =(now.getHours() <10?"0":" ") + now.getHours() ;
    const minute = (now.getMinutes()<10? "0": " " )+ now.getMinutes();
    const second = (now.getSeconds()<10? "0": " ") + now.getSeconds();
    
    
    const html = `<span class="time">${hour}</span>: 
    <span class="time">${minute}</span>:
    <span class="time">${second}<span>`;

    clock.innerHTML= html;
 }
 setInterval(tick,1000);
