class DoublyLinkedList{
    constructor(value){
        this.head = {
            value: value,
            next: null,
            prev: null

        }
        this.tail = this.head;
        this.length = 1;
    }
    append(value){
        const newNode ={
            value: value,
            next: null,
            pre: null

        };
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;

    }
    prepend(value){
        const newNode = {
            value: value,
            next: null,
            prev: null
        };
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
        return this;

    }
    printList(){
        const array = [];
        let currentNode = this.head;
        while(currentNode !== null){
            array.push(currentNode.value);
            currentNode= currentNode.next;
        }
        return array;

    }

    insert(index, value){
        //Check the paramerers
        if(index >= this.length){  // if the index is greater than the length of list then append it
            return this.append(value);

        }
        const newNode = {
            value: value,
            next: null,
            prev: null
        };

        const leader = this.traverseToIndex(index-1)
        const follower = leader.next;
        leader.next = newNode;
        newNode.prev= leader;
        newNode.next = follower;
        follower.prev = newNode;
        this.length++;
        return  this.printList()


        
    }
    traverseToIndex(index){ 
        let counter = 0;
        let currentNode = this.head;
        while(counter !== index){ // loop until the counter is not equal to index where we want to insert
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode; 
    
    }
    remove(index){
        //check params
        const leader = this.traverseToIndex(index-1);
        const unWantedNode = leader.next;
        leader.next = unWantedNode.next;
        this.length--;
        return this.printList();
    }

    reverse(){
        if(!this.head.next){
            return this.head;
        }
        let first = this.head;
        let tail = this.head;
        
        let second = first.next;
        while(second){
            const temp = second.next;
            second.next = first;
            first = second;
            second= temp;
        }
        this.head.next = null;
        this.head = first;
        return this

    }

}
const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2,99);
myLinkedList.printList();
console.log(myLinkedList.printList())
//myLinkedList.remove(2);
myLinkedList.reverse()
console.log(myLinkedList.printList())