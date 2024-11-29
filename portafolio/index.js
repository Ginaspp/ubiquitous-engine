
function copyEmail() {  
    const email = document.getElementById('email').textContent;  
    navigator.clipboard.writeText(email).then(() => {  
        alert('Email copiado: ' + email);  
    }).catch(err => {  
        console.error('Error al copiar: ', err);  
    });  
}  

 