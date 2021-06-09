//Cutting Contents Text
const conTxt = document.querySelectorAll('.con-txt p a');

conTxt.forEach(element => {
  const cutTxt = element.textContent.slice(0, 10) + "...";
  element.textContent = cutTxt;
});

//Mobile Menu Activate
const mobileMenu = document.querySelector('.mobile-menu');

mobileMenu.onclick = () => {
  mobileMenu.classList.toggle('active');
}

//Pie Chart Rendering Code
document.addEventListener('DOMContentLoaded', function () {
  let lWidth = 10;
  let tWidth = 8;

  let pieSize = 200;
  let clearset;
  const winWidth = window.innerWidth;
  


  if(winWidth <= 1280 && winWidth > 950){
    pieSize = 150;
  } else if(winWidth <= 950 && winWidth > 400){
    pieSize = 170;
  }else if(winWidth <= 400){
    pieSize = 140;
  } 
  else {
    pieSize = 200;
  }

   
  var chart = window.chart = new EasyPieChart(document.querySelector('.total-chart .chart'), {
    easing: 'easeOutElastic',
    delay: 3000,
    barColor: '#7c41f5',
    trackColor: '#c1a5fa',
    scaleColor: false,
    lineWidth: 18,
    trackWidth: 18,
    size: pieSize,
    lineCap: 'butt',
    onStep: function(from, to, percent) {
      this.el.children[0].innerHTML = Math.round(percent);
    }
  });

  
  //const arr = [{a:1, b:2}, 4, 6, 5, 4, 6];
  //for(let i = 0; i < arr.length; i++){
  //   console.log(arr[i]);
  // }

  // arr.forEach(function(value){
  //   console.log(value);
  // });

  // arr.forEach(value => {
  //   console.log(value);
  // })

  // arr.map(function(value, idx){
  //   console.log(value.a);
  // });

  // arr.map(value => {
  //   console.log(value.a);
  // })

  //filter
  //reduce

 window.addEventListener('resize',function(){
  const winWidth = window.innerWidth;

  if(winWidth <= 1280 && winWidth > 950){
    pieSize = 150;
  } else if(winWidth <= 950 && winWidth > 400){
    pieSize = 170;
  }else if(winWidth <= 400){
    pieSize = 140;
  } 
  else {
    pieSize = 200;
  }


  clearTimeout(clearset);

  clearset = setTimeout(function(){

    document.querySelector('.total-chart .chart canvas').remove();
  var chart = window.chart = new EasyPieChart(document.querySelector('.total-chart .chart'), {
    easing: 'easeOutElastic',
    delay: 3000,
    barColor: '#7c41f5',
    trackColor: '#c1a5fa',
    scaleColor: false,
    lineWidth: 18,
    trackWidth: 18,
    size: pieSize,
    lineCap: 'butt',
    onStep: function(from, to, percent) {
      this.el.children[0].innerHTML = Math.round(percent);
    }
  });

   }, 150);
 });

  //-------------each charts

  if(winWidth <= 950){
    lWidth = 5;
    tWidth = 4;
  } else {
    lWidth = 10;
    tWidth = 8;
  }

  if(winWidth <= 1280){
   eachSize = 90;
  } else {
    eachSize = 110;
  }
  const poData = [
    {poKind:'.db-pofol', bColor:'#7c41f5', tColor:'#c1a5fa'},
    {poKind:'.api-pofol', bColor:'#ff9062', tColor:'#ffbca1'},
    {poKind:'.renewal-pofol', bColor:'#3acbe8', tColor:'#a2dce8'},
    {poKind:'.planning-pofol', bColor:'#69c', tColor:'#ace'},
    // {poKind:'.total-chart', bColor:'#69c', tColor:'#ace'},
  ];

  function startPie(){
    poData.map(value => {
      //console.log(value.b);
           
      var chart = window.chart = new EasyPieChart(document.querySelector(value.poKind + ' .chart'), {
        easing: 'easeOutElastic',
        delay: 3000,
        barColor: value.bColor,
        trackColor: value.tColor,
        scaleColor: false,
        lineWidth: lWidth,
        trackWidth: tWidth,
        size:eachSize,
        lineCap: 'round',
        onStep: function (from, to, percent) {
        this.el.children[0].innerHTML = Math.round(percent);
        }
      });
    });
  }
  startPie();
}); 

//Open Modal for Input Rates
//1. 버튼 DOM 저장 => index.php 133번줄
const modalBtn = document.querySelector('#open-modal');
// 5. modal 변수에 모달박스 DOM 저장
const modal = document.querySelector('#myModal');

//6.
const Times = document.querySelector('#times');

//4. modalBtn을 클릭했을 때 모달 박스 보이기
// When the user clicks on the button, open the modal
modalBtn.onclick = function() {
  modal.style.display = "block";
}


//7. X 버튼 클릭 시 모달창 제거
// times.onclick = function() {
//   modal.style.display = "none";
// }

// When the user clicks on <span> (x), close the modal
//8.모달 이외 영역 크릭 시 모달창 제거
window.onclick =function(event){
if (event.target == modal){
modal.style.display ="none";
}
}


