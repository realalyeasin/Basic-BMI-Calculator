// to make the output hidden befor get the result, though here its now no needed cuz I controlled that from function
document.getElementById('output').style.visibility = 'hidden';

// function to get the input
document.getElementById('height').addEventListener('input', function(e){
    
    //to make the result visible 
    document.getElementById('output').style.visibility = 'visible';
    let h = e.target.value;

  //function inside function
  document.getElementById('weight').addEventListener('input', function(e){
    let w = e.target.value;
    
    //final value
    let r=w/(h*h)

    //to print the value
    document.getElementById('output').innerHTML ="Your BMI is " +r;
    
  })

})



  
