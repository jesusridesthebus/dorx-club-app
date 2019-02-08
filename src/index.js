const dorxForm = document.getElementById('dorx-form');
const usersName = document.getElementById('name');
const relation = document.getElementById('relation');
const yes = document.getElementById('yes');
const yes2 = document.getElementById('yes-2');
const historical = document.getElementById('historical');

yes.addEventListener('change', function() {
    yes.checked;
});

yes2.addEventListener('change', function() {
    yes2.checked;
});

dorxForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const historical = [];
    for(let index = 0; index < dorxForm.historical.length; index++) {
        const hist = dorxForm.historical[index];
        if(hist.checked) {
            historical[index] = hist.value;
        }
    }
    const applicant = {
        name: usersName.value,
        relation: relation.value,
        //yes
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