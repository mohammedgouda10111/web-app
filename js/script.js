var btn = document.getElementById("productBtn");
var div = document.getElementById("productContainer");

data = [
    {id : 1 , name : "iphone  x" , desc : "this product is ........"},
    {id : 2 , name : "iphone 11" , desc : "this product is ........"},
    {id : 3 , name : "iphone 12" , desc : "this product is ........"},
    {id : 4 , name : "iphone 13" , desc : "this product is ........"}
]

// console.log(data);
//2- drow ele
function drow(items){
    productContainer.innerHTML = "";
    // console.log(items)               // heigher order function
    items.forEach(function(ele){
        console.log(ele)
        div.innerHTML += `<div onclick = deleteItem(${ele.id}) > ${ele.name} </div>`
    })
}
//3- load data
window.onload = function(){
    drow(data)
}
//4- add item
btn.addEventListener("click" , addItem)
function addItem(){
    var input = document.getElementById("productInput");
    if(input.value== "") alert ("you should enter a product");
    // console.log(data)
    // data[data.length-1].id     //cath the last id
    // var lastid = data.lenght? data[data.lenght-1].id :0;
    var lastId = data[data.length -1].id;
    // console.log(lastId++)
    data.push({id: ++lastId , name: input.value , desc: "this is product...."})
    // console.log(data) 
    var addItem = data[data.length -1]
    // console.log(addItem)
    div.innerHTML += `<div onclick = deleteItem(${deleteItem.id}) > ${addItem.name} </div>`
    input.value = "" ;
}
//5- delete item
function deleteItem(id){
    // data.splice(1,1)
    var index = data.map(function(i){
        return i.id
    }).indexOf(id)

    if(index !==-1){
        data.splice(index , 1)
        drow(data)
    }
    // console.log(data)
}