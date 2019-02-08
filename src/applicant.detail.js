const name = document.getElementById('name');
const relation = document.getElementById('relation');
const status = document.getElementById('status');
const historical = document.getElementById('historical');

const jsonString = window.localStorage.getItem('applicants');

let applicant = null;
let applicants = [];

if(jsonString) {
    applicants = JSON.parse(jsonString);
}
else {
    window.location = '/';
}

const searchParam = new URLSearchParams(window.location.search);
const nameToFind = searchParam.get('name');

if(nameToFind) {
    for(let index = 0; index < applicants.length; index++) {
        let currentApplicant = applicants[index];

        if(currentApplicant.name === nameToFind) {
            applicant = currentApplicant;
            break;
        }
    }
}
else {
    applicant = applicants[applicants.length - 1];
}

name.textContent = applicant.name;
relation.textContent = applicant.relation;
status.textContent = applicant.status;
historical.textContent = applicant.historical.join(' ');