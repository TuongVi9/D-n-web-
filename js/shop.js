// -----soluong
//header
let amountElement = document.getElementById('amount')
let amount = amountElement.value
//console.log(amount)
let render = (amount) => {
    amountElement.value = amount
}
//handlePlus
let handlePlus = () =>{
    amount++
    render(amount);
}
//handleMinus
let handleMinus = () =>{
    if(amount>1)
    amount--;
    render(amount);
}
amountElement.addEventListener('input',() =>{
    amount = amountElement.value;
    //console.log(amount);
    amount = parseInt(amount);
    amount = (isNaN(amount)|| amount==0)?1:amount;
    render(amount);
    console.log(amount);
});

const btnthem = document.querySelector(".btnthemgiohang");
    btnthem.addEventListener("click",function(event){
        var btnItemm = event.target;
        var product = btnItemm.parentElement;
        var product = product.parentElement;
        var product = product.parentElement;
        var product = product.parentElement; 
        var product = product.parentElement;  
        var productImg= product.querySelector(".img_thongtinsanpham1 img").src;  
        var productName = product.querySelector("#carouselExampleAutoplaying-noidung h5").innerText;
        var productSize = product.querySelector(".btnsizes").innerText;
        var productQuatity = product.querySelector("#amount").value;
        var productPrice = product.querySelector("#carouselExampleAutoplaying-noidung p").innerText;
        addGioHang(productImg,productName,productSize,productQuatity,productPrice);
    })
    function addGioHang(productImg,productName,productSize,productQuatity,productPrice){
        var addtr = document.createElement("tr");
        var giohangItem = document.querySelectorAll(".form_giohang tbody tr");
        for(var i=0;i<giohangItem.length;i++)
            {
                var productN = document.querySelectorAll(".body_name");
                if(productN[i].innerHTML == productName){
                    alert("Sản phẩm của bạn đã có trong giỏ hàng");
                    return
                }
                console.log(productN);
            }
            // var trnoidung = '<tr><td><p><img src="'+productImg+'" alt=""></p></td><td><p class="body_name">'+productName+'</p></td><td><p>'+productSize+'</p></td><td><p>'+productQuatity+'</p></td><td><p>'+productPrice+'</p></td><td><p><i class="fa-solid fa-trash"></i></p></td></tr>'
            // addtr.innerHTML=trnoidung;
            // var banggiohang = document.querySelector('.form_giohang tbody');
           
    }