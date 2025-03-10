// Code your solution here

const drivers = [
    { name: "Bobby", hometown: "New York" },
    { name: "Sammy", hometown: "Los Angeles" },
    { name: "Sally", hometown: "New York" },
    { name: "Annette", hometown: "Houston" },
    { name: "Sarah", hometown: "Dallas" },
    { name: "Bobby", hometown: "Tampa" }
];

function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
}

function matchName(drivers, name) {
    return drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase());
}


console.log(findMatching(["Bobby", "Sammy", "Sally", "Annette"], "Bobby")); 
console.log(fuzzyMatch(["Bobby", "Sammy", "Sally", "Annette"], "Sa")); 
console.log(matchName(drivers, "Bobby")); 
