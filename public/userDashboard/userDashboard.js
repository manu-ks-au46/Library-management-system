fetch('/books').then((data)=>{
    return data.json();
}).then((objectData)=>{
    let tableData="";
    objectData.books.map((values)=>{
        tableData+=`<tr>
        <td>${values.bookName}</td>
        <td>${values.authorName}</td>
        <td><img src="${values.imageUrl}"/></td>
      </tr>`;
    })
    document.getElementById("table_body").innerHTML=tableData;
}).catch((err)=>{
    console.log(err)
})
