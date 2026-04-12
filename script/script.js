// CHECKOUT WHATSAPP

document.getElementById("checkoutBtn").addEventListener("click", function(){

    let pesan = "Halo Lunara Bakes, saya ingin pesan:%0A";
    
    keranjang.forEach(item=>{
    pesan += `- ${item.nama} (${item.qty})%0A`;
    });
    
    const url = "https://wa.me/6283149466923?text=" + pesan;
    
    window.open(url, "_blank");
    
    });