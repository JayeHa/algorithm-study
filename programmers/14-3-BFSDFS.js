// 핵심 키워드는 '노드', '간선', '최단경로'
// 최단 경로가 제일 큰 경우의 집합을 구하는 문제
const n = 6;
const vertex = [
  [3, 6],
  [4, 3],
  [3, 2],
  [1, 3],
  [1, 2],
  [2, 4],
  [5, 2],
];

// 📌 Queue 활용
{
  class Queue {
    constructor() {
      this.queue = [];
      this.front = 0;
      this.rear = 0;
    }

    enqueue(value) {
      this.queue[this.rear++] = value;
    }

    dequeue() {
      const value = this.queue[this.front];
      delete this.queue[this.front];
      this.front += 1;
      return value;
    }

    isEmpty() {
      return this.rear === this.front;
    }
  }

  function solution(n, edge) {
    // 인접리스트로 그래프를 만듦, 1번부터 시작하기 위해 n+1, 인접리스트니까 초기값으로 빈 배열 넣어줌
    const graph = Array.from(Array(n + 1), () => []);

    for (const [src, dest] of edge) {
      graph[src].push(dest);
      graph[dest].push(src);
    }

    // 각 정점의 거리를 기록할 수 있도록 배열을 만듦
    const distance = Array(n + 1).fill(0);
    distance[1] = 1;

    // BFS
    const queue = new Queue();
    queue.enqueue(1);
    while (!queue.isEmpty()) {
      const src = queue.dequeue();
      for (const dest of graph[src]) {
        if (distance[dest] === 0) {
          queue.enqueue(dest);
          distance[dest] = distance[src] + 1;
        }
      }
    }

    const max = Math.max(...distance);
    return distance.filter((item) => item === max).length;
  }

  console.log(solution(n, vertex)); // 3
}

// 📌 shift 활용
{
  function solution(n, edge) {
    // 인접리스트로 그래프를 만듦, 1번부터 시작하기 위해 n+1, 인접리스트니까 초기값으로 빈 배열 넣어줌
    const graph = Array.from(Array(n + 1), () => []);

    for (const [src, dest] of edge) {
      graph[src].push(dest);
      graph[dest].push(src);
    }

    // 각 정점의 거리를 기록할 수 있도록 배열을 만듦
    const distance = Array(n + 1).fill(0);
    distance[1] = 1;

    // BFS
    const queue = [1];
    while (queue.length > 0) {
      const src = queue.shift(); // shift는 O(n)이지만 요소가 적을 경우에는 자바스크립트 엔진에서 최적화를 해줘요.
      for (const dest of graph[src]) {
        if (distance[dest] === 0) {
          queue.push(dest);
          distance[dest] = distance[src] + 1;
        }
      }
    }

    const max = Math.max(...distance);
    return distance.filter((item) => item === max).length;
  }

  console.log(solution(n, vertex)); // 3
}
