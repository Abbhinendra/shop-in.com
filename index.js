
function get(){
    if(localStorage.getItem('itemJson')==null){
       Arr=[];
       Arr.push(text.value,thing.value,price.value);
       localStorage.setItem('itemJson',JSON.stringify(Arr));
    }
    else{
        let strArr=localStorage.getItem('itemJson');
        Arr=JSON.parse(strArr);
        Arr.push([text.value,thing.value,price.value]);
        localStorage.setItem('itemJson',JSON.stringify(Arr));
    }
    update();
}

function update(){
    if(localStorage.getItem('itemJson')==null){
        Arr=[];
        localStorage.setItem('itemJson',JSON.stringify(Arr));
     }
     else{
         let strArr=localStorage.getItem('itemJson');
         Arr=JSON.parse(strArr);
     }
     str="";
     let a=new Date();
     let date=a.toDateString();
     Arr.forEach((element,index)=> {
        str+=` <tr class="customer">
        <th scope="row">${index+1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td>${element[2]}</td>
        <td><button onclick="pro(${index})">Delete</button>   <button class="alladd">add</button></td>
        <td>${date}</td>
      </tr>`;
     });
     tbody.innerHTML=str;
}
btn.addEventListener('click',function(){
    if(text.value==0|| thing.value==0|| price.value==0){
        alert("Sorry you can't add note Without name , thing price.");
    }
    else{
     get();
    }
    
})
update();

function pro(item){
    let strArr=localStorage.getItem('itemJson');
    Arr=JSON.parse(strArr);
    Arr.splice(item,1);
    localStorage.setItem('itemJson',JSON.stringify(Arr));
    update();
}
btn.addEventListener('click',()=>{
    text.value="";
    thing.value="";
    price.value="";
})

function cl(){
    if(confirm("Do you really want to clear all the records?")){
    localStorage.clear();
    update();
    }
}


let search=document.getElementById('search6');
let customer=document.querySelectorAll('.customer');

search.addEventListener('input',function(e){
Array.from(customer).forEach(element => {
    cardText=element.getElementsByTagName("td")[0].innerText;
    if(cardText.includes(search.value)){
        element.style.display="block";
    }
    else{
        element.style.display="none";
    }
});
});

  
containeradd=document.querySelector('.container-add');
let alladd=document.querySelectorAll('.alladd');
Array.from(alladd).forEach(e=>{
e.addEventListener('click',()=>{
  containeradd.style.display="block";
})
})
let close=document.getElementById('close-container');
close.addEventListener('click',function(){
    containeradd.style.display="none";
})

let string="";
buttns=document.querySelectorAll('.button');
Array.from(buttns).forEach(button => {
   
    button.addEventListener('click',(e)=>{
        try {
        
        if(e.target.innerHTML=="="){
            string=eval(string);
            document.querySelector('.input').value=string;
        }
        else if(e.target.innerHTML=="C"){
            string="";
            document.querySelector('.input').value=string;
        }
        else{
        string=string+e.target.innerHTML;
        document.querySelector('.input').value=string;
        }

        
} catch (error) {
    alert("invalid credentials");    
}
    });


});
