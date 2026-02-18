document.getElementById("name").innerText = localStorage.getItem("name");
document.getElementById("bank").innerText = localStorage.getItem("bank");
document.getElementById("amount").innerText = "₦" + localStorage.getItem("amount");
document.getElementById("ref").innerText = localStorage.getItem("ref");

document.getElementById("session").innerText =
"SB" + Math.floor(Math.random()*1000000000);

document.getElementById("date").innerText =
new Date().toLocaleString();

function downloadImage(){

html2canvas(document.getElementById("capture"),{scale:3}).then(canvas=>{
let link = document.createElement("a");
link.download = "stanbic_receipt.png";
link.href = canvas.toDataURL();
link.click();
});

}