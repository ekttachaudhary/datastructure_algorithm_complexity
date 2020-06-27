class HashTable {
    constructor(size){ // receive a size
        this.data = new Array(size); // Array will the hold the data, this.data = where data will live
    }
    _hash(key){ //private property not to be accessed. O(1)
        let hash = 0;  
        for (let i =0; i< key.length; i++){
            hash = (hash +key.charCodeAt(i)*i)%
            this.data.length;
        }
        return hash;
    }   
        
    set(key, value) {  //set is a hash function. O(1)
        let address = this._hash(key); //address is variable where our data is going to be stored created by the hash function
        if(!this.data[address]) { // to check the collision in hash table
            this.data[address] = [];//if no data simply add information in address
        }
        this.data[address].push([key, value]) //if data already exist, simply add information in the address into it
        return this.data;
    }
    get(key){ // get the hash function. O(1) in best case
        let address = this._hash(key);
        const currentBucket = this.data[address];
        if (currentBucket) {
            for(let i = 0; i< currentBucket.length; i++)
            {
                if(currentBucket[i] [0]== key){
                    return currentBucket [i] [1]
                }
            }

        }
        return undefined
    }
    keys(){
        const keysArray = [];
        for (let i=0; i<this.data.length; i++){
            if(this.data[i]){
                keysArray.push(this.data[i][0][0])
            }
        }
        return keysArray;

    }
} 


const myHashTable = new HashTable(50);
myHashTable.set('grapes', 1000);
myHashTable.set('oranges', 80);
myHashTable.set('apples', 20);
console.log(myHashTable.keys());