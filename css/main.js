const toggleBtn = document.querySelector('.nav__bar')
const main = document.querySelector('.nav__main')
const icon = document.querySelector('.nav__icon')



toggleBtn.addEventListener('click', () =>
{
    main.classList.toggle('active');
    icon.classList.toggle('active');
});

function printName()  {
    const name = document.getElementsByClassName('fa-solid fa-circle-half-stroke').value;
    document.getElementById("nightdaytext").innerText = name;
  }

var Body = {
    setcolor:function(color){
        //document.querySelector('body').style.color = color;
        $('body').css('color', color);
    },
    setBackgroundColor:function(color){
        //document.querySelector('body').style.backgroundColor = color;
        $('body').css('backgroundColor', color);
    }
}
function nightDayHandler(self){
    var target = document.querySelector('body');
    if(self.value == 'night'){
        Body.setBackgroundColor('black');
        Body.setcolor('white');
        self.value = 'day';
        printName();
      
    }
    else{
        Body.setBackgroundColor('white');
        Body.setcolor('black');
        self.value = 'night';
        printName();
      
    }
}