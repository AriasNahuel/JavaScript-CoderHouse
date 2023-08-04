function mensajeAgregarCarrito() {
    Swal.fire({
        icon: 'success',
        title: 'Producto agregado al carrito',
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
}

function mensajeEliminarCarrito(){
    Swal.fire({
        icon: 'warning',
        title: 'Producto eliminado del carrito',
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
}

function beepAgregarItem() {
    let beep = new Audio("../snd/beep-sound-8333.mp3");  
    beep.play();
}
