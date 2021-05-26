function check_numbers(x, y) 
  {
  if ((x >= 50 && x <= 100) || (y >= 50 && y <= 100))
  {
    return true;
  } 
  else 
  {
    return false;
  }
}

console.log(check_numbers(12, 101));
console.log(check_numbers(52, 80));
console.log(check_numbers(15, 99));
