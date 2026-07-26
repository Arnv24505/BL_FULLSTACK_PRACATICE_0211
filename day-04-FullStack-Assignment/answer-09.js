const visitedNodes = new WeakSet();


function processNode(node) {

    if (visitedNodes.has(node)) {

        return "Already processed";

    }

    visitedNodes.add(node);

    return "Processing...";

}


const node1 = {
    id: 1
};

const node2 = {
    id: 2
};

console.log(processNode(node1));

console.log(processNode(node1));

console.log(processNode(node2));


/*
Why WeakSet instead of Set?

1. WeakSet automatically removes objects when they are garbage collected.

2. Prevents memory leaks when processing many temporary objects.

3. Only stores objects.

4. Cannot be iterated, making it suitable for tracking object existence only.
*/