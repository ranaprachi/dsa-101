// Graph
// - different nodes are connected to eah other and there are no implicit parent-child connection between them
// - Usecases : Geolocalization, social networks, recommendations system
// - Graphs can be categorised as :
//     - undirected and directed Graphs
//     - weighted and unweighted graphs (Heavily used for geolocation system)

class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }

    // Add a new vertex to the graph
    addVertex(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
        }
    }

    // Add an undirected edge between two vertices
    addEdge(vertex1, vertex2) {
        if (this.adjacencyList.has(vertex1) && this.adjacencyList.has(vertex2)) {
            this.adjacencyList.get(vertex1).push(vertex2);
            this.adjacencyList.get(vertex2).push(vertex1);
        }
    }

    // Breadth-First Search (BFS) algorithm
    bfs(startVertex) {
        const visited = new Set(); // To keep track of visited vertices
        const queue = []; // Queue for BFS traversal
        const result = []; // Result array to store the BFS traversal order

        // Add the start vertex to the queue and mark it as visited
        queue.push(startVertex);
        visited.add(startVertex);

        // Continue BFS until the queue is empty
        while (queue.length > 0) {
            const currentVertex = queue.shift(); // Dequeue a vertex from the queue
            result.push(currentVertex); // Add the dequeued vertex to the result

            // Visit all adjacent vertices of the current vertex
            const neighbors = this.adjacencyList.get(currentVertex);
            for (const neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor); // Mark the neighbor as visited
                    queue.push(neighbor); // Enqueue the neighbor
                }
            }
        }

        return result;
    }

        // Depth-First Search (DFS) algorithm
        dfs(startVertex) {
            const visited = new Set(); // To keep track of visited vertices
            const result = []; // Result array to store the DFS traversal order
    
            // Helper function for DFS traversal
            const dfsHelper = (vertex) => {
                visited.add(vertex); // Mark the current vertex as visited
                result.push(vertex); // Add the current vertex to the result
    
                // Visit all adjacent vertices of the current vertex
                const neighbors = this.adjacencyList.get(vertex);
                for (const neighbor of neighbors) {
                    if (!visited.has(neighbor)) {
                        dfsHelper(neighbor); // Recursively visit the neighbor
                    }
                }
            };
    
            // Start DFS traversal from the given start vertex
            dfsHelper(startVertex);
    
            return result;
        }
// Remove an undirected edge between two vertices
removeEdge(vertex1, vertex2) {
    if (this.adjacencyList.has(vertex1) && this.adjacencyList.has(vertex2)) {
        this.adjacencyList.set(
            vertex1,
            this.adjacencyList.get(vertex1).filter(v => v !== vertex2)
        );
        this.adjacencyList.set(
            vertex2,
            this.adjacencyList.get(vertex2).filter(v => v !== vertex1)
        );
    } else {
        console.log("One or both vertices do not exist in the graph.");
    }
}

// Remove a vertex and all its edges from the graph
removeVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
        console.log("Vertex does not exist in the graph.");
        return;
    }

    const neighbors = this.adjacencyList.get(vertex);
    for (const neighbor of neighbors) {
        this.removeEdge(vertex, neighbor);
    }

    this.adjacencyList.delete(vertex);
}

}

// Example usage:
const graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('x');
graph.addVertex('y');
graph.addVertex('z');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('x', 'E');
graph.addEdge('x', 'B');
graph.addEdge('x', 'y');
graph.addEdge('z', 'E');

console.log("BFS traversal starting from vertex 'A':", graph.bfs('A'));
console.log("DFS traversal starting from vertex 'A':", graph.dfs('A'));

graph.removeEdge('B', 'x');
graph.removeEdge('E', 'z');
graph.removeVertex('C');

console.log("BFS traversal starting from vertex 'A':", graph.bfs('A'));
console.log("DFS traversal starting from vertex 'A':", graph.dfs('A'));