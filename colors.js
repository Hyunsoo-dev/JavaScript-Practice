
   //글자색 , 배경색과 관련된 객체 생성 
   var Body = {
    setColor : function(color){
      //document.querySelector('body').style.color = color;
      $("body").css("color" , color)
    },
    setBackgroundColor : function(color){
      //document.querySelector('body').style.backgroundColor = color;
      $("body").css("backgroundColor" , color)
    }
   }
/*
// 버튼 클릭 시 글자색 설정해주는 함수
    function BodySetColor(color){
      document.querySelector('body').style.color = color;
    }
    // 버튼 클릭 시 배경색 설정해주는 함수
    function BodySetBackgroundColor(color){
      document.querySelector('body').style.backgroundColor = color;
    }
    //버젼마다 링크의 색을 설정해주는 함수
    //   낮버젼일땐 글자색이 블루 
    //   밤버젼일땐 글자색이 파우더 블루  

*/

    // 링크의 색과 관련된 객체 생성
    var Link = {
      setColor : function(color){
            // var Alist = document.querySelectorAll('a');
            // var i = 0;
            // while(i < Alist.length){
            //     Alist[i].style.color = color;
            //     i = i + 1;
            // }
            $("a").css("color" , color)

        }

    }
/*
    //링크의 색을 설정해주는 함수
    function LinkedSetColor(color){
            var Alist = document.querySelectorAll('a');
            var i = 0;
            while(i < Alist.length){
                Alist[i].style.color = color;
                i = i + 1;
            }

    }
*/
    function nightDayHandler(self){
    var target = document.querySelector('body');
        if(self.value === 'day'){
            Body.setBackgroundColor('black');
            Body.setColor('white');
            self.value = 'night';

            Link.setColor('powderblue');

        }else{
            Body.setBackgroundColor('white');
            Body.setColor('black');
            self.value = 'day';

            Link.setColor('blue');
            } 
      }
