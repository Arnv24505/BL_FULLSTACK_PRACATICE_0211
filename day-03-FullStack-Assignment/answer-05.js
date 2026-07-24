const users = [
    { id: 1, name: "Alice", role: "admin" },
    { id: 2, name: "Bob", role: "user" },
    { id: 3, name: "Charlie", role: "admin" },
    { id: 4, name: "David", role: "user" }
];

const groupedUsers = users.reduce((accumulator, currentUser) => {

    if (!accumulator[currentUser.role]) {
        accumulator[currentUser.role] = [];
    }

    accumulator[currentUser.role].push({
        id: currentUser.id,
        name: currentUser.name
    });

    return accumulator;

}, {});

console.log(groupedUsers);

/*
Output:

{
    admin: [
        { id: 1, name: "Alice" },
        { id: 3, name: "Charlie" }
    ],
    user: [
        { id: 2, name: "Bob" },
        { id: 4, name: "David" }
    ]
}
*/