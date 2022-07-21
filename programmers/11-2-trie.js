function makeTrie(words) {
  const root = {}; // 먼저 루트 노드를 설정할 변수를 만든다.

  // Trie를 구성하기 위한 루프를 돌린다.
  for (const word of words) {
    let current = root;

    // 단어의 글자를 하나씩 추출한 후
    for (const letter of word) {
      // 값을 넣는다. 리스트의 첫 번째 값은 학습된 단어가 몇 개인지를 카운팅하고 두 번째 값은 트리 구조로 이용할 노드 값으로 사용한다.

      if (!current[letter]) {
        current[letter] = [0, {}];
      }
      current[letter][0] = 1 + (current[letter][0] || 0); // 카운팅을 위해 1을 더해준다.
      current = current[letter][1]; // current는 letter에 해당되는 노드로 이동한다.
    }
  }
  return root; // 반환
}

function solution(words) {
  let answer = 0;
  const trie = makeTrie(words); // Trie 자료구조를 만들어준다.

  for (const word of words) {
    let count = 0;
    let current = trie; // 루트부터 시작
    for (const [index, letter] of [...word].entries()) {
      count += 1;
      if (current[letter][0] <= 1) {
        break;
      }
      current = current[letter][1];
    }
    answer += count;
  }

  return answer;
}

const result = solution(["go", "gone", "guild"]);
console.log(result); // 7

{
  // class Node {
  //   constructor(value = "") {
  //     this.value = value;
  //     this.children = new Map();
  //   }
  // }
  // class Trie {
  //   constructor() {
  //     this.root = new Node();
  //   }
  //   insert(string) {
  //     let currentNode = this.root;
  //     for (const char of string) {
  //       if (!currentNode.children.has(char)) {
  //         currentNode.children.set(char, new Node(currentNode.value + char));
  //       }
  //       currentNode = currentNode.children.get(char);
  //     }
  //   }
  //   has(string) {
  //     let currentNode = this.root;
  //     for (const char of string) {
  //       if (!currentNode.children.has(char)) {
  //         return false;
  //       }
  //       currentNode = currentNode.children.get(char);
  //     }
  //     return true;
  //   }
  // }
  // function solution(words) {
  //   const trie = new Trie();
  //   words.forEach((v) => {
  //     trie.insert(v);
  //   });
  //   // console.log(trie);
  //   console.log(trie.root);
  //   console.log("===");
  //   console.log(trie.root.children);
  //   console.log("===");
  //   console.log(trie.root.children.size);
  // }
}
