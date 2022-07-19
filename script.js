function ReverseWord(){
    
var OldWord = document.getElementById("t").value; // Get The Word from the textbox
var newWord = ""; // store the reversed word

for(var i = 1; i <= OldWord.length;i++ ){ //loop through eaceh letter in the old word from end to start and add it to new Word 
    newWord += OldWord[OldWord.length - i];
}


document.getElementById("RW").innerHTML = newWord; // Print Result

}