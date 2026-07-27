const user = {
id: 42,
name: "John Doe",
address: {
city: "New York",
zip: "10001"
},
hobbies: ["reading", "coding", "gaming"]
};

cosnt {id, name} = user;

const {address: {city}} = user;

const {hobbies: [firstHobby, secondHobby, thirdHobby]} = user;

const { role="guest"} = user