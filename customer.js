
window.addEventListener('load',loadData)
var tbody=document.getElementById("tbody")
document.getElementById("btn-1").addEventListener("click",postData)

var data=[]

function loadData(){
    var xhr=new XMLHttpRequest()
    var url="http://localhost:3000/customers"

    xhr.open("GET",url);
    var output=""
    var tables=""

    xhr.onload =function(){
        data=JSON.parse(xhr.responseText)
        console.log(data);
        if( xhr.status=="200"){
         
            for(i in data){
                output+=`
                <tr>
                <td >${data[i].name}</td>
                <td >${data[i].phone}</td>
                <td>${data[i].address}</td>
                <td>${data[i].pincode}</td>

                </tr>
                `;
            }
        }
        
        tbody.innerHTML=output
    }
    xhr.send()
}

function postData(){
    var url="http://localhost:3000/customers";
    var temp={}
    temp.name=document.getElementById("name").value;
    temp.phone=document.getElementById("phone").value;
    temp.address=document.getElementById("address").value;
    temp.pincode=document.getElementById("pincode").value;

    var json=JSON.stringify(temp)

    var xhr=new XMLHttpRequest()
    xhr.open("POST",url)
    xhr.setRequestHeader("Content-type","application/json; charset=utf-8")
    xhr.onload=function(){
    
    document.getElementById("name").value="";
    loadData();
        
    }   
    xhr.send(json)
}   

