function addEmployeeDetails() {
	var displayEmployeeDetailsInTable = "";
	var empHobbies = [];
	var storeEmployeeDetailsInLocalStorage = [];
	var retrieveEmployeeDetailsFromLocalStorage;
	var gethobbies = document.querySelectorAll('input[type="checkbox"]:checked');
	for (let employeeHobbies = 0; employeeHobbies < gethobbies.length; employeeHobbies++) {
		empHobbies.push(gethobbies[employeeHobbies].value);
	}
	var getEmployeeDetails = {
		"EmployeeId": document.getElementById("employeeId").value,
		"EmployeeName": document.getElementById("employeeName").value,
		"EmployeeGender": document.employeeDetails.gender.value,
		"EmployeeOccupation": document.getElementById("employeeOccupation").value,
		"EmployeeHobbies": empHobbies,
		"EmployeeSalary": document.getElementById("employeeSalary").value,
		"EmployeeEmailId": document.getElementById("emailId").value
	};
	if (localStorage.getItem('EmployeeDetail')) {
		storeEmployeeDetailsInLocalStorage = JSON.parse(localStorage.getItem('EmployeeDetail'));
		storeEmployeeDetailsInLocalStorage.push(getEmployeeDetails);
		localStorage.setItem('EmployeeDetail', JSON.stringify(storeEmployeeDetailsInLocalStorage));
	} else {
		storeEmployeeDetailsInLocalStorage.push(getEmployeeDetails)
		localStorage.setItem('EmployeeDetail', JSON.stringify([getEmployeeDetails]));
	}
	retrieveEmployeeDetailsFromLocalStorage = JSON.parse(localStorage.getItem("EmployeeDetail"));
	document.getElementById("displayEmployeeDetails").innerHTML = retrieveEmployeeDetailsFromLocalStorage;
	for (let displayDetails = 0; displayDetails < retrieveEmployeeDetailsFromLocalStorage.length; displayDetails++) {
		displayEmployeeDetailsInTable += "<tr>";
		displayEmployeeDetailsInTable += "<td>" + retrieveEmployeeDetailsFromLocalStorage[displayDetails].EmployeeId + "</td>";
		displayEmployeeDetailsInTable += "<td>" + retrieveEmployeeDetailsFromLocalStorage[displayDetails].EmployeeName + "</td>";
		displayEmployeeDetailsInTable += "<td>" + retrieveEmployeeDetailsFromLocalStorage[displayDetails].EmployeeGender + "</td>";
		displayEmployeeDetailsInTable += "<td>" + retrieveEmployeeDetailsFromLocalStorage[displayDetails].EmployeeOccupation + "</td>";
		displayEmployeeDetailsInTable += "<td>" + retrieveEmployeeDetailsFromLocalStorage[displayDetails].EmployeeHobbies + "</td>";
		displayEmployeeDetailsInTable += "<td>" + retrieveEmployeeDetailsFromLocalStorage[displayDetails].EmployeeSalary + "</td>";
		displayEmployeeDetailsInTable += "<td>" + retrieveEmployeeDetailsFromLocalStorage[displayDetails].EmployeeEmailId + "</td>";
		displayEmployeeDetailsInTable += "</tr>";
	}
	document.getElementById("displayEmployeeDetails").innerHTML = displayEmployeeDetailsInTable;
	document.getElementById('employeeDetail').reset();
}
