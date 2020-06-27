class MyArray{
    constructor(){
        this.length = 0;
        this.data = {};
    }
    get(index){ //access the data
        return this.data[index]
    }
    push(item){
        this.data[this.length] = item
        this.length++;
        return this.length;
    }
    pop(){ // no parameters. does not receive anything
        const lastItem = this.data[this.length-1]; // creating a variable lastItem which grabs the last item
        delete this.data[this.length-1];
        this.length--;
        return lastItem;
    }
    delete(index){
        const item = this.data[index];
        this.shiftItems(index); //shifting function
    }
    shiftItems(index) {
        for(let i = index; i<this.length-1; i++){
        this.data[i]= this.data[i+1];    // for each data shift the index to left

        }
        delete this.data[this.length-1] //deleating the last item in the index
        this.length--
    }
    
}

const newArray = new MyArray(); //creating a copy of array
newArray.push('Hi I am preparing for internship')
newArray.push("I am scared but i can do it. Believe in yourself")
newArray.push("Fuck off")
console.log(newArray);
newArray.pop();
console.log(newArray);
newArray.push("I am sad")
console.log(newArray)
newArray.delete(2)
console.log(newArray)