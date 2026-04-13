// CHECKOUT WHATSAPP

function checkoutWA(){

    let keranjang = JSON.parse(localStorage.getItem("keranjang")) || [];
    
    if(keranjang.length === 0){
        alert("Keranjang kosong 😢");
        return;
    }
    
    let pesan = "Halo Lunara Bakes, saya ingin pesan:%0A";
    let total = 0;
    
    keranjang.forEach(item => {
    
    let subtotal = item.harga * item.qty;
    
    pesan += `- ${item.nama} (${item.qty} pcs) = Rp ${subtotal}%0A`;
    
    total += subtotal;
    
    });
    
    pesan += `%0ATotal: Rp ${total}`;
    
    window.open(`https://wa.me/6283149466923?text=${pesan}`);
    
    }