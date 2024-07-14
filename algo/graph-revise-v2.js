class Graph {
    constructor() {
        this.graph = new Map();
    }
    addVertex(vertex) {
        if (this.graph.has(vertex)) {
            return null;
        }
        this.graph.set(vertex, []);
    }
    addEdge(vertexA, vertexB) {
        if (!this.graph.has(vertexA) || !this.graph.has(vertexB)) {
            return null;
        }
        const neighboursA = this.graph.get(vertexA);
        neighboursA.push(vertexB);
        this.graph.set(vertexA, neighboursA);

        const neighboursB = this.graph.get(vertexB);
        neighboursB.push(vertexA);
        this.graph.set(vertexB, neighboursB);
    }
    removeVertex(vertex) {
        const neighbours = this.graph.get(vertex);
        neighbours.forEach(element => {
            let eleNeighbours = this.graph.get(element);
            this.graph.set(element, eleNeighbours.filter((ele) => ele !== vertex));
        });
        this.graph.delete(vertex);
    }
    bfs(start) {
        let queue = [];
        let visited = new Set();
        let result = [];

        const bfsTraverse = () => {
            while (queue.length) {
                const currVertex = queue.shift();
                result.push(currVertex);
                const neighbours = this.graph.get(currVertex);
                neighbours.forEach((neighbour) => {
                    if (!visited.has(neighbour)) {
                        queue.push(neighbour);
                        visited.add(neighbour);
                    }
                });
            }
        }
        queue.push(start);
        visited.add(start);
        bfsTraverse();
        return result;
    }
    dfs(start) {
        let visited = new Set();
        let result = [];

        const dfsTraverse = (currVertex) => {
            visited.add(currVertex);
            result.push(currVertex);
            const neighbours = this.graph.get(currVertex);
            neighbours.forEach((neighbour) => {
                if (!visited.has(neighbour)) {
                    dfsTraverse(neighbour);
                }
            })

        }
        dfsTraverse(start);
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
myGraph.addEdge(2, 5);
myGraph.addEdge(2, 3);
myGraph.addEdge(5, 4);
myGraph.addEdge(5, 6);
myGraph.addEdge(6, 4);
myGraph.addEdge(4, 3);
myGraph.addEdge(4, 7);
console.log('BFS ::::', myGraph.bfs(1));
console.log('DFS ::::', myGraph.dfs(1));
myGraph.removeVertex(2);
console.log('BFS ::::', myGraph.bfs(1));
console.log('DFS ::::', myGraph.dfs(1));
