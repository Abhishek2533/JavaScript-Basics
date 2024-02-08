const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums
                .map((num) => num*10)       // output1 -> [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 ]
                .map((num) => num + 1)      // output2 -> [ 11, 21, 31, 41, 51, 61, 71, 81, 91, 101 ]
                .filter((num) => num>=40)   // output3 (final) -> [ 41, 51, 61, 71, 81, 91, 101 ]

console.log(newNums);