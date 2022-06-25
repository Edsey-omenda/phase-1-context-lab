/* Your Code Here */
function createEmployeeRecord(array)
{
return {
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents:[],
    timeOutEvents:[],
}

}
const createEmployeeRecords = function(ArrayOfArrays) {
    return ArrayOfArrays.map(function(array){
        return createEmployeeRecord(array)
    })
}
function createTimeInEvent(Dataval)
{
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(Dataval.slice(-4)),
        date: Dataval.slice(0, 10)
})
return this
}
function createTimeOutEvent(Dataval)
{
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(Dataval.slice(-4)),
        date: Dataval.slice(0, 10)
})
return this
}
function hoursWorkedOnDate(Datainquiry)
{
    let InTime = this.timeInEvents.find(function(e){
        return e.date === Datainquiry
    })

    let OutTime = this.timeOutEvents.find(function(e){
        return e.date === Datainquiry
    })

    return (OutTime.hour - InTime.hour) / 100
}

function wagesEarnedOnDate(Datainquiry)
{
    const Payunpaid = hoursWorkedOnDate(this, Datainquiry)* this.payPerHour
    return parseFloat(Payunpaid.toString())
}
const allWagesFor = function () {
    const verifiedDates = this.timeInEvents.map(function (e) {
        return e.date
    })
    const payable = verifiedDates.reduce(function (temp, d) {
        return temp + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0)

    return payable
}
function calculatePayroll (arrayofObject)
{
    let sum=0;
    for (let i=0;i<arrayofObject.length;i++) {
        sum += allWagesFor.call(arrayofObject[i]);
      }
    return sum
}

function findEmployeeByFirstName(Array, firstName) {
    return Array.find((Person) => Person.firstName === firstName )
  }

  function wagesEarnedOnDate(date = "all") {
    return this.payPerHour * hoursWorkedOnDate.call(this, date);
  }

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

// const allWagesFor = function () {
//     const eligibleDates = this.timeInEvents.map(function (e) {
//         return e.date
//     })

//     const payable = eligibleDates.reduce(function (memo, d) {
//         return memo + wagesEarnedOnDate.call(this, d)
//     }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

//     return payable
// }

