const books = [];

function updateArray()
{
   var book=document.getElementById("data").value;
   books.push(book);
   document.getElementById("data").value=" ";
   printArray()
}

function printArray(){
   var list= document.getElementById("list");
    for(i=0; i<books.length;i++)
    {
      var li = document.createElement("li");
      li.innerHTML = books[i]
      list.appendChild(li)
    }
}