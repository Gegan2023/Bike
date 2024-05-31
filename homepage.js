const selectEl = document.getElementById("Motorcycle-Types");
const ninjaText = document.getElementById("Ninja-500");
const ninjaABSText = document.getElementById("Ninja-500-ABS");
const ninjaSEABSText = document.getElementById("Ninja-500-SE-ABS");
const ninjaKRTSEABSText = document.getElementById("Ninja-500-KRT-SE-ABS");
selectEl.addEventListener("change", function () {
    // make all hidden
    ninjaText.hidden = true;
    ninjaABSText.hidden = true;
    ninjaSEABSText.hidden = true;
    ninjaKRTSEABSText.hidden = true;
    // unhide the one to show
    if (selectEl.value == "Ninja-500") {
        ninjaText.hidden = false;
    } else if (selectEl.value == "Ninja-500-ABS") {
        ninjaABSText.hidden = false;
    } else if (selectEl.value == "Ninja-500-SE-ABS") {
        ninjaSEABSText.hidden = false;
    } else if (selectEl.value == "Ninja-500-KRT-SE-ABS") {
        ninjaKRTSEABSText.hidden = false;
    }

})