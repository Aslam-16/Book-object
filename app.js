const title=document.getElementById('title');
const author=document.getElementById('author');
const isbn=document.getElementById('isbn');
const btn=document.getElementById('btn');
const tbody=document.getElementById('tbody');
const container=document.querySelector('.container');
const head=document.getElementsByTagName('thead')[0];


head.style.display="none"

container.addEventListener('click',(e)=>{
    e.preventDefault();
    if(e.target.className=='delete'){
        e.target.parentElement.parentElement.remove();
        UI.error('Deleted Successfully','success');
        
        if(!tbody.hasChildNodes()){
        head.style.display="none"
      
        }

    }
})

class Book{
    constructor(title,author,isbn){
        this.title=title;
        this.author=author;
        this.isbn=isbn;
    }
}

class UI{
 static loadtobody(book){
     const row=document.createElement('tr');
     row.innerHTML=`<td>${book.title}</td>
     <td>${book.author}</td>
     <td>${book.isbn}</td>
     <td><a href="" class="delete">X</a></td>`
     tbody.append(row);
 }
 static error(msg,status){
     const div=document.createElement('p');
div.className=status;
div.textContent=msg;
const container=document.querySelector('.container');
const head=document.querySelector('.head');

container.insertBefore(div,head);
setTimeout(() => {
    div.remove()
}, 2000);
 }
}



btn.addEventListener('click',function(){
    const title1=title.value
const author1=author.value
const isbn1=isbn.value
if(title1=="" || author1=="" || isbn1==""){
UI.error('No Data Found','fail')
}
else{
let book=new Book(title1,author1,isbn1);
const ui=new UI()
tbody.className="yes"
head.style.display="table-header-group"
UI.loadtobody(book);
 title.value=""
author.value=""
isbn.value=""
UI.error('Data Uploaded Successfully','success')
}
})