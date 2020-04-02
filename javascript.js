
function yesInstallScheduled(){
    var dateInstallScheduled = document.getElementById("dateInstallScheduled");
    var isInstallScheduledYes = document.getElementById("isInstallScheduledYes");
    
    isInstallScheduledYes.checked = true;
    if (isInstallScheduledYes.checked = true) {
        dateInstallScheduled.style.display = "Block";
    } else {
        console.log('nevermind');
    }
    console.log('Install is scheduled. Please select a date');
    document.getElementById('opScheduled').innerHTML = 'Install is scheduled for ';
}


function noInstallScheduled(){
    var dateInstallScheduled = document.getElementById("dateInstallScheduled");
    var isInstallScheduledNo = document.getElementById("isInstallScheduledNo");
    
    isInstallScheduledNo.checked = true;
    if (isInstallScheduledNo.checked = true) {
        dateInstallScheduled.style.display = "None";
    } else {
        console.log('nevermind');
    }
    console.log('No, the install is not scheduled yet.');
    document.getElementById('opScheduled').innerHTML = 'This install is not scheduled yet. Please check for for backordered product or other causes of delay. ';
}

function clearCollarsPanelsValues(){
        document.getElementById("howManyCollarsInput").value = "0";
        document.getElementById("howManyPanelsInput").value = "0";
        document.getElementById("selectCollarsPanels").style.display = "None";
        document.getElementById("howManyCollars").style.display = "None";
        document.getElementById("howManyPanels").style.display = "None";
        document.getElementById("selectCollarsPanels").selectedIndex = "0";
        document.getElementById("collarsPanelsOrderedYetYes").checked = false;
        document.getElementById("collarsPanelsOrderedYetNo").checked = false;
        document.getElementById("collarsPanelsOrderedYet").style.display = "None";
        document.getElementById('opCollarsNum').innerHTML = '';
        document.getElementById('opPanelsNum').innerHTML = '';
        document.getElementById('opCollarsPannelsSection').style.display = "None";
        document.getElementById('opOrdered').innerHTML = 'Are they ordered yet?';
        document.getElementById('opOrdered').style.display = 'None';
        
}

function collarsOrPanelsNeeded(){
    var collarsOrPanels = document.getElementById('needCollarsOrPanels');
    var s = collarsOrPanels.selectedIndex;
    var opCollarsPanelsNeeded = document.getElementById('opAreCollarsPanelsNeeded');
    var yesCollarsPanelsNeeded = document.getElementById('opCollarsPannelsSection');
    var opOrdered = document.getElementById('opOrdered');

    if(collarsOrPanels.options[s].text ==='Yes') {
        document.getElementById("selectCollarsPanels").style.display = "Block";
        opCollarsPanelsNeeded.innerHTML = 'Yes, collars and/or panels are needed.';
        yesCollarsPanelsNeeded.style.display = "Block";
        opOrdered.style.display = "Block";
    } else if (collarsOrPanels.options[s].text ==='No'){
        clearCollarsPanelsValues();
        opCollarsPanelsNeeded.innerHTML = 'No collars or panels are needed.';
        opOrdered.style.display = "None";
    } else {
        clearCollarsPanelsValues();
        opCollarsPanelsNeeded.innerHTML = 'Are collars or panels needed?'
    }
}

function collarsPanelsSelect(){
    var howManyCollars = document.getElementById('howManyCollars').style.display;
    var howManyPanels = document.getElementById('howManyPanels').style.display;
    var collarsOrPanels = document.getElementById('selectCollarsPanels');
    var s = collarsOrPanels.selectedIndex;
    var needed = document.getElementById('opAreCollarsPanelsNeeded');
    var opHowManyCollars = document.getElementById('opCollars');
    var opHowManyPanels = document.getElementById('opPanels');
    
    if(collarsOrPanels.options[s].text === 'Collars'){
        document.getElementById('howManyCollars').style.display = 'Block';
        document.getElementById('howManyPanels').style.display = 'None';
        needed.innerHTML = 'Yes, collars are needed:';
        opHowManyCollars.style.display = 'Block';
        opHowManyPanels.style.display = 'None';
       } else if(collarsOrPanels.options[s].text === 'Panels') {
           document.getElementById('howManyPanels').style.display = 'Block';
           document.getElementById('howManyCollars').style.display = 'None';
           needed.innerHTML = 'Yes, panels are needed:';
           opHowManyPanels.style.display = 'Block';
           opHowManyCollars.style.display = 'None';
       } else if(collarsOrPanels.options[s].text === 'Both'){
           document.getElementById('howManyCollars').style.display = 'Block';
           document.getElementById('howManyPanels').style.display = 'Block';
           needed.innerHTML = 'Yes, both collars and panels are needed: '
           opHowManyPanels.style.display = 'Block';
           opHowManyCollars.style.display = 'Block';
       } else if(collarsOrPanels.options[s].text ==='Select what you need') {
            document.getElementById("howManyCollarsInput").value = "0";
            document.getElementById("howManyPanelsInput").value = "0"; document.getElementById("collarsPanelsOrderedYet").style.display = "None";
            document.getElementById("howManyCollars").style.display = "None";
            document.getElementById("howManyPanels").style.display = "None";
            document.getElementById("selectCollarsPanels").selectedIndex = "0";
            document.getElementById("collarsPanelsOrderedYetYes").checked = false;
            document.getElementById("collarsPanelsOrderedYetNo").checked = false;
           opHowManyPanels.style.display = 'None';
           opHowManyCollars.style.display = 'None';
           needed.innerHTML = 'Please select the amount of collars and/or panels needed.'
       }
}

function howManyCollarsPanels(){
    var howManyCollars = document.getElementById('howManyCollarsInput');
    var howManyPanels = document.getElementById('howManyPanelsInput');
    var opHowManyCollars = document.getElementById('opCollarsNum');
    var opHowManyPanels = document.getElementById('opPanelsNum');
    if (howManyCollars.value.length > 0 && howManyCollars.value != "0" ){
        document.getElementById('collarsPanelsOrderedYet').style.display = 'Block';
        console.log(howManyCollars.value.length);
        opHowManyCollars.innerHTML = howManyCollars.value;
        opHowManyPanels.innerHTML = howManyPanels.value;
    }  else if ((howManyPanels.value.length > 0 && howManyPanels.value != "0" ) ){
        document.getElementById('collarsPanelsOrderedYet').style.display = 'Block';
        opHowManyCollars.innerHTML = howManyCollars.value;
        opHowManyPanels.innerHTML = howManyPanels.value;
    } else {
        document.getElementById('collarsPanelsOrderedYet').style.display = 'None';
        document.getElementById("collarsPanelsOrderedYetYes").checked = false;
        document.getElementById("collarsPanelsOrderedYetNo").checked = false;
        opHowManyCollars.innerHTML = howManyCollars.value;
        opHowManyPanels.innerHTML = howManyPanels.value;
    }
}

function collarPanelOrderedYet(){
    var opOrderedYet = document.getElementById('opOrdered');
    var ipOrderedYetYes = document.getElementById('collarsPanelsOrderedYetYes');
    var ipOrderedYetNo = document.getElementById('collarsPanelsOrderedYetNo');
    if (ipOrderedYetYes.checked === true){
        opOrderedYet.innerHTML = 'Yes, they are ordered. Please provide expected delivery date in comments section.'
    } else if (ipOrderedYetNo.checked == true) {
        opOrderedYet.innerHTML = 'No, they are not ordered, please do so and advise.'
    }
}

function clearEscortInfo(){
    document.getElementById('ipEscortName').value = '';
    document.getElementById('ipEscortPhone').value = '';
    document.getElementById('ipEscortEmail').value = '';
    document.getElementById('opEscortName').innerHTML ='';
    document.getElementById('opEscortPhone').innerHTML ='';
    document.getElementById('opEscortEmail').innerHTML ='';
}

function escortInfoToggle() {
    var escortInfoSelect = document.getElementById('escortNeeded');
    var displayEscortSection = document.getElementById('escortSection');
    var escortMessage = document.getElementById('opEscortNeccessary');
    var s = escortNeeded.selectedIndex;
    if(escortNeeded.options[s].text ==='Yes') {
        escortInfo.style.display = "Block";
        escortSection.style.display = "Block";
        escortMessage.innerHTML = 'Yes, an escort is neccesasary.';
        
    } else if (escortNeeded.options[s].text ==='No') {
        escortInfo.style.display = "None";
        displayEscortSection.style.display = "None";
        escortMessage.innerHTML = 'No escort needed.';
        clearEscortInfo();
    } else {
        escortInfo.style.display = "None";
        displayEscortSection.style.display = "None";
        escortMessage.innerHTML = 'Is an escort needed?';
        clearEscortInfo();
    }
}

document.getElementById('howManyDispensers').oninput = function() {
    var soapSanitizer = Number(document.getElementById('soapSanitizer').value);
    var counterTopSoap = Number(document.getElementById('counterTopSoap').value);
    var paperTowel = Number(document.getElementById('paperTowel').value);
    var recessedPaperTowel = Number(document.getElementById('recessedPaperTowel').value);
    var toiletPaper = Number(document.getElementById('toiletPaper').value);
    var toiletSeatCover = Number(document.getElementById('toiletSeatCover').value);
    var chemicalDilution = Number(document.getElementById('chemicalDilution').value);
    var airFreshener = Number(document.getElementById('airFreshener').value);
    var other = Number(document.getElementById('other').value);
    
    var totalDispensers = soapSanitizer + counterTopSoap + paperTowel + recessedPaperTowel + toiletPaper + toiletSeatCover + chemicalDilution + airFreshener + other;
    
    document.getElementById('totalDispensers').innerHTML = 'Total Dispensers: ' + totalDispensers;
    
    document.getElementById('opTotalDispensers').innerHTML = totalDispensers;
}




