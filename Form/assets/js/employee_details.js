function employeeDetails() {
	var employeeTable = "";
	var hobbiesArray = [];
	var existingLocalStorageArray = [];
	var hobbies = document.querySelectorAll('input[type="checkbox"]:checked');
	for (let jLoop = 0; jLoop < hobbies.length; jLoop++) {
		hobbiesArray.push(hobbies[jLoop].value);
	}
	var employeeDetailArray = {
		"id": document.getElementById("employeeId").value,
		"name": document.getElementById("employeeName").value,
		"gender": document.employeeDetail.gender.value,
		"occupation": document.getElementById("employeeOccupation").value,
		"hobbies": hobbiesArray,
		"salary": document.getElementById("employeeSalary").value,
		"email": document.getElementById("emailId").value
	};
	if (localStorage.getItem('EmployeeDetail')) {
		existingLocalStorageArray = JSON.parse(localStorage.getItem('EmployeeDetail'));
	}
    existingLocalStorageArray.push(employeeDetailArray)
	localStorage.setItem('EmployeeDetail', JSON.stringify(existingLocalStorageArray));	
	var employeeDetailsFromLocalStorage = JSON.parse(localStorage.getItem("EmployeeDetail"));
	for (let iLoop = 0; iLoop < employeeDetailsFromLocalStorage.length; iLoop++) {
		employeeTable += "<tr>";
		employeeTable += "<td>" + employeeDetailsFromLocalStorage[iLoop].id + "</td>";
		employeeTable += "<td>" + employeeDetailsFromLocalStorage[iLoop].name + "</td>";
		employeeTable += "<td>" + employeeDetailsFromLocalStorage[iLoop].gender + "</td>";
		employeeTable += "<td>" + employeeDetailsFromLocalStorage[iLoop].occupation + "</td>";
		employeeTable += "<td>" + employeeDetailsFromLocalStorage[iLoop].hobbies + "</td>";
		employeeTable += "<td>" + employeeDetailsFromLocalStorage[iLoop].salary + "</td>";
		employeeTable += "<td>" + employeeDetailsFromLocalStorage[iLoop].email + "</td>";
		employeeTable += "</tr>";
	}
	document.getElementById("displayEmployeeDetails").innerHTML = employeeTable;
	document.getElementById('employeeDetail').reset();
}
