function scuberGreetingForFeet(ride){
 let result
  if (ride<=400){
  result='freeSample';
  }
  return 'This one is on me!'
}else if (distance > 400 && distance <= 2000) {
  return 'I will gladly take your thirty bucks.';
} else if (distance > 2000 && distance <= 2500) {
  return '$30 charge for distances over 2000 feet.';
} else {
  return 'Rides over 2500 feet are not allowed.';
}
function ternaryCheckCity(){
  return city==="NYC" ?'okay, sounds good.' :'No go.';
console.log(ternaryCheckCity("LA"))
}
function switchOnCharmFromTip(){
  switch(money){
    case "generous"
    return "Thank you so much";
    break;
    case "not as generous":
    return "Thank you.";
    break;
    default:
      return "Bye."
  }
}