console.clear();
console.log("✅ script.js connected");

const marksInput = document.getElementById("marks");
const btnDoWhile = document.getElementById("btnDoWhile");
const btnFor = document.getElementById("btnFor");
const btnClear = document.getElementById("btnClear");
const output = document.getElementById("output");

console.log(marksInput, btnDoWhile, btnFor, btnClear, output);

document.addEventListener("DOMContentLoaded", function() {
    btnDoWhile.addEventListener("click",function () {
        console.log("✅ step 1 clicked");
    });

    btnFor.addEventListener("click",function () {
        console.log("✅ step 2 clicked");
    });

    btnClear.addEventListener("click",function () {
        console.log("✅ step 3 clicked");
    });
});

function getElementById() {
    let text = marksInput.ariaValueMax;
    return text.split(",").map(x => Number(x.trim()));
}

function calculateStats(){

    console.clear();
    console.log("=== DO-WHILW : TOTAL & AVERAGE ===");

    let marks = getElementById();

    let i = 0;
    let total = 0;

    do{
        total += marks[i];
        i++;
    } while (i < marks.length);

    let averege = total / marks.length;

    console.log("Total =", total);
    console.log("Average =", average.toFixed(2));

    output.className = "alert alert-info mb-0";
    output.innerHTML = "Total marks = <b>" + total + "</b><br>" + "Average marks = <b>" + average.toFixed(2) + "</b>";
}

function countPassFail(){
    console.clear();
    console.log("=== FOR LOOP: PASS / FAIL COUNT ===");

    let marks = getMarksArray();

    let pass = 0;
    let fail = 0;

    for (let i =0; i <marks.lenght; i++) {
        if (marks [i] >= 50) {
            pass++;
            console.log("Marks", i + 1, "=", marks[i], "PASS");
        } else {
            fail++;
            console.log("Mark", i + 1, "=", marks[i], "FAIL");
        }
    }
    console.log("Total PASS =", pass);
    console.log("Total FAIL =", fail);

    output.className ="alert alert-success mb-0";
    output.innerHTML = "Total PASS = <b>" + pass "</b><br>" + "Total FAIL = <b>" + fail "</b>";
}

function clearOutput(){
    console.clear();
    output.className = "alert aler-secondary mb-0";
    output.innerHTML = " result Cleared";
    marksInput.value = "";
}

document.addEventListener("DOMContentLoaded", function () {
    btnDoWhile.addEventListener("click", calculateStats);
    btnFor.addEventListener("click", countPassFail);
    btnClear.addEventListener("click", clearOutput);

});