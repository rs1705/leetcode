

var topKFrequent = function (nums, k) {
    //APPROACH ONE-> BY CREATING FREQUENCY MAP OF NUMBERS AND SORTING THEM IN AN ARRAY BY THEIR FREQUENCY AND RETURNING THE MOST K FREQUENT NUMBERS
    //     const fMap= new Map()
    //     for(let n of nums){
    //         if(!fMap.has(n)){
    //             fMap.set(n,0)
    //         }
    //         fMap.set(n,fMap.get(n)+1)
    //     }
    //     if(k>fMap.size){
    //         return;
    //     }

    //     let arr=[];
    //     for(let [key,value] of fMap){
    //         arr.push([key,value])
    //     }

    //    arr= arr.sort((a,b)=>b[1]-a[1])
    //    let result=[]
    //    for(let i=0;i<k;i++){
    //        result.push(arr[i][0])
    //    }
    //    return result;

    //APPROACH TWO-> USING MAX HEAP
class MaxHeap {
    constructor() {
        this.heap = [];
    }

    insert(value) {
        this.heap.push(value);
        this.bubbleUp();
    }

    bubbleUp() {
        let currentIndex = this.heap.length - 1;
        const el = this.heap;
        while (currentIndex > 0) {
            let parentIndex = Math.floor((currentIndex - 1) / 2);
            if (el[currentIndex][1] <= el[parentIndex][1]) {
                break;
            }

            const temp = el[currentIndex];
            el[currentIndex] = el[parentIndex];
            el[parentIndex] = temp;

            currentIndex = parentIndex;
        }
    }
    bubbleDown() {
        let currentIndex = 0;
        const length = this.heap.length;
        const el = this.heap;
        while (currentIndex * 2 + 1 < length) {
            let leftChildIndex = currentIndex * 2 + 1;
            let rightChildIndex = currentIndex * 2 + 2;
            let largeChild;

            if (rightChildIndex >= length) {
                largeChild = leftChildIndex;
            } else {
                if (el[leftChildIndex][1] > el[rightChildIndex][1]) {
                    largeChild = leftChildIndex;
                } else {
                    largeChild = rightChildIndex;
                }
            }

            if (el[currentIndex][1] >= el[largeChild][1]) {
                break;
            }
            const temp = el[largeChild];
            el[largeChild] = el[currentIndex];
            el[currentIndex] = temp;
            currentIndex = largeChild;
        }
    }
    extractMax() {
        if (this.heap.length === 0) return null;
        const max = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0){
         this.heap[0] = end;
        this.bubbleDown();
        }
        return max;
    }

    peek() {
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }
}
    const fMap = new Map();
    for (let n of nums) {
        if (!fMap.has(n)) {
            fMap.set(n, 0);
        }
        fMap.set(n, fMap.get(n) + 1);
    }
    if (k > fMap.size) {
        return;
    }

    let h = new MaxHeap();
    for (let [key, value] of fMap) {
        h.insert([key, value]);
    }
    let result = [];
    for (let i = 0; i < k; i++) {
        result.push(h.extractMax()[0]);
    }

    return result;
};

