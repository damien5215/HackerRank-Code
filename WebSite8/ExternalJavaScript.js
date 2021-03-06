﻿function home1() {
    //document.getElementById("img1").src = "images2/f300.png";
    //document.getElementById("text1").innerText = "These are some of my solutions to the problems on HackerRank that I've solved so far." + "\n" + "\n" + "The screenshots are from rextester (an online IDE where I developed/tested the code) and all of the codes passed all of the test cases in HackerRank." + "\n" + "\n" + "Ex01 = Diagonal Difference          (10pts)" + "\n" + "Ex02 = Time Conversion              (15pts)" + "\n" + "Ex03 = Plus Minus                   (10pts)" + "\n" + "Ex04 = Min Max Sum                  (10pts)" + "\n" + "Ex05 = Encryption                   (30pts)" + "\n" + "Ex06 = Beautiful Days               (10pts)" + "\n" + "Ex07 = Circular Array Rotation      (20pts)" + "\n" + "Ex08 = Strong Password              (15pts)" + "\n" + "Ex09 = Missing Numbers              (45pts)" + "\n" + "Ex10 = Pangrams                     (20pts)" + "\n" + "\n" + "I shall aim to update this site every time I solve an interesting problem. This website was made using ASP.NET(empty), HTML, CSS and JavaScript." + "\n" + "\n" + "Full Portfolio = www.damienbactawar.co.uk" + "\n" + "My HR Profile = www.hackerrank.com/damien5215";

    //changeButtonColors();
    //document.getElementById("butt0").style.backgroundColor = "blue";
    //imgFadeIn();
}

function button1() {
    //document.getElementById("img1").src = "images/diagonal difference2.png";
    //document.getElementById("text1").innerText = "DIAGONAL DIFFERENCE PROBLEM" + "\n" + "\n" + "There are two inputs, a jagged matrix 'a[][]' and an integer 'n' denoting the number of rows/columns. Below shows the input HackerRank gives (n = 3)." + "\n" + "\n" + "[11,  02,  04]" + "\n" + "[04,  05,  06]" + "\n" + "[10,  08, -12]" + "\n" + "\n" + "[11,    ,    ] = (11) + (05) + (-12) = 4" + "\n" + "[  ,  05,    ]" + "\n" + "[  ,    , -12]" + "\n" + "\n" + "[  ,    ,  04] = (04) + (05) + ( 10) = 19" + "\n" + "[  ,  05,    ]" + "\n" + "[10,    ,    ]" + "\n" + "\n" + "Difference = |(4 - 19)| = 15" + "\n" + "\n" + "The inner loop of the nested for-loop iterates through the row and the outer loop iterates through the column." + "\n" + "\n" + "For this case x1 = 4, x2 = 19 and x3 = 15. ";
    //imgFadeIn();
}

function button2() {
    //document.getElementById("img1").src = "images/timeConversion.png";
    //document.getElementById("text1").innerText = "TIME CONVERSION PROBLEM" + "\n" + "\n" + "This problem involved converting an input string such as \"01:45:20PM\" to \"13:45:20\". The question also infomred the user that -" + "\n" + "\n" + "midnight = \"12:00:00AM\" = \"12:00:00\" " + "\n" + "noon     = \"12:00:00PM\" = \"00:00:00\"" + "\n" + "\n" + "Whenever the ninth character of the input string is 'A' then all that has to be changed is to remove the last two characters." + "\n" + "\n" + "Whenever the input's first two characters are '12' and the ninth is 'P' then the first two characters must be changed to '00'." + "\n" + "\n" + "Whenever the input's ninth character is 'P' and the frist two characters are NOT '12', then the hour-numbers must be increased by twelve. My code converts a character-to-string-to-integer. Once a value of 12 has been added the integer is converted back to a character." + "\n" + "\n" + "As you can see in the code I have used four if/else statements.";
    //imgFadeIn();
}

function button3() {
    //document.getElementById("img1").src = "images/PlusMinus.png";
    //document.getElementById("text1").innerText = "PLUS MINUS PROBLEM" + "\n" + "\n" + "The input is an array of integers (-4, 3, -9, 0, 4, 1) and the output is three lines, for this input it would be - " + "\n" + "\n" + "0.500000" + "\n" + "0.333333" + "\n" + "0.166667" + "\n" + "\n" + "These numbers are the number of positive, negative and zero numbers divided by the total number of numbers (3/6, 2/6 and 1/6)." + "\n" + "\n" + "POSITIVE =  3,  4,  1" + "\n" + "NEGATIVE = -4, -9 " + "\n" + "ZERO     =  0" + "\n" + "\n" + "The output had to be rounded to six decimal points.";
    //imgFadeIn();
}

function button4() {
    //document.getElementById("img1").src = "images/Mini-Max Sum.png";
    //document.getElementById("text1").innerText = "MINI-MAX SUM PROBLEM" + "\n" + "\n" + "The input is an array of integers (1, 2, 3, 4, 5) and the output is (10 14)." + "\n" + "\n" + "2 + 3 + 4 + 5 = 14 (max)" + "\n" + "1 + 3 + 4 + 5 = 13" + "\n" + "1 + 2 + 4 + 5 = 12" + "\n" + "1 + 2 + 3 + 5 = 11" + "\n" + "1 + 2 + 3 + 4 = 10 (min)" + "\n" + "\n" + "The first for-loop calculates the total value of the integer array (1 + 2 + 3 + 4 + 5 = 15)." + "\n" + "\n" + "The numbers in the array are summed, producing a new array (14, 13, 12, 11, 10)." + "\n" + "\n" + "The min and max values are then set to the first value of this array (14)." + "\n" + "\n" + "The final for-loop uses two if statements to determine the minimum and maxium value.";
    //imgFadeIn();
}

function button5() {
    //document.getElementById("img1").src = "images/encryption.png";
    //document.getElementById("text1").innerText = "ENCRYPTION PROBLEM" + "\n" + "\n" + "The input string \"haveaniceday\" has 12 characters and sqrt(12) = a number in between 3 and 4. 3 becomes the row number and 4 becomes the column number and the input can be arranged into a grid -" + "\n" + "\n" + "have" + "\n" + "anic" + "\n" + "eday" + "\n" + "\n" + "Then taking the characters veritcally the string becomes \"hae and via ecy\" and this is the output." + "\n" + "\n" + "The first part of the code determines the row and column numbers. If the number of characters is a square number the row and column numbers are equal." + "\n" + "\n" + "The nested for-loop: The inner loop constructs each word (hae), then loads it into a string array, resets some variables, then the outer loop constructs the next word (and)." + "\n" + "\n" + "The last loop concatenates the strings into one. The final string is added after the loop to avoid the extra space.";
    //imgFadeIn();
}

function button6() {
    //document.getElementById("img1").src = "images/BeautifulDays.png";
    //document.getElementById("text1").innerText = "BEAUTIFUL DAYS PROBLEM" + "\n" + "\n" + "The input = 3 integers i(20), j(23) and k(6)." + "\n" + "\n" + "|(20 - 02) / 6| = 3" + "\n" + "|(21 - 12) / 6| = 1.5" + "\n" + "|(22 - 22) / 6| = 0" + "\n" + "|(23 - 32) / 6| = 1.5" + "\n" + "\n" + "The code looks at a range of integers (20, 21, 22, 23), subtracts them from their reverse (02, 12, 22, 32), divides by an integer (k=6) and the absolute is taken. If the result is an integer then it is counted as a beauitful day." + "\n" + "\n" + "The first part of the code converts the integer (20) into a string (\"20\"), into a char-array({'2','0'}), reverses the array ({'0','2'}), into a string (\"02\") and then finally into an integer (02)." + "\n" + "\n" + "The next part of the code performs the calculation, counts the number of whole numbers (integers) and returns the result which is 2 in this case (3 and 0).";
    //imgFadeIn();
}

function button7() {
    //document.getElementById("img1").src = "images/circularArrayRotation.png";
    //document.getElementById("text1").innerText = "CIRCULAR ARRAY ROTATION PROBLEM" + "\n" + "\n" + "The input is an array {1,2,3,4,5}, it has to be shifted to the right twice (int k = 2) and we want the first three numbers (int [] m = {0,1,2}) in the rotated array. The output for this input are the numbers 4, 5 and 1." + "\n" + "\n" + "IF statement - If the rotation number is > input array size the rotation number is converted into a number which is <= the input array size. For this example, if k = 7, k would become 2 (7 % 5). This is equivalent because the circular array is periodic." + "\n" + "\n" + "Two empty arrays are created and the input array is split into two parts ({1,2,3} and {4,5})." + "\n" + "\n" + "The first two for-loops fill one of the empty arrays with the input rotated by k (2) and the array becomes {4,5,1,2,3}." + "\n" + "\n" + "The final for-loop fills the other empty array with the desired elements (int[] m = {0,1,2,}), so the array becomes {4,5,1} and this array is returned.";
    //imgFadeIn();
}

function button8() {
    //document.getElementById("img1").src = "images/StrongPassword.png";
    //document.getElementById("text1").innerText = "STRONG PASSWORD PROBLEM" + "\n" + "\n" + "A strong password meets 5 conditions; at least 6 characters, which conatains an uppercase character, lowercase character, number and special character (#,$,%, etc)." + "\n" + "\n" + "First the flag variables are intialised to 1 (upp, low, num, spe). The string is turned into a character array. The for-loop cycles through the characters. The 4 IF statements set the flag variables to 0 if the conditions are true." + "\n" + "\n" + "After the loop the flags are summed and if the input is less than 6 characters then the difference (6 - input.Length) is calculated." + "\n" + "\n" + "The number of extra characters that the input needs to reach 6 characters is compared to the number of conditions that are unsatisfied. The number that is the biggest is the number that is returned." + "\n" + "\n" + "In this case (\"A1234\"), the output returned is the value 2. The input is less than 6 characters so it needs 1 (6 - 5) more character however because it lacks a lower-case and a special character (2) the output is the integer 2.";
    //imgFadeIn();
}

function button9() {
    //document.getElementById("img1").src = "images/missingNumbers.png";
    //document.getElementById("text1").innerText = "MISSING NUMBERS PROBLEM" + "\n" + "\n" + "There are two lists of numbers and one of them is missing some numbers. This code determines which numbers are missing and returns them in ascending order." + "\n" + "\n" + "This code was challenging to develop because one of the inputs was a long (10k) list of numbers. This meant that a brute-force approach was not appropriate. Using the hint that the numbers had a range of about 200, I found a more efficient solution." + "\n" + "\n" + "First the range is calculated (brr.Max() - brr.Min()) and this is used to make 2 arrays." + "\n" + "\n" + "Inside the for-loop, the freqArrays are filled with all of the numbers (203 to 208, for this example)." + "\n" + "\n" + "Then if these values are present in brr and arr, the frequency is captured in the arrays V100 and V200." + "\n" + "\n" + "This information about the frequency of the numbers is then loaded into the freqArrays (freq1, freq2)." + "\n" + "\n" + "The freqArrays are compared, the missing numbers are determined and the zeros are removed.";
    //imgFadeIn();
}

function button10() {
    //document.getElementById("img1").src = "images/pangramCode.png";
    //document.getElementById("text1").innerText = "PANGRAMS PROBLEM" + "\n" + "\n" + "The input string (We promptly judged antique ivory buckles for the next prize) is a pangram because it uses every letter in the alphabet." + "\n" + "\n" + "Fisrt, the code formats the string by removing all of the whitespaces and lowering the case. Then an array of 26 bools (all initially set to false) is created to represent flags for the presence of each letter in the alphabet." + "\n" + "\n" + "The for-loop iterates through the characters in the input string. The first letter of the string is a 'w' so flagArray[22] is set to true because 'w' is the 23rd letter in the alphabet (the array starts from 0 rather than 1)." + "\n" + "\n" + "The if/else statement determines whether all of the flags have been set to true or not. If they have not then the input is NOT a pangram however if they have, then it is." + "\n" + "\n" + "For this particular input, all of the flags get set to true therefore it is a pangram.";
    //imgFadeIn();
}

//function changeButtonColors() {
    //document.getElementById("butt0").style.backgroundColor = "black";
    //document.getElementById("butt1").style.backgroundColor = "black";
    //document.getElementById("butt2").style.backgroundColor = "black";
//}

function imgFadeIn() {
    var x = document.getElementById("img1");
    x.style.display = "none";
}