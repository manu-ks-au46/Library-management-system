const button = document.getElementById('btn')
const bookName = document.getElementById('bookName')
const authorName = document.getElementById('authorName')

const api='/books'

button.addEventListener('click',viewBooks)

function viewBooks(){
    fetch(api)
    .then((res) => res.json())
    .then((data) => {
        data.map((item,index)=>{
            return
        console.log(data)
        bookName.innerHTML = `${item.bookName}`;
        authorName.innerHTML = `${item.authorName}`;
        })
        
    });
}

