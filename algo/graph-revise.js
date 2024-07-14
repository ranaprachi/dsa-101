class Graph {
    constructor() {
        this.graph = new Map();
    }
    addVertex(vertex) {
        if (this.graph.has(vertex)) return null; // msg
        this.graph.set(vertex, []);
    }
    addEdge(vertexA, vertexB) {
        if (!this.graph.has(vertexA) || !this.graph.has(vertexB)) return null;

        let aNeightbours = this.graph.get(vertexA);
        aNeightbours.push(vertexB);
        this.graph.set(vertexA, aNeightbours);

        let bNeightbours = this.graph.get(vertexB);
        bNeightbours.push(vertexA);
        this.graph.set(vertexB, bNeightbours);

    }
    removeVertex() {}
    removeEdge() {}

    bfs(vertex) {
        if (!vertex) return [];
        let visited = new Set();
        let queue = [];
        let result = [];

        visited.add(vertex);
        queue.push(vertex);
        while(queue.length) {
            let currVertex = queue.shift();
            result.push(currVertex);
            const neighbours = this.graph.get(currVertex);
            console.log(neighbours);
            for (let neighbour of neighbours) {
                if (!visited.has(neighbour)) {
                    queue.push(neighbour);
                    visited.add(neighbour);
                }
            }
        }
        return result;
    }
    dfs(vertex) {
        if (!vertex) return null;
        let visited = new Set();
        let result = [];
       
        const dfsTrverse = (currVertex) => {
            console.log('dfs curr vertex', currVertex)
            visited.add(currVertex);
            result.push(currVertex);
            const neighbours = this.graph.get(currVertex);
            console.log('---->>>', neighbours);
            for (let neighbour of neighbours) {
                if (!visited.has(neighbour)) {
                    // visited.add(currVertex);
                    // result.push(currVertex);
                    dfsTrverse(neighbour);
                }
            }
        }
        dfsTrverse(vertex);
        return result;
    }
}

const myGraph = new Graph();
myGraph.addVertex(1);
myGraph.addVertex(2);
myGraph.addVertex(3);
myGraph.addVertex(4);
myGraph.addVertex(5);
myGraph.addVertex(6);
myGraph.addVertex(7);
myGraph.addEdge(1, 2);
myGraph.addEdge(2, 3);
myGraph.addEdge(3, 4);
myGraph.addEdge(3, 4);
myGraph.addEdge(2, 4);
myGraph.addEdge(2, 5);
myGraph.addEdge(4, 6);
myGraph.addEdge(4, 7);
console.log('BFS ::', myGraph.bfs(1));
console.log('DFS :::', myGraph.dfs(1));


// const bfs = (startVertex) => {
//     if (!startVertex) return [];
//     let result = [];
//     let queue = [];
//     let visited = new Set();

//     queue.push(startVertex);
//     visited.add(startVertex);

//     while(queue.length) {
//         const currVertex = queue.shift();
//         result.push(currVertex);
//         const neighbours = this.graph.get(currVertex);
//         for (let neighbour of neighbours) {
//             if (!visited.has(neighbour)) {
//                 queue.push(neighbour);
//                 visited.add(neighbour);
//             }
//         }
//     }
//     return result;
// }

// const dfs = (startVertex) => {
//     if (!startVertex) return [];
//     let result = [];
//     let visited = new Set();

//     const traverse = (currVertex) => {
//         visited.add(currVertex);
//         result.push(currVertex);

//         const neighbours = this.graph.get(currVertex);
//         for (let neighbour of neighbours) {
//             if (!visited.has(neighbour)) {
//                 traverse(neighbour);
//             }
//         }
//     }
//     traverse(startVertex);
//     return result;
// }