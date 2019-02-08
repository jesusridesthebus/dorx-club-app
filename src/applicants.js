const jsonString = window.localStorage.getItem('applicants');

let applicants = [];
if(jsonString) {
    applicants = JSON.parse(jsonString);
}

const tbody = document.getElementById('applicants');

for(let index = 0; index < applicants.length; index++) {
    const applicant = applicants[index];

    const tr = document.createElement('tr');
    tbody.appendChild(tr);

    const tdName = document.createElement('td');
    const link = document.createElement('a');
    tr.appendChild(tdName);
    tdName.appendChild(link);
    link.textContent = applicant.name;
    link.href = 'applicant-detail.html?name=' + encodeURIComponent(applicant.name);

    const tdRelation = document.createElement('td');
    tr.appendChild(tdRelation);
    tdRelation.textContent = applicant.relation;

    const td
}