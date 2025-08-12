let age = window.prompt("Enter your age:");
let maxAge = window.prompt("Enter the age you want to live up to:");
let numPerDay = window.prompt("Enter how many wafers you eat per day:");

totalRequired = (numPerDay * 365) * (maxAge - age)


if (confirm(`Are the values you inputted really true?:`)) {
    document.write("You will need " + totalRequired + " wafers to last you until the ripe old age of " + maxAge)
    alert(`You will need ${totalRequired} wafers to last you until the ripe old age of ${maxAge}`) }
else {
document.write("Run the code again:)")
}
