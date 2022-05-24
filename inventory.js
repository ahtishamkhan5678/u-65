let products=JSON.parse(localStorage.getItem("Products"))
    products.forEach(function (ele,index){
        let tr=document.createElement("tr");
         let td1=document.createElement("td")
         let td2=document.createElement("td")
         let td3=document.createElement("td")
        let td4=document.createElement("td");
        let  td5=document.createElement("td");
        td1.innerText=ele.type;
        td2.innerText=ele.desc;
        td3.innerText=ele.price;
        let img=document.createElement("img")
        img.src=ele.imagel;
        td4.append(img);
    
        let btn=document.createElement("button");
        btn.innerText="Remove";
        td5.append(btn);
        tr.append(td1,td2,td3,td4,td5)
        document.querySelector("#tbody").append(tr);
        btn.addEventListener("click",function(){
            deleteFunction (ele,index);
        });
    })
    let trashProducts=JSON.parse(localStorage.getItem("trash")) || [];
    function deleteFunction(ele,index){
        trashProducts.push(ele);
        localStorage.setItem(index,1);
        localStorage.setItem("Products",JSON.stringify(trashProducts));
        event.target.parentNode.parentNode.remove();
        displayProductPanel();
    }
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