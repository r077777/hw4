async function pageLoaded() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)
  
  // 🔥 start here: write code to loop through the rides
  renderRide(json)
}

function renderRide(json){ 
  for (let i =1; i<json.length; i++) {
    console.log(i)
    let ride = json[i]
    displayRide(ride)
  }
}

function displayRide(ride){
  console.log(ride)
  let legs = ride.length
  let outputElement = document.querySelector('.rides')
  console.log(outputElement)

  if (legs == 2){
      outputElement.insertAdjacentHTML('beforeend', 
      `
      <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
      <i class="fas fa-car-side"></i>
      <span>Noober Pool</span>
    </h1>

    <div class="border-4 border-gray-900 p-4 my-4 text-left">
      <div class="flex">
        <div class="w-1/2">
          <h2 class="text-2xl py-1">${ride[0].passengerDetails.first} ${ride[0].passengerDetails.last}</h2>
          <p class="font-bold text-gray-600">${ride[0].passengerDetails.phoneNumber}</p>
        </div>
        <div class="w-1/2 text-right">
          <span class="rounded-xl bg-gray-600 text-white p-2">
          ${ride[0].numberOfPassengers} passengers
          </span>
        </div>
      </div>
      <div class="mt-4 flex">
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">PICKUP</div>
          <p>${ride[0].pickupLocation.address}</p>
          <p>${ride[0].pickupLocation.city} ${ride[0].pickupLocation.state} ${ride[0].pickupLocation.zip}</p>
        </div>
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">DROPOFF</div>
          <p>${ride[0].dropoffLocation.address}</p>
          <p>${ride[0].dropoffLocation.city} ${ride[0].dropoffLocation.state} ${ride[0].dropoffLocation.zip}</p>
        </div>
      </div>
    </div>

    <div class="border-4 border-gray-900 p-4 my-4 text-left">
      <div class="flex">
        <div class="w-1/2">
          <h2 class="text-2xl py-1">${ride[1].passengerDetails.first} ${ride[1].passengerDetails.last}</h2>
          <p class="font-bold text-gray-600">${ride[1].passengerDetails.phoneNumber}</p>
        </div>
        <div class="w-1/2 text-right">
          <span class="rounded-xl bg-gray-600 text-white p-2">
          ${ride[1].numberOfPassengers} passengers
          </span>
        </div>
      </div>
      <div class="mt-4 flex">
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">PICKUP</div>
          <p>${ride[1].pickupLocation.address}</p>
          <p>${ride[1].pickupLocation.city} ${ride[1].pickupLocation.state} ${ride[1].pickupLocation.zip}</p>
        </div>
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">DROPOFF</div>
          <p>${ride[1].dropoffLocation.address}</p>
          <p>${ride[1].dropoffLocation.city} ${ride[1].dropoffLocation.state} ${ride[1].dropoffLocation.zip}</p>
        </div>
      </div>
    </div>
    `)
  }
  else if (legs == 3){
    outputElement.insertAdjacentHTML('beforeend', 
    `
    <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
    <i class="fas fa-car-side"></i>
    <span>Noober Pool</span>
  </h1>

  <div class="border-4 border-gray-900 p-4 my-4 text-left">
    <div class="flex">
      <div class="w-1/2">
        <h2 class="text-2xl py-1">${ride[0].passengerDetails.first} ${ride[0].passengerDetails.last}</h2>
        <p class="font-bold text-gray-600">${ride[0].passengerDetails.phoneNumber}</p>
      </div>
      <div class="w-1/2 text-right">
        <span class="rounded-xl bg-gray-600 text-white p-2">
        ${ride[0].numberOfPassengers} passengers
        </span>
      </div>
    </div>
    <div class="mt-4 flex">
      <div class="w-1/2">
        <div class="text-sm font-bold text-gray-600">PICKUP</div>
        <p>${ride[0].pickupLocation.address}</p>
        <p>${ride[0].pickupLocation.city} ${ride[0].pickupLocation.state} ${ride[0].pickupLocation.zip}</p>
      </div>
      <div class="w-1/2">
        <div class="text-sm font-bold text-gray-600">DROPOFF</div>
        <p>${ride[0].dropoffLocation.address}</p>
        <p>${ride[0].dropoffLocation.city} ${ride[0].dropoffLocation.state} ${ride[0].dropoffLocation.zip}</p>
      </div>
    </div>
  </div>

  <div class="border-4 border-gray-900 p-4 my-4 text-left">
    <div class="flex">
      <div class="w-1/2">
        <h2 class="text-2xl py-1">${ride[1].passengerDetails.first} ${ride[1].passengerDetails.last}</h2>
        <p class="font-bold text-gray-600">${ride[1].passengerDetails.phoneNumber}</p>
      </div>
      <div class="w-1/2 text-right">
        <span class="rounded-xl bg-gray-600 text-white p-2">
        ${ride[1].numberOfPassengers} passengers
        </span>
      </div>
    </div>
    <div class="mt-4 flex">
      <div class="w-1/2">
        <div class="text-sm font-bold text-gray-600">PICKUP</div>
        <p>${ride[1].pickupLocation.address}</p>
        <p>${ride[1].pickupLocation.city} ${ride[1].pickupLocation.state} ${ride[1].pickupLocation.zip}</p>
      </div>
      <div class="w-1/2">
        <div class="text-sm font-bold text-gray-600">DROPOFF</div>
        <p>${ride[1].dropoffLocation.address}</p>
        <p>${ride[1].dropoffLocation.city} ${ride[1].dropoffLocation.state} ${ride[1].dropoffLocation.zip}</p>
      </div>
    </div>
  </div>

  <div class="border-4 border-gray-900 p-4 my-4 text-left">
    <div class="flex">
      <div class="w-1/2">
        <h2 class="text-2xl py-1">${ride[2].passengerDetails.first} ${ride[2].passengerDetails.last}</h2>
        <p class="font-bold text-gray-600">${ride[2].passengerDetails.phoneNumber}</p>
      </div>
      <div class="w-1/2 text-right">
        <span class="rounded-xl bg-gray-600 text-white p-2">
        ${ride[2].numberOfPassengers} passengers
        </span>
      </div>
    </div>
    <div class="mt-4 flex">
      <div class="w-1/2">
        <div class="text-sm font-bold text-gray-600">PICKUP</div>
        <p>${ride[2].pickupLocation.address}</p>
        <p>${ride[2].pickupLocation.city} ${ride[2].pickupLocation.state} ${ride[2].pickupLocation.zip}</p>
      </div>
      <div class="w-1/2">
        <div class="text-sm font-bold text-gray-600">DROPOFF</div>
        <p>${ride[2].dropoffLocation.address}</p>
        <p>${ride[2].dropoffLocation.city} ${ride[2].dropoffLocation.state} ${ride[2].dropoffLocation.zip}</p>
      </div>
    </div>
  </div>
  `)  
  } else if (ride[0].numberOfPassengers > 3) {
    outputElement.insertAdjacentHTML('beforeend', 
    `
    <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
    <i class="fas fa-car-side"></i>
    <span>Noober XL</span>
  </h1>

  <div class="border-4 border-gray-900 p-4 my-4 text-left">
    <div class="flex">
      <div class="w-1/2">
        <h2 class="text-2xl py-1">${ride[0].passengerDetails.first} ${ride[0].passengerDetails.last}</h2>
        <p class="font-bold text-gray-600">${ride[0].passengerDetails.phoneNumber}</p>
      </div>
      <div class="w-1/2 text-right">
        <span class="rounded-xl bg-gray-600 text-white p-2">
        ${ride[0].numberOfPassengers} passengers
        </span>
      </div>
    </div>
    <div class="mt-4 flex">
      <div class="w-1/2">
        <div class="text-sm font-bold text-gray-600">PICKUP</div>
        <p>${ride[0].pickupLocation.address}</p>
        <p>${ride[0].pickupLocation.city} ${ride[0].pickupLocation.state} ${ride[0].pickupLocation.zip}</p>
      </div>
      <div class="w-1/2">
        <div class="text-sm font-bold text-gray-600">DROPOFF</div>
        <p>${ride[0].dropoffLocation.address}</p>
        <p>${ride[0].dropoffLocation.city} ${ride[0].dropoffLocation.state} ${ride[0].dropoffLocation.zip}</p>
      </div>
    </div>
  </div>
  `)  
  } else if (ride[0].purpleRequested == true) {
    outputElement.insertAdjacentHTML('beforeend', 
    `
    <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
    <i class="fas fa-car-side"></i>
    <span>Noober Purple</span>
  </h1>

  <div class="border-4 border-gray-900 p-4 my-4 text-left">
    <div class="flex">
      <div class="w-1/2">
        <h2 class="text-2xl py-1">${ride[0].passengerDetails.first} ${ride[0].passengerDetails.last}</h2>
        <p class="font-bold text-gray-600">${ride[0].passengerDetails.phoneNumber}</p>
      </div>
      <div class="w-1/2 text-right">
        <span class="rounded-xl bg-gray-600 text-white p-2">
        ${ride[0].numberOfPassengers} passengers
        </span>
      </div>
    </div>
    <div class="mt-4 flex">
      <div class="w-1/2">
        <div class="text-sm font-bold text-gray-600">PICKUP</div>
        <p>${ride[0].pickupLocation.address}</p>
        <p>${ride[0].pickupLocation.city} ${ride[0].pickupLocation.state} ${ride[0].pickupLocation.zip}</p>
      </div>
      <div class="w-1/2">
        <div class="text-sm font-bold text-gray-600">DROPOFF</div>
        <p>${ride[0].dropoffLocation.address}</p>
        <p>${ride[0].dropoffLocation.city} ${ride[0].dropoffLocation.state} ${ride[0].dropoffLocation.zip}</p>
      </div>
    </div>
  </div>
  `)  
  } else {
    outputElement.insertAdjacentHTML('beforeend', 
    `
    <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
    <i class="fas fa-car-side"></i>
    <span>Noober Purple</span>
  </h1>

  <div class="border-4 border-gray-900 p-4 my-4 text-left">
    <div class="flex">
      <div class="w-1/2">
        <h2 class="text-2xl py-1">${ride[0].passengerDetails.first} ${ride[0].passengerDetails.last}</h2>
        <p class="font-bold text-gray-600">${ride[0].passengerDetails.phoneNumber}</p>
      </div>
      <div class="w-1/2 text-right">
        <span class="rounded-xl bg-gray-600 text-white p-2">
        ${ride[0].numberOfPassengers} passengers
        </span>
      </div>
    </div>
    <div class="mt-4 flex">
      <div class="w-1/2">
        <div class="text-sm font-bold text-gray-600">PICKUP</div>
        <p>${ride[0].pickupLocation.address}</p>
        <p>${ride[0].pickupLocation.city} ${ride[0].pickupLocation.state} ${ride[0].pickupLocation.zip}</p>
      </div>
      <div class="w-1/2">
        <div class="text-sm font-bold text-gray-600">DROPOFF</div>
        <p>${ride[0].dropoffLocation.address}</p>
        <p>${ride[0].dropoffLocation.city} ${ride[0].dropoffLocation.state} ${ride[0].dropoffLocation.zip}</p>
      </div>
    </div>
  </div>
  `)
  }     
}
window.addEventListener('DOMContentLoaded', pageLoaded)
 
  //  <div class="p-4 w-full md:w-1/2 lg:w-1/3">
  //     <div class="border h-full p-4 flex flex-col">
  //       <h2 class="text-lg font-bold mb-4">${product.name}</h2>
  //       <div class="mb-4"><img src=${product.image}>
  //       </div>
  //       <div class="mb-4 text-gray-900">
  //         ${product.description}
  //       </div>
  //       <div class="mt-auto text-purple-500 text-2xl">${product.price}</div>
  //     </div>
  //   </div>
  
  // }



