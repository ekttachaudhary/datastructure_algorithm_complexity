// Merge two arrays into one
// Don't run this code 
// in `const` once variable is assigned it cannot be modified
// in `let` variables are modifiable
function mergeSortedArray(array1, array2){
    const mergedArray = [];
    let array1Item = array1[0]; //index at zero
    let array2Item = array2[0];
    let i = 1;
    let j = 1;


// Checking the input
    if (array1.length = 0){
        return array2;
    }
    if  (array2.length = 0){
        return array1;
    }
    while(array1 || array2){ // loop through while the conditions are met
        console.log(array1, array2);
        if ( !array2Item || array1Item < array2Item) {
            mergedArray.push(array1Item);
            array1Item = array1[i];
            i++;
        }
        else{
            mergedArray.push(array2Item);
            array2Item = array2[j];
            j++;
        }
    }
    return mergedArray;
} 
mergeSortedArray([0,3,4,31], [4,6,30]);