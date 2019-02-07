const dorxForm = document.getElementById('dorx-form');
const usersName = document.getElementById('name');
const relation = document.getElementById('relation');
const dorkYes = document.getElementById('dork-yes');
const dorkNo = document.getElementById('dork-no');
const historical = document.getElementById('historical');

dorxForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const historical = [];
    for(let index = 0; index < dorxForm.historical.length; index++) {
        const hist = dorxForm.historical[index];
        if(hist.checked) {
            historical[index] = hist.value;
        }
    }

//event listeners for yes and no buttons


    const applicant = {
        name: usersName.value,
        relation: relation.value,
        status: dork.value,
        historical: historical
    };

    let applicants = [];
    const jsonString = window.localStorage.getItem('applicants');

    if(jsonString) {
        applicants = JSON.parse(jsonString);
    }

    applicants.push(applicant);

    const serialize = JSON.stringify(applicants);
    window.localStorage.setItem('applicants', serialize);

    window.location = 'thanks.html';
});