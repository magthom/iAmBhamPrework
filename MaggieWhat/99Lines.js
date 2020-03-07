function linesOfCode() {
   for (let i = 99;  i > 0;  i--) {
        if (i !== 1) {
            console.log( [i] + "Lines of code in the file, " + [i] + "lines of code, " + "John strikes ones out, cleras it all out, " + [i - 1] + "lines of code in the file");
        } else {
            console.log("1 line of code in the file, 1 line of code, John strikes it out clears it all out, no more code in the file");
        }
    }
}
linesOfCode();