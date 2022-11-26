let array = ['Antonio', 'Brick', 'Bro', 'Prince']
let returnFirstTwoDrivers = (arg) => {
    let newArray =[]
  for (let i = 0; i<2; i++){
      newArray.push(arg[i])
}
  return newArray
    }

let returnLastTwoDrivers = (arg) => {
    let newArray = []
    for(let i = arg.length - 1; i> arg.length - 3; i--){
    newArray.unshift(arg[i])    
}
    return newArray
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(arg) {
    function returned(fare) {
        return fare * arg
    }
    return returned
}

const fareDoubler = fare => {
return createFareMultiplier(2)(fare)
}
const fareTripler = fare => {
    return createFareMultiplier(3)(fare)
    }
function selectDifferentDrivers(arg = [], arg2 = 'function'){
    return arg2(arg)
}
