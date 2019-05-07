const person = {
    name: 'Matt',
    age: 26,
    location : {
        city: 'Houston',
        temp: '101'
    }
}

const { name, age } = person;
console.log(`${name} is ${age} years old`);

const { city, temp: temperature } = person.location;
if (temperature && city) {
    console.log(`It is ${temperature} in ${city}`);
}


const book = {
    title: 'How to change your mind',
    author: 'Michael Pollan',
    publisher: {
        name: 'Penguin'
    }
}

const { name : publisherName = 'Self-Published' } = book.publisher;

console.log(publisherName);

const address = ['1299 Juniper St','Houston', 'Texas', '77063'];
const [, city, state = 'New York'] = address;
console.log(`You are in ${city} ${state}. `);

const item = ['Coffee(Hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, sCost, mCost, lCost] = item;
console.log(`A medium ${itemName} costs ${mCost}`);
