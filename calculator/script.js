document.querySelector(".add").addEventListener("click", function(){
    let firstNumber = Number(document.querySelector(".input").value);
   // console.log(firstNumber);
   console.log(firstNumber);
   document.querySelector('.add').style.backgroundColor = '#60b347';
   //document.querySelector(".inputs").reset();
   document.querySelector(".equals").addEventListener( "click" ,function(){ 
    let secondNumber = Number(document.querySelector(".input2").value) ;
    let finalNumber = firstNumber + secondNumber;
    document.querySelector('.equals').style.backgroundColor = '#70b367';
    document.querySelector(".result").value=finalNumber;
   
   });
});

document.querySelector(".clear").addEventListener('click',()=>{
    document.querySelector(".input").value="";
    document.querySelector(".input2").value="";
    document.querySelector(".result").value="";
} );

document.querySelector(".subtract").addEventListener("click", function(){

    let firstNumber = Number(document.querySelector( ".input" ).value);
    document.querySelector(".equals").addEventListener("click",  function () {
        let secondNumber = Number(document.querySelector(".input2").value);
        let ans = firstNumber - secondNumber;
        document.querySelector(".result").value = ans;


    });

});

document.querySelector(".multiply").addEventListener("click", function(){

    let firstNumber = Number(document.querySelector( ".input" ).value);
    document.querySelector(".equals").addEventListener("click",  function () {
        let secondNumber = Number(document.querySelector(".input2").value);
        let ans = firstNumber * secondNumber;
        document.querySelector(".result").value = ans;
        

    });

});

document.querySelector(".divide").addEventListener("click", function(){

    let firstNumber = Number(document.querySelector( ".input" ).value);
    document.querySelector(".equals").addEventListener("click",  function () {
        let secondNumber = Number(document.querySelector(".input2").value);
        let ans = firstNumber / secondNumber;
        document.querySelector(".result").value = ans;
        

    });

});