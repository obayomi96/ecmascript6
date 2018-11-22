// Declaring a variable using let will let the variable only accessible in the scope it is created and it can be reassigned another value

// using a global var variable inside the for loop
for(var i=0; i<10; i++){
    document.write(i);
}
// Still accessing the variable i in the for loop
document.write(i);

// using let within the for loop
for(let i=0;i<10;i++){
    document.write(i);
}
// This will call the global i variable in the first for loop
document.write(i);