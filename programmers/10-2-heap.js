// π μ λ΅
class MaxHeap {
  constructor() {
    this.heap = [null];
  }

  push(value) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);

    while (parentIndex !== 0 && this.heap[parentIndex] < value) {
      const temp = this.heap[parentIndex];
      this.heap[parentIndex] = value;
      this.heap[currentIndex] = temp;

      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  pop() {
    if (this.heap.length === 2) return this.heap.pop(); // λ£¨νΈ μ μ λ§ λ¨μ κ²½μ°

    const returnValue = this.heap[1];
    this.heap[1] = this.heap.pop();

    let currentIndex = 1;
    let leftIndex = 2;
    let rightIndex = 3;
    while (
      this.heap[currentIndex] < this.heap[leftIndex] ||
      this.heap[currentIndex] < this.heap[rightIndex]
    ) {
      if (this.heap[leftIndex] < this.heap[rightIndex]) {
        const temp = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[rightIndex];
        this.heap[rightIndex] = temp;
        currentIndex = rightIndex;
      } else {
        const temp = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[leftIndex];
        this.heap[leftIndex] = temp;
        currentIndex = leftIndex;
      }
      leftIndex = currentIndex * 2;
      rightIndex = currentIndex * 2 + 1;
    }

    return returnValue;
  }
}
function solution(no, works) {
  // λͺ¨λ  μμμ ν©λ³΄λ€ noκ° ν¬λ©΄ λ°°μ λΉμ©μ λΌ νμκ° μλ€.
  if (works.reduce((a, b) => a + b) <= no) {
    return 0;
  }

  // max heap κ΅¬μ±
  const heap = new MaxHeap();
  for (const work of works) {
    heap.push(work);
  }

  // noλ§νΌ λ£¨ν λλ©΄μ κ°μ₯ ν° κ°μ λΉΌμ μ²λ¦¬ ν λ€μ push
  for (let i = 0; i < no; i += 1) {
    heap.push(heap.pop() - 1);
  }

  // λ¨μ μμμ μ κ³±ν κ°λ€μ ν©μ κ΅¬ν ν λ°ν
  return heap.heap.reduce((a, b) => a + b * b);
}

// π λ΄ λ΅λ³
// class MaxHeap {
//   constructor() {
//     this.heap = [null];
//   }

//   push(value) {
//     this.heap.push(value);
//     let currentIndex = this.heap.length - 1;
//     let parentIndex = Math.floor(currentIndex / 2);

//     while (parentIndex !== 0 && this.heap[parentIndex] < value) {
//       const temp = this.heap[parentIndex];
//       this.heap[parentIndex] = value;
//       this.heap[currentIndex] = temp;

//       currentIndex = parentIndex;
//       parentIndex = Math.floor(currentIndex / 2);
//     }
//   }

//   pop() {
//     //π
//     if (this.heap.length === 2) return this.heap.pop(); // λ£¨νΈ μ μ λ§ λ¨μ κ²½μ°

//     const returnValue = this.heap[1];
//     this.heap[1] = this.heap.pop();

//     let currentIndex = 1;
//     let leftIndex = 2;
//     let rightIndex = 3;

//     while (
//       this.heap[currentIndex] < this.heap[leftIndex] ||
//       this.heap[currentIndex] < this.heap[rightIndex]
//     ) {
//       if (this.heap[leftIndex] < this.heap[rightIndex]) {
//         const temp = this.heap[currentIndex];
//         this.heap[currentIndex] = this.heap[rightIndex];
//         this.heap[rightIndex] = temp;
//         currentIndex = rightIndex;
//       } else {
//         const temp = this.heap[currentIndex];
//         this.heap[currentIndex] = this.heap[leftIndex];
//         this.heap[leftIndex] = temp;
//         currentIndex = leftIndex;
//       }
//       leftIndex = currentIndex * 2;
//       rightIndex = currentIndex * 2 + 1;
//     }

//     return returnValue;
//   }
// }

// function solution(no, works) {
//   // π λͺ¨λ  μμμ ν©λ³΄λ€ noκ° ν¬λ©΄ λ°°μ λΉμ©μ λΌ νμκ° μλ€.
//   if (works.reduce((a, b) => a + b) <= no) {
//     return 0;
//   }

//   const heap = new MaxHeap();

//   for (work of works) {
//     heap.push(work);
//   }

//   for (let i = 0; i < no; i++) {
//     let tempWork = heap.pop();
//     tempWork > 0 && heap.push(--tempWork);
//   }

//   return heap.heap //
//     .map((v) => v * v)
//     .reduce((prev, curr) => prev + curr);
// }

const result = solution(4, [4, 3, 2]);
console.log(result);
