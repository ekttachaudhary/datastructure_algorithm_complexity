const strings = ['a', 'b', 'c', 'd'];
//push
strings.push('e'); //O(1)

//pop
strings.pop(); // O(1)

//unshift at the beggining of array
strings.unshift('x'); //O(n)

//splice in the middle of array
strings.splice(2, 0, 'ekta'); //O(n)

console.log(strings)
 
