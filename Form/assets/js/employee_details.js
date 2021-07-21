var employeeTable = "";
function employeeDetails() {
	var employeeTable = "";
	var existingLocalStorageArray = [];
	var hobbiesArray = [];
	var hobbies = document.querySelectorAll('input[type="checkbox"]:checked');
	for (let jLoop = 0; jLoop < hobbies.length; jLoop++) {
		hobbiesArray.push(hobbies[jLoop].value);
	};
	var employeeDetailArray = {
		"employeeId": document.getElementById("employeeId").value,
		"employeeName": document.getElementById("employeeName").value,
		"employeeGender": document.employeeDetail.gender.value,
		"employeeOccupation": document.getElementById("employeeOccupation").value,
		"employeeHobbies": hobbiesArray,
		"employeeSalary": document.getElementById("employeeSalary").value,
		"email": document.getElementById("emailId").value
	};
	displayEmployee(employeeDetailArray);
};
function displayEmployee(employeeDetailArray) {
	var existingLocalStorageArray = [];
	if (localStorage.getItem('EmployeeDetail')) {
		localStorage.setItem('EmployeeDetail', JSON.stringify(existingLocalStorageArray));
	}
	existingLocalStorageArray.push(employeeDetailArray);
	localStorage.setItem('EmployeeDetail', JSON.stringify(employeeDetailArray));
	var employeeDetailsFromLocalStorage = JSON.parse(localStorage.getItem("EmployeeDetail"));
	for (let iLoop = 0; iLoop < employeeDetailsFromLocalStorage.length; iLoop++) {
		employeeTable += "<tr>";
		employeeTable += "<td>" + employeeDetailsFromLocalStorage[iLoop].employeeId + "</td>";
		employeeTable += "<td>" + employeeDetailsFromLocalStorage[iLoop].employeeName + "</td>";
		employeeTable += "<td>" + employeeDetailsFromLocalStorage[iLoop].employeeGender + "</td>";
		employeeTable += "<td>" + employeeDetailsFromLocalStorage[iLoop].employeeOccupation + "</td>";
		employeeTable += "<td>" + employeeDetailsFromLocalStorage[iLoop].employeeHobbies + "</td>";
		employeeTable += "<td>" + employeeDetailsFromLocalStorage[iLoop].employeeSalary + "</td>";
		employeeTable += "<td>" + employeeDetailsFromLocalStorage[iLoop].email + "</td>";
		employeeTable += "<td>" + `<button type="button" onclick= "onclickEdit()">Edit</button> <button type="button" onclick="onclickDelete(employeeTable)">Delete</button>` + "</td>";
		employeeTable += "</tr>";
	}
	document.getElementById("displayEmployeeDetails").innerHTML = employeeTable;
};
function onChange(event) {
	var file = event.target.files[0];
	var fileReader = new FileReader();
	fileReader.onload = function (e) {
		var result = e.target.result.split('\n');
		var arrObj = [];
		var header = result[0].split(',');
		for (var i = 0; i < result.length; i++) {
			var rowdata = result[i].split(/[,\r]/);
			arrObj[i] = {};
			for (var j = 0; j < rowdata.length; j++) {
				arrObj[i][header[j]] = rowdata[j];
			}
		};
		displayEmployee(arrObj);
	};
	fileReader.readAsText(file);
}
function onclickEdit() {
	var table = document.getElementById("displayEmployeeDetails"), rIndex;
	for (var i = 0; i < table.rows.length; i++) {
		table.rows[i].onclick = function () {
			rIndex = this.rowIndex;
			console.log(rIndex);
			document.getElementById("employeeName").value = this.cells[1].innerHTML;
			document.getElementById("employeeId").value = this.cells[0].innerHTML;
			document.employeeDetail.gender.value = this.cells[2].innerHTML;
			document.getElementById("employeeOccupation").value = this.cells[3].innerHTML;
			document.getElementById("employeeHobbies").value.value = this.cells[4].innerHTML;
			document.getElementById("employeeSalary").value = this.cells[5].innerHTML;
			document.getElementById("emailId").value = this.cells[6].innerHTML;
		};
	};
};
function onclickDelete() {
	var table = document.getElementById("displayEmployeeDetails"), rIndex;
	for (var i = 0; i < table.rows.length; i++) {
		table.rows[i].onclick = function () {
			rIndex = this.rowIndex;
			var count = rIndex - 1;
			console.log(count);
			document.getElementById("displayEmployeeDetails").deleteRow(count);
		};
	}
}
