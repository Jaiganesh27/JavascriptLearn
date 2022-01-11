let reg1 = /city/i;
let reg2 = /certain/g;
let reg3 = /village/gi;
let reg4 = /to/gi;
let text = `Mike and Morris lived in the same village. While Morris owned the largest jewelry
 shop in the village, Mike was a poor farmer. Both had large families with many sons, 
 daughters-in-law and grandchildren. One fine day, Mike, tired of not being able to feed his family, decided to leave the village and move to the 
city where he City was certain to earn enough to feedD everyone. Along with his 
family, he left the village for the city. At night, they stopped under a large tree. 
There was a stream running nearby where they could freshen up themselves. 
He told his sons to clear the area below the tree, he told his wife to fetch water and he instructed his 
daughters-in-law to make up the fire and started cutting wood from the tree himself. 
They didn’t know that in the branches of the tree, there was a thief hiding.
 He watched as Mike’s family worked together and also noticed that they had nothing to cook. 
 Mike’s wife also thought the same and asked her husband ”`

var result = text.match(reg3);
console.log(result);
var result1 = text.replace(reg4,"ot");
console.log(result1);
/expression/
// flag
// i - in case sensitive seach
// g - global search 
// m - multiline

// Character classes
// .	any character except newline
// \w\d\s	word, digit, whitespace
// \W\D\S	not word, digit, whitespace
// [abc]	any of a, b, or c
// [^abc]	not a, b, or c
// [a-g]	character between a & g

// Anchors
// ^abc$	start / end of the string
// \b\B	word, not-word boundary

// Escaped characters
// \.\*\\	escaped special characters
// \t\n\r	tab, linefeed, carriage return

// (\w)a\1

// (?=ab) p lookahead    jaiab
// (?!ab) n lookahead
// (?<=ab) p lookbehind
// (?<!ab) n lookbehind

// group
//  ()capturegrop
// ((w)a\1)numeric reference