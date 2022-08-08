// Initilize our counter value
let counterAmount = 0

let boughtObject1Amount = 0
let boughtObject2Amount = 0
let boughtObject3Amount = 0
let boughtObject4Amount = 0
let boughtObject5Amount = 0

let boughtObject1Price = 5
let boughtObject2Price = 50
let boughtObject3Price = 500
let boughtObject4Price = 5000
let boughtObject5Price = 10000

let boughtObject1Weight = 1
let boughtObject2Weight = 5
let boughtObject3Weight = 50
let boughtObject4Weight = 100
let boughtObject5Weight = 500

let upgrade1Amount = 0
let upgrade2Amount = 0
let upgrade3Amount = 0
let upgrade4Amount = 0
let upgrade5Amount = 0

let upgradePrice = 1000
let upgrade2Price = 20000
let upgrade3Price = 50000
let upgrade4Price = 100000
let upgrade5Price = 1000000

let upgradeWeight = 1
let upgrade2Weight = 5
let upgrade3Weight = 50
let upgrade4Weight = 100
let upgrade5Weight = 500

// When user clicks on object, we increment their amount of "money"
function increment() {
    document.getElementById("counterAmount").innerHTML = ++counterAmount
}

// Logic ran when a user buys a buyable item 1
function objectBought() {
    if(counterAmount >= boughtObject1Price) {
        ++boughtObject1Amount
        counterAmount -= boughtObject1Price
        boughtObject1Price = Math.round(boughtObject1Price * 1.10)
        document.getElementById("buyableItem1Cost").innerHTML = boughtObject1Price
        document.getElementById("buyableItem1Count").innerHTML = boughtObject1Amount
    }
}

// Logic ran when a user buys a buyable item 2
function objectBought2() {
    if(counterAmount >= boughtObject2Price) {
        ++boughtObject2Amount
        counterAmount -= boughtObject2Price
        boughtObject2Price = Math.round(boughtObject2Price * 1.15)
        document.getElementById("buyableItem2Cost").innerHTML = boughtObject2Price
        document.getElementById("buyableItem2Count").innerHTML = boughtObject2Amount
    }
}

// Logic ran when a user buys buyable item 3
function objectBought3() {
    if(counterAmount >= boughtObject3Price) {
        ++boughtObject3Amount
        counterAmount -= boughtObject3Price
        boughtObject3Price = Math.round(boughtObject3Price * 1.20)
        document.getElementById("buyableItem3Cost").innerHTML = boughtObject3Price
        document.getElementById("buyableItem3Count").innerHTML = boughtObject3Amount
    }
}

// Logic ran when a user buys buyable item 4
function objectBought4() {
    if(counterAmount >= boughtObject4Price) {
        ++boughtObject4Amount
        counterAmount -= boughtObject4Price
        boughtObject4Price = Math.round(boughtObject4Price * 1.25)
        document.getElementById("buyableItem4Cost").innerHTML = boughtObject4Price
        document.getElementById("buyableItem4Count").innerHTML = boughtObject4Amount
    }
}

// Logic ran when a user buys buyable item 5
function objectBought5() {
    if(counterAmount >= boughtObject5Price) {
        ++boughtObject5Amount
        counterAmount -= boughtObject5Price
        boughtObject5Price = Math.round(boughtObject5Price * 1.30)
        document.getElementById("buyableItem5Cost").innerHTML = boughtObject5Price
        document.getElementById("buyableItem5Count").innerHTML = boughtObject5Amount
    }
}

// Logic ran when a user has item 1
setInterval(function() {
    if(boughtObject1Amount === 1) {
        counterAmount += boughtObject1Weight
        document.getElementById("counterAmount").innerHTML = counterAmount
    }
    else if(boughtObject1Amount > 1) {
        counterAmount = counterAmount + (boughtObject1Weight * boughtObject1Amount)
        document.getElementById("counterAmount").innerHTML = counterAmount
    }
}, 1000, boughtObject1Amount)

// Logic ran when a user has item 2
setInterval(function() {
    if(boughtObject2Amount === 1) {
        counterAmount += boughtObject2Weight
        document.getElementById("counterAmount").innerHTML = counterAmount
    }
    else if(boughtObject2Amount > 1) {
        counterAmount = counterAmount + (boughtObject2Weight * boughtObject2Amount)
        document.getElementById("counterAmount").innerHTML = counterAmount
    }
}, 3000, boughtObject2Amount)

// Logic ran when a user has item 3
setInterval(function() {
    if(boughtObject3Amount === 1) {
        counterAmount += boughtObject3Weight
        document.getElementById("counterAmount").innerHTML = counterAmount
    }
    else if(boughtObject3Amount > 1) {
        counterAmount = counterAmount + (boughtObject3Weight * boughtObject3Amount)
        document.getElementById("counterAmount").innerHTML = counterAmount
    }
}, 6000, boughtObject3Amount)

// Logic ran when a user has item 4
setInterval(function() {
    if(boughtObject4Amount === 1) {
        counterAmount += boughtObject4Weight
        document.getElementById("counterAmount").innerHTML = counterAmount
    }
    else if(boughtObject4Amount > 1) {
        counterAmount = counterAmount + (boughtObject4Weight * boughtObject4Amount)
        document.getElementById("counterAmount").innerHTML = counterAmount
    }
}, 10000, boughtObject4Amount)

// Logic ran when a user has item 4
setInterval(function() {
    if(boughtObject5Amount === 1) {
        counterAmount += boughtObject5Weight
        document.getElementById("counterAmount").innerHTML = counterAmount
    }
    else if(boughtObject5Amount > 1) {
        counterAmount = counterAmount + (boughtObject5Weight * boughtObject5Amount)
        document.getElementById("counterAmount").innerHTML = counterAmount
    }
}, 20000, boughtObject5Amount)

