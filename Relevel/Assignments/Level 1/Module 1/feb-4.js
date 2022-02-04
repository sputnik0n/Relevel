//astroGuru Print String Program

function astroGuru(jobTitle, geolocation, partner, numKids) {
    var future = 'You will be a ' + jobTitle + ' in ' + geolocation + ' and married to ' +
    partner + ' with ' + numKids + ' kids.';
    console.log(future);
  }
  
  let numKids= prompt('Enter the number of children you have');
  let partner = prompt('Enter the name of your spouse');
  let geolocation = prompt('Enter your location');
  let jobTitle = prompt('Enter your job');
  
  astroGuru(jobTitle, geolocation, partner, numKids);
  
  
  //Comparing two numbers
  
  let  num1 = prompt('Enter the first number');
  let num2 = prompt('Enter the second number');
  
  if(num1 >= num2)
      console.log(num1 + ' is the greater number');
  else
      console.log(num2 + ' is the greater number');