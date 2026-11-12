const botaoTema = document.getElementById("btn-tema");

function alternarTema() {
  document.body.classList.toggle("claro");
  const temaClaro = document.body.classList.contains("claro");
  botaoTema.textContent = temaClaro ? "☾" : "☼";
  botaoTema.setAttribute("aria-label", temaClaro ? "Ativar tema escuro" : "Ativar tema claro");
}

botaoTema.addEventListener("click", alternarTema);

const trilho = document.getElementById("trilho-projetos");
document.getElementById("btn-proximo").addEventListener("click", () => {
  trilho.scrollBy({ left: 290, behavior: "smooth" });
});
document.getElementById("btn-anterior").addEventListener("click", () => {
  trilho.scrollBy({ left: -290, behavior: "smooth" });
});

function animarBarras() {
  document.querySelectorAll(".nivel").forEach((barra) => {
    barra.style.width = barra.dataset.nivel + "%";
  });
}

const secaoSkills = document.getElementById("skills");
if ("IntersectionObserver" in window) {
  const observadorSkills = new IntersectionObserver((entradas, observador) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        animarBarras();
        observador.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.25 });
  observadorSkills.observe(secaoSkills);
} else {
  animarBarras();
}

const formulario = document.getElementById("form-contato");
const retornoFormulario = document.getElementById("retorno-formulario");
formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  if (!nome || !email || !mensagem) {
    retornoFormulario.textContent = "Preencha todos os campos antes de enviar.";
    return;
  }
  retornoFormulario.textContent = `Obrigado, ${nome}! O formulário está funcionando como demonstração.`;
  formulario.reset();
});
