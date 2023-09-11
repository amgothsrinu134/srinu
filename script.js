//alert("loading")
function addNewWEFeild()
{
    console.log("Adding New Feild");
let newNode=document.createElement('textarea')
newNode.classList.add('form-control') ;
newNode.classList.add('weField') ;
newNode.classList.add("mt-2")
newNode.setAttribute("rows",3);   
newNode.setAttribute('placeholder','Enter here');
let weOb=document.getElementsById("we");
let weAddButtonOb=document.getElementById("weAddButton");
weOb.insertBefore(newNode,weAddButtonOb);

}
function addNewAQFeild(){
    let newNode=document.createElement('textarea')
newNode.classList.add('form-control') ;
newNode.classList.add('eqField') ;
newNode.classList.add("mt-2")
newNode.setAttribute("rows",3);   
newNode.setAttribute('placeholder','Enter here');
let aqOb=document.getElementsById("aq");
let aqAddButtonOb=document.getElementById("aqAddButton");
aqOb.insertBefore(newNode,aqAddButtonOb);


}