// script.js

function getById(id) {
  return document.getElementById(id);
}

function redirecionar() {
  const nomeSelecionado = document.getElementById("nomes").value;

  localStorage.setItem("nomeConvidado", nomeSelecionado);

  setTimeout(() => {
    window.location.href = "./page/inicial.html"; // nome da sua segunda página
  }, 1000);
}

window.addEventListener("DOMContentLoaded", () => {
  // Verifica se existe o span com id "nome"
  const spanNome = document.getElementById("nome");

  if (spanNome) {
    const nome = localStorage.getItem("nomeConvidado");

    // Se houver nome salvo, coloca no span
    if (nome) {
      spanNome.textContent = nome;
    }
  }
});
