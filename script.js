
//I created four variable here 
const hourItem = document.getElementById('Hours');
const minuteItem = document.getElementById('Minutes');
const secondItem = document.getElementById('Seconds');
const ampmItem = document.getElementById('ampm');


//Here I created a function called updateClock to enable us get data from my computer using date constructor
function updateTime(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = 'am';

    if(h > 12){
        h = h - 12;
        ampm = 'pm';
    }
    
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;
        
    //Here I employed the innerText method to change the text inside the hourItem, minuteItem, secondItem and ampmItem
    hourItem.innerText = h;
    minuteItem.innerText = m;
    secondItem.innerText = s;
    ampmItem.innerText = ampm;

    //Here I used the setTimeout method to call out this function every second
    setTimeout(()=>{
        updateTime()
    }, 1000) 
}
updateTime();




