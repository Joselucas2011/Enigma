document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    const password = document.getElementById("password").value;
    
    // Verifica se a senha está correta
    if (password === "kkkk") {
        // Redireciona para outro arquivo HTML
        window.location.href = "index.html";
    } else {
        // Alerta caso a senha esteja errada
        alert("Senha incorreta! Tente novamente.");
    }
    document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    const password = document.getElementById("password").value;
    
    // Verifica se a senha está correta
    if (password === "kkkk") {
        // Redireciona para outro arquivo HTML
        window.location.href = "pagina-secreta.html";
    } else {
        // Alerta caso a senha esteja errada
        alert("Senha incorreta! Tente novamente.");
    }
});


});

