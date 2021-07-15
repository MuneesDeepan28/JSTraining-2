function addEmployeeDetails() {
	var displayData = "";
	var empHobbies = [];
	var setlocalStoragevalue = [];
	var getlocalStoragevalue;
	var empid = document.getElementById("employeeId").value;
	var empName = document.getElementById("employeeName").value;
	var empGender = document.employeeDetails.gender.value;
	var empOccupation = document.getElementById("employeeOccupation").value;
	var gethobbies = document.querySelectorAll('input[type="checkbox"]:checked');
	for (let employeeHobbies = 0; employeeHobbies < gethobbies.length; employeeHobbies++) {
		empHobbies.push(gethobbies[employeeHobbies].value);
	}
	var empSalary = document.getElementById("employeeSalary").value;
	var empEmailId = document.getElementById("emailId").value;
	var getEmployeeDetails =
	{
		"EmployeeId": empid,
		"EmployeeName": empName,
		"EmployeeGender": empGender,
		"EmployeeOccupation": empOccupation,
		"EmployeeHobbies": empHobbies,
		"EmployeeSalary": empSalary,
		"EmployeeEmailId": empEmailId
	}
	if (localStorage.getItem('EmployeeDetail')) {
		setlocalStoragevalue = JSON.parse(localStorage.getItem('EmployeeDetail'));
		setlocalStoragevalue.push(getEmployeeDetails);
		localStorage.setItem('EmployeeDetail', JSON.stringify(setlocalStoragevalue));
	} else {
		setlocalStoragevalue.push(getEmployeeDetails)
		localStorage.setItem('EmployeeDetail', JSON.stringify([getEmployeeDetails]));
	}
	getlocalStoragevalue = JSON.parse(localStorage.getItem("EmployeeDetail"));
	document.getElementById("displayEmployeeDetails").innerHTML = getlocalStoragevalue;
	for (let displayDetails = 0; displayDetails < getlocalStoragevalue.length; displayDetails++) {
		displayData += "<tr>";
		displayData += "<td>" + getlocalStoragevalue[displayDetails].EmployeeId + "</td>";
		displayData += "<td>" + getlocalStoragevalue[displayDetails].EmployeeName + "</td>";
		displayData += "<td>" + getlocalStoragevalue[displayDetails].EmployeeGender + "</td>";
		displayData += "<td>" + getlocalStoragevalue[displayDetails].EmployeeOccupation + "</td>";
		displayData += "<td>" + getlocalStoragevalue[displayDetails].EmployeeHobbies + "</td>";
		displayData += "<td>" + getlocalStoragevalue[displayDetails].EmployeeSalary + "</td>";
		displayData += "<td>" + getlocalStoragevalue[displayDetails].EmployeeEmailId + "</td>";
		displayData += "</tr>";
	}
	document.getElementById("displayEmployeeDetails").innerHTML = displayData;
	resetForm();
}
function resetForm() {
	document.getElementById('employeeDetail').reset();
}
