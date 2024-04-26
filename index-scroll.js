const spans = document.querySelectorAll("span") 
    const contents = document.querySelectorAll(".content")
    const firstTop = contents[0].offsetTop
    const secondTop = contents[1].offsetTop
    const thirdTop = contents[2].offsetTop
    let currentIndex  = 0;
    let scrolling = false;
    // 기본값으로 첫 번째 span에 흰색 배경 적용
    spans[0].style.backgroundColor = "white";
    // 각 span에 클릭 이벤트 리스너 추가
    // 각 span에 클릭 이벤트 리스너 추가
    spans[0].onclick = function(){
        window.scroll({top:firstTop, behavior: 'smooth'});
        setSpanBackground(0);
    }
    spans[1].onclick = function(){
        window.scroll({top:secondTop, behavior: 'smooth'});
        setSpanBackground(1);
    }
    spans[2].onclick = function(){
        window.scroll({top:thirdTop, behavior: 'smooth'});
        setSpanBackground(2);
    }

    window.addEventListener("wheel", function(e){
          
        if(!scrolling) {
            scrolling = true;
            setTimeout(function (){
                scrolling =false
            }, 400);
            if(e.deltaY > 0 && currentIndex < contents.length -1 ){
                currentIndex++;
                window.scroll({ top: contents[currentIndex].offsetTop, behavior: "smooth"});
                setSpanBackground(currentIndex);
            } else if(e.deltaY < 0 && currentIndex > 0){
                currentIndex--;
                window.scroll({ top: contents[currentIndex].offsetTop, behavior: 'smooth'});
                setSpanBackground(currentIndex);
            }
        }
    })

    function setSpanBackground(index) {
        // 모든 span의 배경색을 초기화
        spans.forEach(span => span.style.backgroundColor = "");
        // 현재 인덱스에 해당하는 span에만 배경색을 흰색으로 변경
        spans[index].style.backgroundColor = "white";
    }