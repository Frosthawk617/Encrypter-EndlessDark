var sequence = [];
var testString =
  "oh my goodness thank you so much for this one, i've been literally gone crazy bc of some problems that I could solve by your answer!! XD";
var testSequence = testString.split("");
var seqKey = [];
var encSequence = [];
var decryptedSequence = [];
var decryptedString = "";
var encString = "";
function randNum() {
  var numb = Math.floor(Math.random() * 999) + 1;
  seqKey.push(numb);
  return numb;
}

function nextChar(c, change) {
  return String.fromCharCode(c.charCodeAt(0) + change);
}
var test = nextChar("a");

function encrypt(toEncryptString, fragNum) {
  toEncryptString.forEach((element) => {
    var changeBy = randNum();
    var newChar = nextChar(element, changeBy);
    encSequence.push(newChar);
    encString = encSequence.join("");
  });

  if (fragNum === "Fragments") {
    $(".encrypted").text(encString);
    $(".key").text(seqKey);
  } else {
    fragment(encSequence, seqKey, fragNum);
  }
}

// This one works .forEach seems easier
function decryptSequence(sequenceToDecrypt, seqKey) {
  sequenceToDecrypt.forEach((element) => {
    var keyDec = seqKey.shift();
    var keyDecNeg = keyDec * -1;
    var decChar = nextChar(element, keyDecNeg);
    decryptedSequence.push(decChar);
    decryptedString = decryptedSequence.join("");
    console.log(decryptedString);
  });
}

$(".submit").click(function (e) {
  e.preventDefault();
  var text = $(".toEncrypt").val();
  var fragNum = $("#fragAmount option:selected").text();
  console.log(fragNum);
  text = text.split("");
  encrypt(text, fragNum);
});



// function fragment(encSequence, seqKey, fragments) {
//     var length = encSequence.length;
//     var cutDepth = length / fragments;

//     for (var i = 0; i < fragments; i++) {
//         var 
//     } 
// }

class FragmentedSequence {
    constructor(seqfragOne, seqfragTwo, seqfragThree, seqfragFour, keyfragOne, keyfragTwo, keyfragThree, keyfragFour) {
        this.seqfragOne = seqfragOne;
        this.seqfragTwo = seqfragTwo;
        this.seqfragThree = seqfragThree;
        this.seqfragFour = seqfragFour;
        this.keyfragOne = keyfragOne;
        this.keyfragTwo = keyfragTwo;
        this.keyfragThree = keyfragThree;
        this.keyfragFour = keyfragFour;
    }
}
function fragment(encSequence, seqKey, fragments) {
  var length = encSequence.length;
if (fragments == 2) {
  var frag1End = length / fragments;
  var frag2Start = length / fragments;
  var frag2End = length;  

  var seqFragment1 = encSequence.slice(0, frag1End);
  var seqFragment2 = encSequence.slice(frag2Start, frag2End);
  var keyFragment1 = seqKey.slice(0, frag1End);
  var keyFragment2 = seqKey.slice(frag2Start, frag2End);
    var seqFragObj = new FragmentedSequence(seqFragment1,seqFragment2,0, 0,keyFragment1,keyFragment2,0,0);
    console.log(seqFragObj);
} else if ( fragments == 4) {
 var frag1end = length / fragments;
 var frag2end = frag1end * 2;
 var frag3end = frag1end * 3;
 var frag4end = length;
 var seqFragment1 = encSequence.slice(0, frag1end);
 var seqFragment2 = encSequence.slice(frag1end, frag2end);
 var seqFragment3 = encSequence.slice(frag2end, frag3end);
 var seqFragment4 = encSequence.slice(frag3end, frag4end);

 var keyFragment1 = seqKey.slice(0, frag1end);
 var keyFragment2 = seqKey.slice(frag1end, frag2end);
 var keyFragment3 = seqKey.slice(frag2end, frag3end);
 var keyFragment4 = seqKey.slice(frag3end, frag4end);

 var seqFragObj = new FragmentedSequence(seqFragment1,seqFragment2,seqFragment3, seqFragment4,keyFragment1,keyFragment2,keyFragment3,keyFragment4);
 console.log(seqFragObj);
 console.log(seqFragObj.keyfragOne);
 $(".encrypted").text(seqFragObj.seqfragOne.join('') +'---'+ seqFragObj.seqfragTwo.join('') +'---'+ seqFragObj.seqfragThree.join('') +'---'+ seqFragObj.seqfragFour.join(''));
 $(".key").text(seqFragObj.keyfragOne.join('') +'---'+ seqFragObj.keyfragTwo.join('') +'---'+ seqFragObj.keyfragThree.join('') +'---'+ seqFragObj.keyfragFour.join(''));
}
}

function reset() {
  seqKey = [];
  encString = "";
}

// function decrypt(sequence, key) {
//     for (i = 0; i < sequence.length; i++) {
//         var charDec = sequence.shift();
//         console.log(charDec);
//         var keyDec = key.shift();
//         var keyDecNeg = keyDec * -1;
//         var decChar = nextChar(charDec, keyDecNeg);
//         decryptedSequence.push(decChar);
//     }
//     console.log(decryptedSequence);
// }
