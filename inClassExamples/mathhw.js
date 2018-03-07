var add = function(calculate){
    var number1 =  document.getElementById('number1').value; 
     var number2 =  document.getElementById('number2').value; 
    document.getElementById('calculate').innerHTML= parseInt(number1) + parseInt(number2);
   };
   
   var subtraction = function(calculate){
     var number1 = document.getElementById('number1').value;
     var number2 = document.getElementById('number2').value;
     document.getElementById('calculate').innerHTML= parseInt(number1)  -  parseInt(number2);
   };
   
   var multiply = function(calculate){
     var number1 = document.getElementById('number1').value;
     var number2 = document.getElementById('number2').value;
     document.getElementById('calculate').innerHTML= parseInt(number1) * parseInt(number2);
   };
   
   var divide = function(calculate){
     var number1 = document.getElementById('number1').value;
     var number2 = document.getElementById('number2').value;
     document.getElementById('calculate').innerHTML= parseInt(number1) / parseInt(number2);
   };