// FOR loop

for (let i = 0; i < 10; i++) {
    const element = i;
    console.log(element);
}


// BREAK and CONTINUE

for (let i = 0; i < 5; i++) {
    if (i == 5) {
        console.log("3 detected");
        break;  // jump out of the loop ,,, no more execution
    }
    console.log(i);    
}

for (let i = 0; i < 5; i++) {
    if (i == 5) {
        console.log("3 detected");
        continue;  // skip the pcontinue condition ,,, execute the rest code but not the continue condition
    }
    console.log(i);    
}