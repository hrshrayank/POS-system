window.addEventListener('load',loadData)

var cards=document.getElementById("cards")

var data=[]

function loadData(){
    var xhr=new XMLHttpRequest()
    var url="http://localhost:3004/products"

    xhr.open("GET",url);
    var output=""

    xhr.onload =function(){
        data=JSON.parse(xhr.responseText)
        console.log(data);
        
            for(i in data){
                localStorage.setItem("order",JSON.stringify(data));
                output+=`
                <div class="card" style="width: 18rem;">
                <img src="${data[i].url}" class="card-img-top" alt="${data[i].name}">
                <div class="card-body">
                    <h5 class="card-title">${data[i].name}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <h3 class="card-price">${data[i].price} $</h3>
                   
                    
                    <a href="#" title="add to cart" class="attToCart">Add to cart</a>

                </div>
                </div>
                `;
            }
        
        cards.innerHTML=output
    }
    xhr.send()
    // <button id="btn-1" onclick="loadOrder(${data[i].id})">Button</button>
}

function loadOrder(id){
    localStorage.getItem("order",);
    // console.log(JSON.parse(localsStorage.getItem("order",)));
    console.log(id);
}
