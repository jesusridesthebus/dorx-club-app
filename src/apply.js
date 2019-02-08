const dorxForm = document.getElementById('dorx-form');
const usersName = document.getElementById('name');
const relation = document.getElementById('relation');
//const historical = document.getElementById('historical');
const radioButtons = document.getElementsByName('dork');


dorxForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const historical = [];
    for(let index = 0; index < dorxForm.historical.length; index++) {
        const hist = dorxForm.historical[index];
        if(hist.checked) {
            historical.push(hist.value);
        }
    }
   
    let dork = null;

    for(let index = 0; index < radioButtons.length; index++) {
        const radioButton = radioButtons[index];
        if(radioButton.checked) {
            dork = radioButton.value;
        }
    }
    const applicant = {
        name: usersName.value,
        relation: relation.value,
        dork: dork,
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