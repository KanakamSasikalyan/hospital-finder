const hospitals = require('./hospital.js');

function testResults(form){
    var cityFilter = form.inputbox.value;
//    alert("You Typed:"+ filteredHospitals.length);
    
    if (confirm(cityFilter) == true) {
        alert("You Are Redirecting to another Page");
    } else {
       return;
    }

    //filtered Hospitals
    const filteredHospitals = hospitals.filter(hospital => hospital.City === cityFilter);
    
    form.action = "hospital-info.html";

    // Choose a random hospital from the array
    var randomIndex = Math.floor(Math.random() * filteredHospitals.length);
    var hospital = filteredHospitals[randomIndex];

    // Store the hospital data in sessionStorage
    sessionStorage.setItem('hospitalData', JSON.stringify(hospital));
    form.inputBox.value = "";
}
