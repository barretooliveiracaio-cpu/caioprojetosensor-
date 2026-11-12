const gasSlider = document.getElementById("gasSlider");
const sensorValue = document.getElementById("sensorValue");
const status = document.getElementById("status");
const greenLed = document.getElementById("greenLed");
const redLed = document.getElementById("redLed");
const buzzer = document.getElementById("buzzer");
const message = document.getElementById("message");

// Limite ilustrativo do simulador
const ALERT_LIMIT = 400;

function updateSimulator() {
  const value = Number(gasSlider.value);

  sensorValue.textContent = value;

  if (value >= ALERT_LIMIT) {
    status.textContent = "ALERTA: NÍVEL ELEVADO";
    status.className = "status danger";

    greenLed.classList.remove("active");
    redLed.classList.add("active");
    buzzer.classList.add("active");

    message.textContent =
      "Atenção! O sistema identificou uma leitura acima do limite configurado.";
  } else {
    status.textContent = "AMBIENTE NORMAL";
    status.className = "status safe";

    greenLed.classList.add("active");
    redLed.classList.remove("active");
    buzzer.classList.remove("active");

    message.textContent =
      "Sistema funcionando normalmente.";
  }
}

gasSlider.addEventListener("input", updateSimulator);

// Inicia o simulador
updateSimulator();