const toyToFind = 3
// Chapter 1 practice data types 

const name = "Train" //string
const color = "Blue" //string
const price = 3.50 //float
const age = 5 //integer
const batteries = true //boolean
const inventory = 4 //integer
const available = true //boolean

// Chapter 2 practice structural types 
const bear = {
    id: 1,
    name: "Freddie",
    color: "Brown",
    price: 8.50,
    age: 5,
    batteries: false,
    inventory: 6,
    available: true
}

const train = {
    id: 2,
    name: "Pete",
    color: "Green",
    price: 10.50,
    age: 10,
    batteries: true,
    inventory: 5,
    available: true
}


const tractor = {
    id: 3,
    name: "Harvester",
    color: "Yellow",
    price: 12.50,
    age: 12,
    batteries: true,
    inventory: 0,
    available: false
}

// multiple objects in arrays chapter 

const toys = [
    {
        id: 1,
        name: "Freddie",
        color: "Brown",
        price: 8.50,
        age: 5,
        batteries: false,
        inventory: 6,
        available: true
    },
    {
        id: 2,
        name: "Pete",
        color: "Green",
        price: 10.50,
        age: 10,
        batteries: true,
        inventory: 5,
        available: true
    },
    {
        id: 3,
        name: "Harvester",
        color: "Yellow",
        price: 12.50,
        age: 12,
        batteries: true,
        inventory: 0,
        available: false
    }
]

// intro to string interpolation 

// for (const toyObj of toys) {
//     if (toyObj.id === toyToFind) {
//         toyObj.price = toyObj.price * 1.05
//         console.log(`The ${toyObj.color} ${toyObj.name} cost ${toyObj.price} dollars.`)
//     }
// }


// adding a new toy to the inventory 

const addToyToInventory = (toyObject) => {
    const lastIndex = toys.length - 1
    const currentLastToy = toys[lastIndex]
    const maxId = currentLastToy.id
    const idForNewToy = maxId + 1
    toyObject.id = idForNewToy
    toys.push(toyObject)
}

const ball = {
    name: "Ball",
    color: "Yellow",
    price: 2.50,
    age: 3,
    batteries: false,
    inventory: 3,
    available: true
}

addToyToInventory(ball)

for (const toyObj of toys) {
    // console.log(`The ${toyObj.color} ${toyObj.name} costs ${toyObj.price} dollars.`)
}

// Discontinued Toys

const removeProduct = (idStorage) => {
    for (const toyObj of toys) {
        if (toyObj.id === idStorage) {
            toys.splice(toyObj.id - 1 ,1)
        }
    }
    return toys
}

const finalDeletedProduct = removeProduct(3)
// console.log(finalDeletedProduct)

const currentInventory = [
    "Muscle Man",
    "Dora the Scientist",
    "Princess Sparkles",
    "Perry Scope",
    "Explorer Backpack",
    "Space Scout Suit",
    "Geology Mineral Dig Kit",
    "Perry Scope"
]

const sellPerryScope = () => {

    for (const toy of currentInventory) {
        

        if (toy === "Perry Scope") {
        const NotAvailableForPurchase = false
        }
    }
const availableForPurchase = true
    if (availableForPurchase === true) {
        console.log("Enjoy your new Perry Scope")
    }
}

const finalPerrySell = sellPerryScope(toys)
console.log(finalPerrySell)


