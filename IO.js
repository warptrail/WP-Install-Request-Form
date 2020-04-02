function toggleInstructions(instructionToggle) {
    var instructionToggle = document.getElementById('instructionToggle').style;
    if (instructionToggle.display == 'none' || instructionToggle.display == '') {
        instructionToggle.display = 'block';
    } else {
        instructionToggle.display = 'none';
    }
}


function opName(){
    event.preventDefault();
    var input = document.getElementById('ipName').value;
    document.getElementById('opName').innerHTML = input;
}

function opAddress1(){
    event.preventDefault();
    var input = document.getElementById('ipAddress1').value;
    document.getElementById('opAddress1').innerHTML = input;
}

function opCity(){
    event.preventDefault();
    var input = document.getElementById('ipCity').value;
    document.getElementById('opCity').innerHTML = input;
}


function opState() {
    event.preventDefault();
    var input = document.getElementById('ipState').value;
    document.getElementById('opState').innerHTML = input;
}

function opZip(){
    event.preventDefault();
    var input = document.getElementById('ipZip').value;
    document.getElementById('opZip').innerHTML = input;
}

function opOrderNumber(){
    event.preventDefault();
    var input = document.getElementById('ipOrderNumber').value;
    document.getElementById('opOrderNumber').innerHTML = input;
}

function opCustomerID(){
    event.preventDefault();
    var input = document.getElementById('ipCustomerID').value;
    document.getElementById('opCustomerID').innerHTML = input;
}

function opShipToID(){
    event.preventDefault();
    var input = document.getElementById('ipShipToID').value;
    document.getElementById('opShipToID').innerHTML = input;
}

function opInstallType() {
    event.preventDefault();
    var input = document.getElementById('ipInstallType').value;
    document.getElementById('opInstallType').innerHTML = input;
}

function opOrderDate(){
    event.preventDefault();
    var input = document.getElementById('ipOrderDate').value;
    input = input.replace(/-/, '/').replace(/-/, '/')
    var d = new Date(input);
    var year = d.getFullYear() 
    var date = d.getDate() 
    
    var months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ]
    var days = [
        'Sun',
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
        'Sat'
    ]
    var dayIndex = d.getDay()
    var dayName = days[dayIndex] 
    var monthIndex = d.getMonth()
    var monthName = months[monthIndex]
    var formatted = `${dayName}, ${monthName} ${date}  ${year}`
    document.getElementById('opOrderDate').innerHTML = formatted;
}

function opSalesRepName(){
    event.preventDefault();
    var input = document.getElementById('ipSalesRepName').value;
    document.getElementById('opSalesRepName').innerHTML = input;
}

function opSalesRepPhone(){
    event.preventDefault();
    var input = document.getElementById('ipSalesRepPhone').value;
    document.getElementById('opSalesRepPhone').innerHTML = input;
}

function opContactName(){
    event.preventDefault();
    var input = document.getElementById('ipContactName').value;
    document.getElementById('opContactName').innerHTML = input;
}

function opContactPhone(){
    event.preventDefault();
    var input = document.getElementById('ipContactPhone').value;
    document.getElementById('opContactPhone').innerHTML = input;
}

function opContactEmail(){
    event.preventDefault();
    var input = document.getElementById('ipContactEmail').value;
    document.getElementById('opContactEmail').innerHTML = input;
}

function opEscortName(){
    event.preventDefault();
    var input = document.getElementById('ipEscortName').value;
    document.getElementById('opEscortName').innerHTML = input;
}

function opEscortPhone(){
    event.preventDefault();
    var input = document.getElementById('ipEscortPhone').value;
    document.getElementById('opEscortPhone').innerHTML = input;
}

function opEscortEmail(){
    event.preventDefault();
    var input = document.getElementById('ipEscortEmail').value;
    document.getElementById('opEscortEmail').innerHTML = input;
}

function opComments(){
    event.preventDefault();
    var input = document.getElementById('ipComments').value;
    document.getElementById('opComments').innerHTML = input;
}

function opComments(){
    event.preventDefault();
    var input = document.getElementById('ipComments').value;
    document.getElementById('opComments').innerHTML = input;
}

// Dispenser Count:

function opSoap(){
    event.preventDefault();
    var input = document.getElementById('soapSanitizer').value;
    if (input >= 1) {
        document.getElementById('opSoapSanitizer').style.display = "Block";
    } else {
        document.getElementById('opSoapSanitizer').style.display = "None";
    }
    document.getElementById('opSoapSanitizer').innerHTML = input + ' Soap/Sanitizer Dispensers';
}
function opCounterTop(){
    event.preventDefault();
    var input = document.getElementById('counterTopSoap').value;
    if (input >= 1) {
        document.getElementById('opCounterTopSoap').style.display = "Block";
    } else {
        document.getElementById('opCounterTopSoap').style.display = "None";
    }
    document.getElementById('opCounterTopSoap').innerHTML = input + ' Counter-top Soap Dispensers';
}
function opPaperTowel(){
    event.preventDefault();
    var input = document.getElementById('paperTowel').value;
    if (input >= 1) {
        document.getElementById('opPaperTowel').style.display = "Block";
    } else {
        document.getElementById('opPaperTowel').style.display = "None";
    }
    document.getElementById('opPaperTowel').innerHTML = input + ' Paper Towel Dispensers';
}
function opRecessed(){
    event.preventDefault();
    var input = document.getElementById('recessedPaperTowel').value;
    if (input >= 1) {
        document.getElementById('opRecessedPaperTowel').style.display = "Block";
    } else {
        document.getElementById('opRecessedPaperTowel').style.display = "None";
    }
    document.getElementById('opRecessedPaperTowel').innerHTML = input + ' Recessed Paper Towel Dispensers';
}
function opTP(){
    event.preventDefault();
    var input = document.getElementById('toiletPaper').value;
    if (input >= 1) {
        document.getElementById('opToiletPaper').style.display = "Block";
    } else {
        document.getElementById('opToiletPaper').style.display = "None";
    }
    document.getElementById('opToiletPaper').innerHTML = input + ' Toilet Paper Dispensers';
}
function opToiletSeat(){
    event.preventDefault();
    var input = document.getElementById('toiletSeatCover').value;
    if (input >= 1) {
        document.getElementById('opToiletSeatCover').style.display = "Block";
    } else {
        document.getElementById('opToiletSeatCover').style.display = "None";
    }
    document.getElementById('opToiletSeatCover').innerHTML = input + ' Toilet Seat Cover Dispensers';
}
function opChemical(){
    event.preventDefault();
    var input = document.getElementById('chemicalDilution').value;
    if (input >= 1) {
        document.getElementById('opChemicalDilution').style.display = "Block";
    } else {
        document.getElementById('opChemicalDilution').style.display = "None";
    }
    document.getElementById('opChemicalDilution').innerHTML = input + ' Chemical Dilution Dispensers';
}
function opAirFresh(){
    event.preventDefault();
    var input = document.getElementById('airFreshener').value;
    if (input >= 1) {
        document.getElementById('opAirFreshener').style.display = "Block";
    } else {
        document.getElementById('opAirFreshener').style.display = "None";
    }
    document.getElementById('opAirFreshener').innerHTML = input + ' Air Freshener Dispensers';
}
function opOther(){
    event.preventDefault();
    var input = document.getElementById('other').value;
    if (input >= 1) {
        document.getElementById('opOther').style.display = "Block";
    } else {
        document.getElementById('opOther').style.display = "None";
    }
    document.getElementById('opOther').innerHTML = input + ' Other Dispensers';
}

function opMountingSurface() {
    event.preventDefault();
    var input = document.getElementById('ipMountingSurface').value;
    document.getElementById('opMountingSurface').innerHTML = 'Mounting Surface: ' + input;
}

function opScheduledDate(){
    event.preventDefault();
    var input = document.getElementById('ipScheduleDate').value;
    var d = new Date(input);
    var year = d.getFullYear() 
    var date = d.getDate() 
    
    var months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ]
    var days = [
        'Sun',
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
        'Sat'
    ]
    var dayIndex = d.getDay()
    var dayName = days[dayIndex] 
    var monthIndex = d.getMonth()
    var monthName = months[monthIndex]
    var formatted = `${dayName}, ${monthName} ${date}  ${year}`
    document.getElementById('opScheduledDate').innerHTML = formatted;
}

