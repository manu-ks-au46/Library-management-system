
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



