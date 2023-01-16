
// async function addBook() {
//   const bookName = document.getElementById('bookName').value
//   const authorName = document.getElementById('authorName').value
//   const publisher = document.getElementById('publisher').value
//   const ISBN = document.getElementById('isbn').value
//   const price = document.getElementById('price').value
//   const imageUrl = document.getElementById('imageUrl')
//   // const pdfUrl= document.getElementById('pdfUrl').value

//   const addBookResponseObj = await fetch('/books', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       bookName,
//       authorName,
//       publisher,
//       ISBN,
//       discription,
//       price:Number,
//       imageUrl,
//       // pdfUrl  
//     })
//   })

//   const addBookStatus = await addBookResponseObj.json()
//   if (addBookStatus.status === 'success') {
//     // alert('Product Added Successfully')
//     window.location = '../adminDashboard/adminDashboard.html'
//   } else {
//     alert("Error Adding Product")
//   }
// }
// const 

