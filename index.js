function convertToHex() {
    let rgbInput = document.getElementById("rgbInput").value;
    let rgbArray = rgbInput.split(",");
    let hexArray = [];
    
    for (let i = 0; i < rgbArray.length; i++) {
        let decimal = parseInt(rgbArray[i]);
        let hex = decimal.toString(16);
        hexArray.push(hex.padStart(2, "0"));
    }
    
    let hexResult = "#" + hexArray.join("");
    document.getElementById("hexResult").innerHTML = "Hex: " + hexResult;
}