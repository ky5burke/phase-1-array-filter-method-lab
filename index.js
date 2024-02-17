// Code your solution here
function findMatching(drivers, searchName) {
    const lowercaseSearch = searchName.toLowerCase();
  
    const matchingDrivers = drivers.filter(driver => {
      const lowercaseDriver = driver.toLowerCase();
      return lowercaseDriver === lowercaseSearch;
    });
  
    return matchingDrivers;
  }

  function fuzzyMatch(drivers, query) {
    return drivers.filter(driver => driver.startsWith(query));
}

function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
}