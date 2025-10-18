// --- Lógica del formulario ---
const form = document.getElementById("registroForm");
const resultado = document.getElementById("resultado");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value;
  const curso = document.getElementById("curso").value;
  const modalidad = document.querySelector('input[name="modalidad"]:checked').value;
  const motivo = document.getElementById("motivo").value;

  resultado.style.display = "block";
  resultado.innerHTML = `
    <h3>📘 Registro Completado</h3>
    <p><strong>Nombre:</strong> ${nombre}</p>
    <p><strong>Correo:</strong> ${correo}</p>
    <p><strong>Curso seleccionado:</strong> ${curso}</p>
    <p><strong>Modalidad:</strong> ${modalidad}</p>
    <p><strong>Motivo:</strong> ${motivo}</p>
    <p>✅ ¡Gracias por registrarte! Te enviaremos más información por correo.</p>
  `;

  form.reset();
});
