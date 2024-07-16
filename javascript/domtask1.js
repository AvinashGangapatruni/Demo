let tableCreated = false;
let tableData = [];
const table = document.querySelector('table');
const tableBody = document.getElementById('table-body');
const messageElement = document.getElementById('message');

document.getElementById('btn').addEventListener('click', function() {
  if (!tableCreated) {
    tableCreated = true;
    document.getElementById('table-container').style.display = 'block';
  } else {
    promptDataEntry();
  }
});

function promptDataEntry() {
  const name = prompt('Enter name:');
  const rollNumber = prompt('Enter roll number:');
  const cgpa = prompt('Enter CGPA:');
  const branch = prompt('Enter branch:');
  if (name && rollNumber && cgpa && branch) {
    tableData.push({ name, rollNumber, cgpa, branch });
    updateTable();
    showMessage(Row added successfully!);
  }
}

function updateTable() {
  tableBody.innerHTML = '';
  tableData.forEach((data, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${data.name}</td>
      <td>${data.rollNumber}</td>
      <td>${data.cgpa}</td>
      <td>${data.branch}</td>
      <td>
        <button class="update" onclick="updateRow(${index})">Update</button>
        <button class="remove" onclick="deleteRow(${index})">Delete</button>
      </td>
    `;
    tableBody.appendChild(row);
  });
}

function updateRow(index) {
  const name = prompt('Enter new name:', tableData[index].name);
  const rollNumber = prompt('Enter new roll number:', tableData[index].rollNumber);
  const cgpa = prompt('Enter new CGPA:', tableData[index].cgpa);
  const branch = prompt('Enter new branch:', tableData[index].branch);
  if (name && rollNumber && cgpa && branch) {
    tableData[index] = { name, rollNumber, cgpa, branch };
    updateTable();
    showMessage(Row updated successfully!);
  }
}

function deleteRow(index) {
  if (confirm(Are you sure you want to delete ${tableData[index].name}?)) {
    tableData.splice(index, 1);
    updateTable();
    showMessage(Row deleted successfully!);
  }
}

function showMessage(message) {
  messageElement.innerHTML = message;
  messageElement.style.display = 'block';
  setTimeout(() => {
    messageElement.style.display = 'none';
  }, 3000);
}