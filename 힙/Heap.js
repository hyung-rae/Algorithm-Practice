/**
 *  루트 노드가 최소값을 갖는 Heap 직접 구현
 */
class MinHeap {
  constructor() {
    this.heap = []
  }

  print() {
    console.log(this.heap)
  }

  size() {
    return this.heap.length
  }

  isEmpty() {
    return this.heap.length === 0
  }

  peek() {
    return this.heap[0]
  }

  swap(idx1, idx2) {
    const temp = this.heap[idx1]
    this.heap[idx1] = this.heap[idx2]
    this.heap[idx2] = temp
    return this.heap
  }

  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2)
  }

  getLeftChild(parentIndex) {
    return 2 * parentIndex + 1
  }

  getRightChild(parentIndex) {
    return 2 * parentIndex + 2
  }

  push(value) {
    this.heap.push(value)
    this.bubbleUp()

    return this.heap
  }

  // last node 부터 위로 올라가면서 정렬
  bubbleUp() {
    let idx = this.heap.length - 1

    while (idx > 0) {
      const parentIndex = this.getParentIndex(idx)

      if (this.heap[idx] < this.heap[parentIndex]) {
        this.swap(idx, parentIndex)
        idx = parentIndex
      } else {
        break
      }
    }
  }

  pop() {
    if (this.isEmpty()) {
      return null
    }

    const root = this.heap[0]
    const last = this.heap.pop()

    if (this.size() > 0) {
      this.heap[0] = last
      this.bubbleDown()
    }

    return root
  }

  // 루트 노드부터 아래로 내려가면서 정렬
  bubbleDown() {
    let idx = 0

    while (true) {
      let smallest = idx
      const left = this.getLeftChild(idx)
      const right = this.getRightChild(idx)

      if (left < this.size() && this.heap[left] < this.heap[smallest]) {
        smallest = left
      }

      if (right < this.size() && this.heap[right] < this.heap[smallest]) {
        smallest = right
      }

      if (smallest === idx) {
        break
      }

      this.swap(smallest, idx)
      idx = smallest
    }
  }
}

export default MinHeap
