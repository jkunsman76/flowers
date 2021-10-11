const flowers = [
    {
        id: 1,
        color: "White",
        species: "White Rose",
        price: .90
    },
    {
        id: 2,
        color: "Red",
        species: "Red Tulip",
        price: 1.10
    }
]

const addFlower = (flowerObject) => {
    const lastIndex = flowers.length - 1
    const currentLastItem = flowers[lastIndex]
    const maxId = currentLastItem.id
    const idForFlower = maxId + 1
    flowerObject.id = idForFlower
    flowers.push(flowerObject)
}

const findExpensiveFlowers = () => {
    const expensiveFlowers = []  // Do not change this code
    for (const flowerObj of flowers) {

        if (flowerObj.price >= 1.00) {

            expensiveFlowers.push(flowerObj)
        }
    }
    return expensiveFlowers  // Do not change this code

}

// Do not touch this code
module.exports = {
    findExpensiveFlowers, addFlower
}
