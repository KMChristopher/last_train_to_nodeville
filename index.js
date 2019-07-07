function isPeak(departure) {
  var dateTime = new Date(departure)
  var dayOfWeek = dateTime.getDay()
  var hourOfDay = dateTime.getHours()

  if (dayOfWeek >= 1 && dayOfWeek <= 5) {
    if (hourOfDay >= 7 && hourOfDay <= 10) {
      return true
    }

    if (hourOfDay >= 16 && hourOfDay <= 19) {
      return true
    }
  }

  return false
}
// KMC: Attempted to modify code here ... 
function calculateTicketPrice(departure, milesTraveled) {
  var peakUpcharge = isPeak(departure) ? 2.5 : 0 // KMC: This is a ternary, which is shorthand for an "If/else" statement ... I'd like to re-write it as an "If/else", but so far, no luck in my attempts ... 

  return (milesTraveled * .35) + peakUpcharge
}

module.exports = { calculateTicketPrice }
