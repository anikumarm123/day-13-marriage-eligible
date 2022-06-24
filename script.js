//marriage eligible or not//
let b = "male";
let g = "female";
let gender = "male";
console.log("Gender : " , gender);
let age = 21;
console.log("Age : " , age);
if(gender==b){
    if(age > 21){
        console.log("Marriage Eligible");
      }
      else if (age == 21 ){
        console.log("Waiting for one year");
      }
      else{
        console.log("Not Eligible to Marriage");
      }
}
else if(gender == g){
    if(age > 18){
        console.log("marriage eligible");
    }
    else{
        console.log("not eligible to marriage");
    }
}
else{
    console.log ("others");
}