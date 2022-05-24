//store the products array in localstorage as "products"
let form =document.querySelector("#products");
form.addEventListener("submit",submitfunction);
let  products=JSON.parse(localStorage.getItem("Products")) || [];

function displayProductPanel(){
    let type=[0,0,0];
    for(let i=0;i<products.length;i++){
        if(products[i].type="shoes") type[0]++;
       else  if(products[i].type="slipper") type[1]++;
       else  if(products[i].type="t-shirst") type[2]++; 
    }
 
    console.log(type);

    let span=document.querySelectorAll("span");
    for(let i=0;i<span.length;i++){
        span[i].innerText=type[i];
    }
}
displayProductPanel();
function submitfunction(){
    event.preventDefault();
    let obj={
        type:form.type.value,
        des:form.desc.value,
        price:form.price.value,
        imgUrl:form.image.value
    };
    products.push(obj);
    console.log(products);
    localStorage.setItem("Products",JSON.stringify(products));
    document.querySelector("#products").reset();
    displayProductPanel();
    setInterval(function(){
        document.querySelector("p").innerText="Please wait....."
    },400)
    setTimeout(function(){
        document.querySelector("p").innerText=" "
    },2000);
}







