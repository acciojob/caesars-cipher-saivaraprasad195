// Your Script here.
const lookup = {
    A: "N",
    B: "O",
    C: "P",
    D: "Q",
    E: "R",
    F: "S",
    G: "T",
    H: "U",
    I: "V",
    J: "W",
    K: "X",
    L: "Y",
    M: "Z",
    N: "A",
    O: "B",
    P: "C",
    Q: "D",
    R: "E",
    S: "F",
    T: "G",
    U: "H",
    V: "I",
    W: "J",
    X: "K",
    Y: "L",
    Z: "M",
    "?": "?",
    ",": ",",
  };
  
  function rot13(encodedStr) {
    let decodedArr = []; // Your Result goes here
      let n = encodedStr.length;
      for(let i=0;i<n;i++){
        let charCode = encodedStr.charCodeAt(i);
        if(charCode >= 65 && charCode <= 90){
            charCode += 13;
            decodedArr[i] = String.fromCharCode(charCode);
        }
      }
      
  
    return decodedArr; 
  }

  console.log(rot13("ASERR YBIR? NPPVBWBO"));
// Do not change this line
window.rot13 = rot13;
