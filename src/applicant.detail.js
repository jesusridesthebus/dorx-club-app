const name = document.getElementById('name');
const relation = document.getElementById('relation');
const status = document.getElementById('status');
const historical = document.getElementById('historical');

const jsonString = window.localStorage.getItem('applicants');

let applicant = null;

if(jsonString) {
    const applicants = JSON.parse(jsonString);
    applicant = applicants[applicants.length -1];
}
else {
    window.location = '/';
}

name.textContent = applicant.name;
relation.textContent = applicant.relation;
status.textContent = applicant.status;
historical.textContent = applicant.historical.join(' ');