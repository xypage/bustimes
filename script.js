function getDateTime() {
  let date = new Date();

  let hour = date.getHours();
  let min = date.getMinutes();
  let day = date.getDay(); //sun = 0, sat = 6
  return [day, hour, min];
}

//fills both menus with all stops
let pickUpSelect = document.getElementById("pickUp");
let dropOffSelect = document.getElementById("dropOff");
stops.forEach(stop => {
  let pickUpOption = document.createElement("option");
  pickUpOption.value = stop;
  pickUpOption.textContent = stop;
  let stopOption = document.createElement("option");
  stopOption.value = stop;
  stopOption.textContent = stop;
  pickUpSelect.append(pickUpOption);
  dropOffSelect.append(stopOption);
});

//gets list of all buses running today
let date = getDateTime();
let todaysBuses = [];
busTimes.forEach(route => {
  if (route.days.includes(date[0])) todaysBuses.push(route);
});

//when button is pressed, route from a-b
let button = document.getElementById("submit");
button.addEventListener("click", function() {
  let from = pickUpSelect.selectedOptions[0].value;
  let to = dropOffSelect.selectedOptions[0].value;
  getRoute(from, to);
});

function getRoute(from, to) {
  let busesWithStops = [];
  console.log(from, to);
  console.log(todaysBuses);

  //Get all the buses running that day with both stops
  todaysBuses.forEach(bus => {
    if (bus.hasOwnProperty(from) && bus.hasOwnProperty(to)) {
      let minimizedBus = {};
      //parse the stringified version so that it's an unconnected object, now if they route again w/o refresh the data is still the same
      minimizedBus[from] = JSON.parse(JSON.stringify(bus[from]));
      minimizedBus[to] = JSON.parse(JSON.stringify(bus[to]));
      minimizedBus.name = bus.name;
      busesWithStops.push(minimizedBus);
    }
  });

  console.log(date);
  //filter the times so it only shows after the current time
  //for each bus
  for (let i = 0; i < busesWithStops.length; i++) {
    let currStop = busesWithStops[i][from];
    //keep this so if the first dropoff is before the 1st pickup, it can add back the pickup linked to that dropoff to avoid a weird offset in the table later
    let missedPickups = [];
    
    //for each stop, loop until you get to times after the current time and remove all the stops preceding it
    for (let j = 0; j < currStop.length; j++) {
      //date is [day of week, hour, minute] and currStop is [[hour, minute], [hour, minute], ...]
      if (
        (currStop[j][0] == date[1] && currStop[j][1] > date[2]) ||
        currStop[j][0] > date[1]
      ) {
        missedPickups = busesWithStops[i][from].splice(0, j);
      }
    }
    //same thing as above but the "to" side instead of the "from" side
    currStop = busesWithStops[i][to];
    for (let j = 0; j < currStop.length; j++) {
      if (
        (currStop[j][0] == date[1] && currStop[j][1] > date[2]) ||
        currStop[j][0] > date[1]
      ) {
        busesWithStops[i][to].splice(0, j);
      }
    }

    //here we put the missedPickups to use if there's an offset
    if((busesWithStops[i][from][0][0] == busesWithStops[i][to][0][0] && busesWithStops[i][from][0][1] > busesWithStops[i][to][0][1]) || busesWithStops[i][from][0][0] > busesWithStops[i][to][0][0]) {
      busesWithStops[i][from].unshift(missedPickups[missedPickups.length - 1]);
    }
  }
  console.log(busesWithStops);
  displayRoutes(busesWithStops, from, to);
}

//have functions split just to make purpose clear and increase readability
function displayRoutes(buses, from, to) {
  buses.forEach(bus => {
    //holds everything, append table to this, then append this to site
    let block = document.createElement("div");

    let routeTitle = document.createElement("p");
    routeTitle.classList.add("route-title");
    routeTitle.innerText = bus.name;
    block.append(routeTitle);

    let table = document.createElement("table");
    table.classList.add("time-table");

    //header row with from/to data
    let headerRow = document.createElement("tr");
    headerRow.classList.add("header-row");
    let fromHeader = document.createElement("th");
    fromHeader.innerText = from;
    let toHeader = document.createElement("th");
    toHeader.innerText = to;
    headerRow.append(fromHeader, toHeader);
    table.append(headerRow);

    //go through all the times and add them to the table
    for(let i = 0; i < bus[from].length || i < bus[to].length; i++) {
      //the ifs are in case one side has more than the other, adds empty element to not have an error
      let fromTD = document.createElement("td");
      if(i < bus[from].length && bus[from][i]) {
        let minute = bus[from][i][1];
        if(minute < 10) {
          minute = "0" + minute;
        }
        fromTD.innerText = bus[from][i][0] + ":" + minute;
      }

      let toTD = document.createElement("td");
      if(i < bus[to].length) {
        let minute = bus[to][i][1];
        if(minute < 10) {
          minute = "0" + minute;
        }
        toTD.innerText = bus[to][i][0] + ":" + minute;
      }

      let row = document.createElement("tr");
      row.append(fromTD, toTD);
      table.append(row);
    }


    block.append(table);
    let afterContainer = document.getElementById("after");
    afterContainer.append(block);
    toRemove.push(block);
  });
  //make the filled disp container show, and hide the one with selections
  let afterContainer = document.getElementById("after");
  afterContainer.style.display = "flex";
  let beforeContainer = document.getElementById("before");
  beforeContainer.style.display = "none";
}

//cheap solution, but storing what's been added to dom globally makes it easier to remove
let toRemove = [];
//goes back to find routes and cleans out the after container
let backButton = document.getElementById("back");
backButton.addEventListener("click", function() {
  let afterContainer = document.getElementById("after");
  afterContainer.style.display = "none";
  let beforeContainer = document.getElementById("before");
  beforeContainer.style.display = "flex";

  toRemove.forEach(block => {
    afterContainer.removeChild(block);
  });
  toRemove = [];
});