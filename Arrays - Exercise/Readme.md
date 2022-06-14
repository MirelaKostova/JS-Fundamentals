# Exercise: Arrays
Problems for exercise and homework for the "JS Fundamentals" Course @ SoftUni.

### :black_medium_small_square: Add and Subtract

Write a function, which changes the value of odd and even numbers in an array of numbers.

· If the number is even - add to its value its index position

· If the number is odd - subtract to its value its index position

On the first line print the newly modified array, on the second line print the sum of numbers from the original array, on the third line print the sum of numbers from the modified arra

| Input                |  Output              |
| -------------        | -------------        |
| [5, 15, 23, 56, 35]  | [ 5, 14, 21, 59, 31 ]| 
|                      |  134                 |
|                      | 130                  |

[- [ Arrays - Exercise/addAndSubtract.js](https://github.com/MirelaKostova/Programming-Fundamentals-with-JavaScript-SoftUni/blob/main/Arrays%20-%20Exercise/addAndSubtract.js)

### :black_medium_small_square: Common Elements

Write a function, which prints common elements in two string arrays. Print all matches on separate lines. 
Compare the first array with the second array.

[- [ Arrays - Exercise/commonElements.js](https://github.com/MirelaKostova/Programming-Fundamentals-with-JavaScript-SoftUni/blob/main/Arrays%20-%20Exercise/commonElements.js)

### :black_medium_small_square: Merge Arrays

Write a function, which receives two string arrays (with equal length) and merges them into a third array(each element separated by " - ")

· If the index of the element is even, add into the third array the sum of both elements at that index
· If the index of the element is odd, add the concatenation of both elements at that index

[- [ Arrays - Exercise/mergeArrays.js](https://github.com/MirelaKostova/Programming-Fundamentals-with-JavaScript-SoftUni/blob/main/Arrays%20-%20Exercise/mergeArrays.js)

### :black_medium_small_square: Array Rotation
Write a function that receives an array and the number of rotations you have to perform.

*Note: Depending on the number of rotations, the first element goes to the end. Print the resulting array elements separated by a single space.*

| Input                   |  Output              |
| -------------           | -------------        |
| [51, 47, 32, 61, 21], 2 | 32 61 21 51 47|      |
| [32, 21, 61, 1], 4      | 32 21 61 1           |

[- [ Arrays - Exercise/arrayRotation.js](https://github.com/MirelaKostova/Programming-Fundamentals-with-JavaScript-SoftUni/blob/main/Arrays%20-%20Exercise/arrayRotation.js)

### :black_medium_small_square: Max Number

Write a function to find all the top integers in an array. A top integer is an integer, which is bigger than all the elements to its right.
Print all top integers on the console, separated by a single space.

[- [ Arrays - Exercise/maxNumber.js](https://github.com/MirelaKostova/Programming-Fundamentals-with-JavaScript-SoftUni/blob/main/Arrays%20-%20Exercise/maxNumber.js)

### :black_medium_small_square: Equal Sums

Write a function that determines if there exists an element in the array of numbers such that the sum of the elements on its left is equal to the sum of the elements on its right.

If there are NO elements to the left/right, their sum is 0.

Print the index that satisfies the required condition or "no" if there is no such index.

[- [ Arrays - Exercise/equalSums.js](https://github.com/MirelaKostova/Programming-Fundamentals-with-JavaScript-SoftUni/blob/main/Arrays%20-%20Exercise/equalSums.js)


### :black_medium_small_square: Max Sequence of Equal Elements

Write a function that finds the longest sequence of equal elements in an array of numbers.

If several longest sequences exist, print the leftmost one.

[- [ Arrays - Exercise/maxSequenceOfEqualElement.js](https://github.com/MirelaKostova/Programming-Fundamentals-with-JavaScript-SoftUni/blob/main/Arrays%20-%20Exercise/maxSequenceOfEqualElement.js)

### :black_medium_small_square: Magic Sum

Write a function, which prints all unique pairs in an array of integers whose sum is equal to a given number.

[- [ Arrays - Exercise/magicSum.js](https://github.com/MirelaKostova/Programming-Fundamentals-with-JavaScript-SoftUni/blob/main/Arrays%20-%20Exercise/magicSum.js)

### :black_medium_small_square: Dungeonest Dark * 

You have initial health 100 and initial coins 0. You will be given a string, representing the dungeon's rooms. Each room is separated with '|' (vertical bar): "room1|room2|room3…"

Each room contains - an item or a monster; and a number. They are separated by a single space.

("item/monster number").

· If the first part is "potion":

o You are healed with the number in the second part. However, your health cannot exceed your initial health (100).

o Print: `You healed for {healing-number} hp.`

o After that, print your current health: `Current health: {number} hp.`

· If the first part is "chest":

o You have found some coins, the number in the second part.

o Print: `You found {coins} coins.`

· In any other case, you are facing a monster, you are going to fight.

The second part of the room contains the attack of the monster, and the first the monster's name. You should remove the monster's attack from your health.

o If you are not dead (health > 0) you have slain the monster, and you should print:

`You slayed {monster-name}.`

o If you have died, print: `You died! Killed by {monster-name}.` and your quest is over.

Print the best room you`ve to manage to reach: `Best room: {room}`.

· If you managed to go through all the rooms in the dungeon, print on the next three lines:

"You've made it!"

"Coins: {coins}"

"Health: {health}"

Input

You receive an array with one element- string, representing the dungeon's rooms, separated with '|' (vertical bar): ["room1|room2|room3…"].

Output

Print the corresponding messages, described above.

### :black_medium_small_square: Ladybugs * 

You are given a field size and the indexes of ladybugs inside the field. A ladybug changes its position either to its left or to its right by a given fly length. A command to a ladybug looks like this: "0 right 1". This means that the little insect placed on index 0 should fly one index to its right. If the ladybug lands on a fellow ladybug, it continues to fly in the same direction by the same fly length. If the ladybug flies out of the field, it is gone.

*For example, imagine you are given a field with size 3 and ladybugs on indexes 0 and 1. If the ladybug on index 0 needs to fly to its right by the length of 1 (0 right 1) it will attempt to land on index 1 but as there is another ladybug there it will continue further to the right by an additional length of 1, landing on index 2. After that, if the same

ladybug needs to fly to its right by the length of 1 (2 right 1), it will land somewhere outside of the field, so it flies away:

If you are given a ladybug index that does not have a ladybug there, nothing happens. If you are given a ladybug index that is outside the field, nothing happens.

Your job is to create the program, simulating the ladybugs flying around doing nothing. In the end, print all cells in the field separated by blank spaces. For each cell that has a ladybug on it print '1' and for each empty cell print '0'. For the example above, the output should be '0 1 0'.

Input

· You will receive an array of strings and the first element is an integer – the size of the field

· The second element is a string containing the initial indexes of all ladybugs separated by a blank space. The given indexes may or may not be inside the field range

· The next elements in the array are commands in the format: "{ladybug index} {direction} {fly length}"

Output

· Print the all cells within the field in format: `{cell} {cell} … {cell}`

o If a cell has a ladybug in it, print '1'

o If a cell is empty, print '0'


