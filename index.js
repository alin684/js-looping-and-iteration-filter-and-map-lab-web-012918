// Code your solution here:
function driversWithRevenueOver(driver, revenue) {
  return driver.filter(function (driver) { return driver.revenue > revenue})
}

function driverNamesWithRevenueOver(driver, revenue) {
  let newArr = []
  driver.filter(function (driver) {
    return driver.revenue > revenue
  }).map(function (driver) {
    newArr.push(driver.name)
  })
  return newArr
}

function exactMatch(driver, hash) {
  return driver.filter(function (driver) { return driver[Object.keys(hash)[0]] === Object.values(hash)[0]})
}

function exactMatchToList(driver, hash) {
  let newArr = []
  driver.filter(function (driver) { return driver[Object.keys(hash)[0]] === Object.values(hash)[0]}).map(function (driver) {
    newArr.push(driver.name)
  })
  return newArr
}
