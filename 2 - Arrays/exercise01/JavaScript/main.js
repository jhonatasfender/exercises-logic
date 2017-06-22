/*
[55%] Your score on this task OddOccurrencesInArray
First try
*/

function solutionFirstTry(A) {
    let d = [];
    A.filter(function(b, i, j) {
        for (let c = 0; c < A.length; c++) {
            if (i != c && A[c] == b) {
                d[i] = true;
            }
        }
        return true;
    });
    for (let c = 0; c < A.length; c++)
        if (d[c] == undefined)
            return A[c];
}
window.onload = function() {
    console.log(solutionFirstTry([9, 3, 9, 3, 9, 7, 9]));
};