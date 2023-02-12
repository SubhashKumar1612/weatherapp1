
const curDate =document.getElementById("date");
let weathercon=document.getElementById("weathercon");

const tempstatus="{%tempstatus%}";
if(tempstatus=="Sunny"){
  weathercon.innerHTML="<i class='fa-solid fa-sun'style='color: yellow'></i>";
}else if(tempstatus=='Clouds'){
  weathercon.innerHTML="<i class='fa-solid fa-cloud'style='color: #606161'></i>";
}else if(tempstatus=='Rainy'){
  weathercon.innerHTML="<i class='fa-solid fa-cloud-rain'style='color: blue'></i>";
}else{
  weathercon.innerHTML="<i class='fa-solid fa-cloud'style='color: #606161'></i>";
}

const getCurrentDay =()=>{
  var weekday=new Array(7);
  weekday[0]="Sun";
  weekday[1]="Mon";
  weekday[2]="Tue";
  weekday[3]="Wed";
  weekday[4]="Thu";
  weekday[5]="Fri";
  weekday[6]="Sat";
  
  let currentime= new Date();
  let day=weekday[currentime.getDay()];
  return day ;
};
const getCurrentTime=()=>{
  const months = [
    "Jan",
     "Feb", 
     "Mar",
    "Apr",
    "May",
    "Jun", 
    "Jly", 
    "Aug",
    "Sep", 
   "Oct", 
    "Nov",
    "Dec"];


   var now=new Date();
   var month = months[now.getMonth()];
   var day = now.getDate();
   let hours=now.getHours();
   let mins=now.getMinutes();
   let period = "AM";
   if(hours>11){
    period="PM";
    if(hours>12)hours -=12;
   }
   if(mins<10){
    mins="0"+mins;
   }
   return `${month} ${day} | ${hours}:${mins}${period} `;
};
curDate.innerHTML=getCurrentDay() + " | " + getCurrentTime();