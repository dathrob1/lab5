/*  
Here is the exercise on working on the remaining bom method 

Location , Navigator , screen , Window 

Follow the Instruction on the comments 

1. Declare the UI Variables for selecting on the elements 
2. Use the innerHTML property to display the result on each element 
3. The Text  of the elements will lead you what bom information is required 

Adding Extra is Possible if you want to explore more ...

Good Luck !!! 
*/



const answerall = document.querySelector('#answer_all')
const href = document.querySelector('#href')
const protocol = document.querySelector('#protocol')
const host = document.querySelector('#host')
const port = document.querySelector('#port')
const hostname = document.querySelector('#hostname')
const appname = document.querySelector('#appname')
const appversion = document.querySelector('#appversion')
const platform = document.querySelector('#platform')
const language = document.querySelector('#language')
const cookieenabled = document.querySelector('#cookieenabled')
const height = document.querySelector('#height')
const width = document.querySelector('#width')
const pixeldepth = document.querySelector('#pixeldepth')
const length = document.querySelector('#length')
const state = document.querySelector('#state')
href.addEventListener('click', hreffinder);
protocol.addEventListener('click', protocolfinder);
host.addEventListener('click', hostfinder);
port.addEventListener('click', portfinder);
hostname.addEventListener('click',hostnamefinder)
appname.addEventListener('click', appnamefinder);
appversion.addEventListener('click', appversionfinder);
platform.addEventListener('click', platformfinder);
language.addEventListener('click', languagefinder);
cookieenabled.addEventListener('click', cookieenabledfinder);
height.addEventListener('click', heightfinder);
width.addEventListener('click', widthfinder);
pixeldepth.addEventListener('click', pixeldepthfinder);
length.addEventListener('click', lengthfinder);
state.addEventListener('click', statefinder);
answerall.addEventListener('click',() => {    
    hreffinder();
    protocolfinder();    
    hostfinder();
    portfinder();
    hostnamefinder();
    appnamefinder();
    appversionfinder();
    platformfinder();
    languagefinder();
    cookieenabledfinder();
    heightfinder();
    widthfinder();
    lengthfinder();
    statefinder();
});



function hreffinder(){

    document.getElementById("href_answer").innerHTML = location.href;

}
function protocolfinder(){

    document.getElementById("protocol_answer").innerHTML = location.protocol;

}
function hostfinder(){

    document.getElementById("host_answer").innerHTML = location.host;

}
function portfinder(){

    document.getElementById("port_answer").innerHTML = location.port;

}
function hostnamefinder(){

    document.getElementById("hostname_answer").innerHTML = location.hostname;

}
function appnamefinder(){

    document.getElementById("appname_answer").innerHTML = navigator.appname;

}
function appversionfinder(){

    document.getElementById("appversion_answer").innerHTML = navigator.appVersion;

}
function platformfinder(){

    document.getElementById("platform_answer").innerHTML = navigator.platform;

}
function languagefinder(){

    document.getElementById("language_answer").innerHTML = navigator.language;

}
function cookieenabledfinder(){

    document.getElementById("cookieenabled_answer").innerHTML = navigator.cookieEnabled;

}
function heightfinder(){

    document.getElementById("height_answer").innerHTML = screen.height;

}
function widthfinder(){

    document.getElementById("width_answer").innerHTML = screen.width;

}
function pixeldepthfinder(){

    document.getElementById("pixel_answer").innerHTML = screen.pixelDepth;

}
function lengthfinder(){

    document.getElementById("length_answer").innerHTML = history.length;

}
function statefinder(){

    document.getElementById("state_answer").innerHTML = history.state;

}




// Define UI Variables  here 









// Display the BOM Information on the innerHTML of the elements