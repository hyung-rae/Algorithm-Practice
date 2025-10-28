/**
 *  programmerts
 *  level 2
 *
 *  Heap 을 직접 구현해서 풀었음
 *
 *  pop() 부분에서 if(this.heap.length === 1) return this.heap.pop() 처리를 안하고
 *  const rootNode = this.heap[0]
 *  this.heap[0] = this.heap.pop()
 *  로 작성해서
 *
 *  "모든 음식의 스코빌 지수를 K 이상으로 만들 수 없는 경우에는 -1을 return 합니다."
 *  여기서 실패했음
 */

function solution(scoville, K) {
  let count = 0;
  const mix = (num1, num2) => {
    count++;
    return num1 + num2 * 2;
  };

  const scoville_heap = new Scoville();
  scoville.forEach((el) => scoville_heap.push(el));

  while (true) {
    const min_1 = scoville_heap.pop();
    if (min_1 >= K) break;

    const min_2 = scoville_heap.pop();
    if (min_2 === null) return -1;

    const mix_scoville = mix(min_1, min_2);
    scoville_heap.push(mix_scoville);
  }

  return count;
}

class Scoville {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  pop() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const rootNode = this.heap[0];
    this.heap[0] = this.heap.pop();

    if (this.heap.length >= 2) {
      this.bubbleDown();
    }

    return rootNode;
  }

  bubbleDown() {
    let idx = 0;

    while (true) {
      let smallestIdx = idx;
      const leftChild = idx * 2 + 1;
      const rightChild = idx * 2 + 2;

      if (
        leftChild < this.heap.length &&
        this.heap[leftChild] < this.heap[smallestIdx]
      ) {
        smallestIdx = leftChild;
      }

      if (
        rightChild < this.heap.length &&
        this.heap[rightChild] < this.heap[smallestIdx]
      ) {
        smallestIdx = rightChild;
      }

      if (idx === smallestIdx) break;
      [this.heap[idx], this.heap[smallestIdx]] = [
        this.heap[smallestIdx],
        this.heap[idx],
      ];
      idx = smallestIdx;
    }
  }

  push(val) {
    this.heap.push(val);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.heap.length - 1;

    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);

      if (this.heap[parentIdx] <= this.heap[idx]) {
        break;
      }

      [this.heap[idx], this.heap[parentIdx]] = [
        this.heap[parentIdx],
        this.heap[idx],
      ];

      idx = parentIdx;
    }
  }
}
