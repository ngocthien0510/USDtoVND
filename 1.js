let toggler=document.querySelector('.toggler');
let price=document.querySelectorAll('.price');
let dollar=document.querySelectorAll('.dollar');
usd=23.92

toggler.onclick=()=>{

    toggler.classList.toggle('active')

    if(toggler.classList.contains('active')){
        // contains: tra ve true khi phần tử có lơp
        for(var i=0;i<dollar.length;i++){
            dollar[i].innerText='₫'
        }
        for(var k=0;k<price.length;k++){
            price[k].innerText=( price[k].innerText * usd).toFixed(2)
            //toFixed lam tron 2 chu so thap phan
        }
    }else{
        for(var i=0;i<dollar.length;i++){
            dollar[i].innerText='$'
        }
        for(var k=0;k<price.length;k++){
            price[k].innerText=( price[k].innerText / usd).toFixed(2)
            //toFixed lam tron 2 chu so thap phan
        }
    }
}