/*--------------------SQUARE--------------------*/

const square = (n, char) => { 
    for (let i = 1; i <= n; i++) { 
        for (let j = 1; j <= n; j++) {
            console.log(i, char);
            document.write(char);  
        }
        document.write("<br>")
    }
};

square(3, "*");

console.log("-----------------------");
document.write("<br>");


/*--------------------SQUARE WITH BORDER--------------------*/

const squareWithBorder = (n, charBorder, charInner) => {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 || i === n - 1) {
                document.write(charBorder);
            }
            else if(j === 0 || j === n - 1) {
                document.write(charBorder);
              }
              else {
                document.write(charInner);
              }
        }
        document.write("<br>");
          
    }
};

squareWithBorder(5, "B", "* ");


/*--------------------SQUARE - DIAGONAL LEFT-RIGHT--------------------*/

const squareDiagonalLR = (n, charDiagonal, charUp, charDown) => { 
    for (let i = 1; i <= n; i++) { 
        let outcome = "";
        for (let j = 1; j <= n; j++) {
            if (i === j) {
                outcome += charDiagonal;
            } else if ( i < j) {
                outcome += charUp;
            }
            else {
                outcome += charDown;
            }
        }
        console.log(outcome);
    }
};

squareDiagonalLR(4, "\\", "A", "B");

console.log("-----------------------");

/*--------------------SQUARE - DIAGONAL RIGHT-LEFT--------------------*/

const squareDiagonalRL = (n, charDiagonal, charUp, charDown) => {
    for (let i = 1; i <= n; i++) { 
        let outcome = "";
        for (let j = 1; j <= n; j++) {
            if (i + j === n + 1) {
                outcome += charDiagonal;
            } else if ( i + j <= n) {
                outcome += charUp;
            }
            else {
                outcome += charDown;
            }
        }
        console.log(outcome);
    }
};

squareDiagonalRL(6, "/", "A", "B");

console.log("-----------------------");

/*--------------------HALF DIAMOND--------------------*/

const halfDiamond = (n, char) => {
    for (let i = 0; i < n * 2; i++) {
        let outcome = "";
        let totalColumnsInRow = i >= n ? 2 * n - i : i;
        for (let j = 0; j < totalColumnsInRow; j++) {
            outcome += char;   
        };
        console.log(outcome);  
    }
 };

 halfDiamond(5, "*");

 console.log("-----------------------");

/*--------------------PYRAMID--------------------*/

 const pyramid =(n, char) => {
    for (let i = 0; i < n; i++) {
        let output = "";
        for (let j = 0; j < n - i; j++) {
            output += " ";
        } 
        for (let k = 0; k <= 2 * i; k++) {
            output += char;
        } 
        console.log(output);  
    } 
};

pyramid(5, "*");

console.log("-----------------------");

/*--------------------DIAMOND--------------------*/

const diamond = (n, char) => {
    for (let i = 0; i <= n * 2; i++) {
        let output = "";
        let totalColumnsInRow = i > n ? 2 * n - i : i;
        let spaces = n - totalColumnsInRow;
        for (let s = 0; s < spaces; s++) { 
            output += " ";  
        };
        for (let j = 0; j <= 2 * totalColumnsInRow; j++) {
            output += char;   
        }; 
        console.log(output);  
    }
    
 };

 diamond(5, "*");
 