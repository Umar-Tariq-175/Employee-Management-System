let employees = [];

function addemp() {

    let empname = document.querySelector("#name").value;
    let empid = document.querySelector("#employeeId").value;
    let depart = document.querySelector("#department").value;
    let sal = document.querySelector("#salary").value;

    let empobj = {

        empname: empname,
        empid: empid,
        depart: depart,
        sal: sal
    };

    employees.push(empobj);
    
    console.log(employees);
     
    displayemp();

    document.querySelector("#name").value = "";
    document.querySelector("#employeeId").value = "";
    document.querySelector("#department").value = "";
    document.querySelector("#salary").value = "";
    
}


function displayemp() {

    let tableoutput = document.querySelector("#employeeTable");

    tableoutput.innerText = "";

    for (let i = 0; i < employees.length; i++) {

        let empobj = employees[i];

        let { empname, empid, depart, sal } = empobj;

        let row = tableoutput.insertRow();

        let cell1 = row.insertCell();
        let cell2 = row.insertCell();
        let cell3 = row.insertCell();
        let cell4 = row.insertCell();
        let cell5 = row.insertCell();

        cell1.innerText = empid;
        cell2.innerText = empname;
        cell3.innerText = depart;
        cell4.innerText = sal;

        let delbtn = document.createElement("button");

        delbtn.innerText = "Delete";
        delbtn.style.backgroundColor = 'red';
        delbtn.style.padding = '8px 14px';
        delbtn.style.border = '5px';
        delbtn.style.margin = '5px' ;
        delbtn.style.cursor = 'pointer';
        delbtn.style.color = 'white';

        delbtn.onclick = () => {
            deleteemp(i);
        };

        cell5.appendChild(delbtn);
    }
}


function deleteemp(index) {

    employees.splice(index, 1);

    displayemp();
}


document.querySelector("#employeeForm").addEventListener("submit", (event) => {

    event.preventDefault();

    addemp();

});