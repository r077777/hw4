async function pageLoaded() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)
  
  // 🔥 start here: write code to loop through the rides
  renderRide(json)
}

function renderRide(json){ 
  for (let i = 0; i<json.length; i++) {
    console.log(i)
    let ride = json[i]
    displayRide(ride)
  }
}

function legFullName(leg) {
  return leg.passengerDetails.first + " " + leg.passengerDetails.last
}

function legNumPass(leg) {
  return leg.numberOfPassengers
}

function legBorder(leg) {
  if (leg.purpleRequested == true && leg.numberOfPassengers < 4 ) {
    return "border-purple-500"
  }
  else {
    return "border-gray-900"
  }
  
}

function loopRideLegs(ride, legs, outputElement){ 
  for (let i =0; i<legs; i++) {
    let leg = ride[i]
    outputElement.insertAdjacentHTML('beforeend', 
    `
  <div class="border-4 ${legBorder(leg)} p-4 my-4 text-left">
    <div class="flex">
      <div class="w-1/2">
        <h2 class="text-2xl py-1">${legFullName(leg)}</h2>
        <p class="font-bold text-gray-600">${leg.passengerDetails.phoneNumber}</p>
      </div>
      <div class="w-1/2 text-right">
        <span class="rounded-xl bg-gray-600 text-white p-2">
        ${legNumPass(leg)} passengers
        </span>
      </div>
    </div>
    <div class="mt-4 flex">
      <div class="w-1/2">
        <div class="text-sm font-bold text-gray-600">PICKUP</div>
        <p>${leg.pickupLocation.address}</p>
        <p>${leg.pickupLocation.city} ${leg.pickupLocation.state} ${leg.pickupLocation.zip}</p>
      </div>
      <div class="w-1/2">
        <div class="text-sm font-bold text-gray-600">DROPOFF</div>
        <p>${leg.dropoffLocation.address}</p>
        <p>${leg.dropoffLocation.city} ${leg.dropoffLocation.state} ${leg.dropoffLocation.zip}</p>
      </div>
    </div>
  </div>
  `)  
  }
}

function levelofService(ride,legs){ 
  if (legs > 1){
    return "Noober Pool"
  }  else if (ride[0].numberOfPassengers > 3) {
    return "Noober XL"
  } else if (ride[0].purpleRequested == true) { 
    return "Noober Purple"  
  } else {
    return "Noober X"
  }
}

function displayRide(ride){
  
  let legs = ride.length
  let outputElement = document.querySelector('.rides')
  outputElement.insertAdjacentHTML('beforeend', 
    `<h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
    <i class="fas fa-car-side"></i>
    <span>${levelofService(ride,legs)}</span>
    `)  
  loopRideLegs(ride, legs,outputElement)
}
window.addEventListener('DOMContentLoaded', pageLoaded)
 




