const spans = document.querySelectorAll("span"); 
const contents = document.querySelectorAll(".content");
let currentIndex  = 0;
let scrolling = false;
headerColor(currentIndex);
window.addEventListener("wheel", function(e){
    headerColor(currentIndex);
    if(!scrolling) {
        scrolling = true;
        setTimeout(function (){
            scrolling =false
        }, 400);
        if(e.deltaY > 0 && currentIndex < contents.length -1 ){
            currentIndex++;
            window.scroll({ top: contents[currentIndex].offsetTop, behavior: "smooth"});
            headerColor(currentIndex);
        } else if(e.deltaY < 0 && currentIndex > 0){
            currentIndex--;
            window.scroll({ top: contents[currentIndex].offsetTop, behavior: 'smooth'});
            headerColor(currentIndex);
            
        }
    }
})

function headerColor(currentIndex){
    var header = document.getElementById('header');
    if(currentIndex > 0){
        header.style.backgroundColor = 'white';
    } else{
        header.style.backgroundColor = 'transparent';
    }
}

