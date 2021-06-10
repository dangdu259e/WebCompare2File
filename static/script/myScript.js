// hljs.debugMode();
// hljs.highlightAll();

const fileSelector = document.getElementById('file-selector');
fileSelector.addEventListener('change', (event) => {
    const fileList = event.target.files;
    console.log(fileList);
});
// // popup Hello world code 
// function openHWcode() {    
//     document.getElementById("openHWcode").style.background = "green";
//     document.getElementById("openLCScode").style.background = "#555";
//     document.getElementById("Hello_World_code").style.display = "block";
//     document.getElementById("LCS_code").style.display = "none";
// }

// function closeHWcode() {
//     document.getElementById("Hello_World_code").style.display = "none";
//     document.getElementById("openHWcode").style.background = "#555";
//     document.getElementById("openLCScode").style.background = "#555";
// }

// // popup LCS code 
// function openLCScode() {
//     document.getElementById("openLCScode").style.background = "green";
//     document.getElementById("openHWcode").style.background = "#555";
//     document.getElementById("LCS_code").style.display = "block";
//     document.getElementById("Hello_World_code").style.display = "none";
// }

// function closeLCScode() {
//     document.getElementById("LCS_code").style.display = "none";
//     document.getElementById("openHWcode").style.background = "#555";
//     document.getElementById("openLCScode").style.background = "#555";
// }