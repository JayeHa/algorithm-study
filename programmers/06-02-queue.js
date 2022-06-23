class Queue {
  constructor() {
    this.value = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(value) {
    this.value[this.rear++] = value;
  }

  dequeue() {
    const value = this.value[this.front];
    delete this.value[this.front++];
    return value;
  }

  peek() {
    return this.value[this.front];
  }

  size() {
    return this.rear - this.front;
  }
}

function solution(priorities, location) {
  const queue = new Queue();

  priorities.forEach((prioty, index) => {
    queue.enqueue({ prioty, index });
  });

  priorities.sort((a, b) => b - a);

  let order = 0;

  while (queue.size()) {
    if (priorities[order] > queue.peek().prioty) {
      queue.enqueue(queue.dequeue());
    } else {
      order++;
      const value = queue.dequeue();
      if (location === value.index) {
        break;
      }
    }
  }

  return order;
}

console.log(solution([2, 1, 3, 2], 2));

// 1번째 시도: class 선언이 안되는 줄 알고 solution함수 내에서 시도..
//     const queue = [];
//     let front = 0;
//     let rear = 0;

//     let order = 0;

//     const isTrue = priorities.some((p,i)=>{
//         if(!queue.length) {
//             // queue가 비어있으면 넣어준다.
//             queue[rear++] = {p, i}
//         } else if(p < queue[front].p){
//             // queue의 첫 번째 요소보다 작으면 queue에 넣는다
//             queue[rear++] = {p, i};
//         } else {
//             // queue의 첫 번째 요소보다 크면 인쇄한다. -> order 추가
//             order++;
//             if(location === i){
//                 return true;
//             }
//         }
//     })

//     if(!isTrue){
//         // priorities를 다 인쇄하고 나면 queue에 있는 것들을 차례대로 뺀다 + order 추가
//         while(rear - front){
//             // location과 i가 같으면 바로 종료
//             if(location === queue[front].i){
//                 break;
//             }

//             delete queue[front]
//             front++;
//             order++;
//         }
//     }

//     return order;
