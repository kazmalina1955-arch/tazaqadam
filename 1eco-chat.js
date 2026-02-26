async function sendMessage() {
  const input = document.getElementById("userInput").value;
  const chatBox = document.getElementById("chatBox");

  chatBox.innerHTML += `<div><b>Вы:</b> ${input}</div>`;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer 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"
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "Ты Eco Assistant. Помогаешь сортировать мусор и объясняешь экологию простыми словами." },
        { role: "user", content: input }
      ]
    })
  });

  const data = await response.json();
  const reply = data.choices[0].message.content;

  chatBox.innerHTML += `<div><b>Eco Assistant:</b> ${reply}</div>`;
}