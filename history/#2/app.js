const age = parseInt(prompt("How old are you?"));

if (isNaN(age)) {
  console.log("it's not num");
} else if (age < 18) {
  console.log("you're too young");
}
