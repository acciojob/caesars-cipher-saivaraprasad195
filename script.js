// Your Script here.
// const lookup = {
//     A: "N",
//     B: "O",
//     C: "P",
//     D: "Q",
//     E: "R",
//     F: "S",
//     G: "T",
//     H: "U",
//     I: "V",
//     J: "W",
//     K: "X",
//     L: "Y",
//     M: "Z",
//     N: "A",
//     O: "B",
//     P: "C",
//     Q: "D",
//     R: "E",
//     S: "F",
//     T: "G",
//     U: "H",
//     V: "I",
//     W: "J",
//     X: "K",
//     Y: "L",
//     Z: "M",
//     "?": "?",
//     ",": ",",
//   };
  
  function rot13(encodedStr) {
    let decodedArr = []; // Your Result goes here
      let n = encodedStr.length;
      for(let i=0;i<n;i++){
        let charCode = encodedStr.charCodeAt(i);
        if(charCode >= 65 && charCode <= 90){
            charCode += 13;
			if(charCode > 90) charCode= (charCode%90)+64 ;
            decodedArr[i] = String.fromCharCode(charCode);
        }
		  else{
			  decodedArr[i] = encodedStr.charAt(i);
			  
		  }
      }
      
  
    return decodedArr.join(''); 
  }

  console.log(rot13("SERR YBIR? NPPVBWBO"));
// Do not change this line
window.rot13 = rot13;
