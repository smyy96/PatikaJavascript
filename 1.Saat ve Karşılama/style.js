let names=prompt("Adınız: ")
let info = document.getElementById("myName")
info.innerHTML=`${names}`

showTime()
function showTime()
{
    var days= ["Pzr","Pzrts","Salı","Çarş","Perş","Cuma","Cmrtsi"];
    let day=new Date().toLocaleTimeString()
    let dayname=new Date()
    let clock = document.getElementById("myClock")
    clock.innerHTML=day+" "+ days[dayname.getDay()]
    setInterval("showTime()", 1000);

}




