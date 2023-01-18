
async function addBook() {
  const bookName = document.getElementById('bookName').value
  const authorName = document.getElementById('authorName').value
  const publisher = document.getElementById('publisher').value
  const ISBN = document.getElementById('isbn').value
  const price = document.getElementById('price').value
  const imageUrl = document.getElementById('imageUrl')
  const addBookResponseObj = await fetch('/books', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      bookName,
      authorName,
      publisher,
      ISBN,
      discription,
      price:Number,
      imageUrl, 
    })
  })

  const addBookStatus = await addBookResponseObj.json()
  if (addBookStatus.status === 'success') {
    window.location = '../adminDashboard/adminDashboard.html'
  } else {
    alert("Error Adding Product")
  }
}
// viewButton.addEventListener('click',viewAndEdit)

fetch('/books')
  .then(response => response.json())
  .then(data => {
    // Create the table element
    const table = document.createElement('table');

    // Create the table header
    const headerRow = document.createElement('tr');
    const headerName = document.createElement('th');
    headerName.textContent = "Name";
    const headerActions = document.createElement('th');
    headerActions.textContent = "Actions";
    headerRow.appendChild(headerName);
    headerRow.appendChild(headerActions);
    table.appendChild(headerRow);

    // Loop through the data and create rows for the table
    data.forEach(item => {
      const row = document.createElement('tr');
      const nameCell = document.createElement('td');
      const actionsCell = document.createElement('td');

      const updateButton = document.createElement('button');
      const deleteButton = document.createElement('button');
      const viewButton = document.createElement('button');
      
      nameCell.textContent = item.name;
      updateButton.textContent = 'Update';
      deleteButton.textContent = 'Delete';
      viewButton.textContent = 'View';

      actionsCell.appendChild(updateButton);
      actionsCell.appendChild(deleteButton);
      actionsCell.appendChild(viewButton);

      row.appendChild(nameCell);
      row.appendChild(actionsCell);

      // Attach event listeners to the buttons
      updateButton.addEventListener('click', () => {
        // Handle update logic
      });
      deleteButton.addEventListener('click', () => {
        // Handle delete logic
      });
      viewButton.addEventListener('click', () => {
        // Handle view logic
      });

      table.appendChild(row);
    });
    // Append the table to the HTML
    document.body.appendChild(table);
  })
  .catch(error => console.error(error));


