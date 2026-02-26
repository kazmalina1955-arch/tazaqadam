// Eco Assistant — простой AI чат MVP

const chatButton = document.createElement("button");
chatButton.innerText = "💬 Eco Assistant";
chatButton.style.position = "fixed";
chatButton.style.bottom = "20px";
chatButton.style.right = "20px";
chatButton.style.padding = "12px 16px";
chatButton.style.borderRadius = "12px";
chatButton.style.border = "none";
chatButton.style.background = "#2e7d32";
chatButton.style.color = "white";
chatButton.style.cursor = "pointer";
document.body.appendChild(chatButton);

const chatBox = document.createElement("div");
chatBox.style.position = "fixed";
chatBox.style.bottom = "70px";
chatBox.style.right = "20px";
chatBox.style.width = "300px";
chatBox.style.height = "350px";
chatBox.style.background = "white";
chatBox.style.border = "1px solid #ccc";
chatBox.style.borderRadius = "12px";
chatBox.style.display = "none";
chatBox.style.flexDirection = "column";
chatBox.style.padding = "10px";
chatBox.innerHTML = `
  <div style="font-weight:bold; margin-bottom:8px;">Eco Assistant</div>
  <div id="chatMessages" style="flex:1; overflow-y:auto; font-size:14px;"></div>
  <input id="chatInput" placeholder="Ваш вопрос..." style="margin-top:8px; padding:6px;">
`;
document.body.appendChild(chatBox);

chatButton.onclick = () => {
  chatBox.style.display = chatBox.style.display === "none" ? "flex" : "none";
};

const responses = {
  "как сортировать": "Пластик — отдельно, стекло — отдельно, бумага — отдельно.",
  "сколько можно заработать": "В среднем 50–150 тг за кг вторсырья.",
  "когда будет вывоз": "Вывоз планируется при накоплении от 1 тонны.",
  "что делать": "Сортируйте отходы и отправьте заявку через сайт."
};

document.addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    const input = document.getElementById("chatInput");
    const messages = document.getElementById("chatMessages");
    const text = input.value.toLowerCase();
    if (!text) return;

    const userMsg = document.createElement("div");
    userMsg.innerText = "Вы: " + text;
    messages.appendChild(userMsg);

    let reply = "Спасибо за вопрос! Мы добавим ответ скоро.";
    for (let key in responses) {
      if (text.includes(key)) {
        reply = responses[key];
      }
    }

    const botMsg = document.createElement("div");
    botMsg.innerText = "Eco Assistant: " + reply;
    messages.appendChild(botMsg);

    input.value = "";
    messages.scrollTop = messages.scrollHeight;
  }
});
