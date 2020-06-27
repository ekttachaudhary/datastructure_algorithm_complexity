// first recurring character
function firstRecurringCharacter(input){
    for (let i = 0; i< input.length;i++){
        for(j = i+1; j<input.length;j++){
            if (input[i]== input[j]){
                return input[i];
            }

        }
    }
    return undefined;
}
// complexity of above is O(n^2)
console.log(firstRecurringCharacter([2,5,1,2,3,5,1,2,4]));

// using hash map(object) and 
//loop through all the items and add them to map and
//simultaneouly check if the property (item) already exists  
function firstRecurringCharacter2(input){
    let map = {};
    for (let i = 0; i<input.length;i++){
        if(map[input[i]]){
            return input[i];
        }
        else{
            map[input[i]]= true; // add to the map
        }
    }
}

console.log(firstRecurringCharacter2([2,5,1,2,3,5,1,2,4]));

