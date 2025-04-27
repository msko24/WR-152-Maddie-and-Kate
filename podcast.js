new TypeIt("#type", {
    lifeLike: false,
    speed: 0,
    html: true
})
    .type("O")
    .pause(50)
    .type("N")
    .pause(50)
    .type("C")
    .pause(50)
    .type("E")
    .pause(50)
    .type(" ")
    .pause(50)
    .type("U")
    .pause(50)
    .type("P")
    .pause(50)
    .type("O")
    .pause(50)
    .type("N")
    .pause(50)
    .type(" ")
    .pause(50)
    .type("A")
    .pause(50)
    .type(" ")
    .pause(300)
    .type('<span class="red-letter">R</span>')
    .pause(300)
    .type('<span class="red-letter">E</span>')
    .pause(300)
    .type('<span class="red-letter">D</span>')
    .pause(300)
    .type(" ")
    .pause(50)
    .type("F")
    .pause(50)
    .type("L")
    .pause(50)
    .type("A")
    .pause(50)
    .type("G")
    .pause(50)
    .go();

let today= new Date();

let day=today.getDate();
let month = today.getMonth()+1;
let year=today.getFullYear();
let min=today.getMinutes();
let hour=today.getHours();
let time=hour +":" + min;
let ampm = "";

if(min<10){
    min="0" + min;
}

if(day<10){
    day="0"+ day;
}

if(month<10){
    month="0" + month;
}

if(hour / 12 > 1){
    ampm="PM";
    time = (today.getHours() % 12) + ":" + min;
}else{
    ampm = "AM"
    time = (today.getHours() % 12) + ":" + min;
}

if (min<10){
    min="0"+min;
}

document.getElementById("time-date").innerHTML=
    `<h3>${time+ampm}</h3>
     <h5>${month+"/"+day+"/"+year}</h5>
    `
;