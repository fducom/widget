// Функція для відправки API-запиту
async function sendApiRequest() {
  try {
    const apiEndpoint = "https://example.com/api/stopCharging"; // Замініть на власний API-адресу
    const response = await fetch(apiEndpoint, {
      method: "POST", // або "GET" в залежності від потреби
      // Додайте інші параметри запиту, якщо необхідно
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Помилка при відправці API-запиту:", error);
    return null;
  }
}

// Створення віджета
const widget = new ListWidget();
widget.backgroundColor = new Color("#3498db"); // Колір фону віджета

// Відправка API-запиту при натисканні на кнопку
const button = widget.addText("Зупинити зарядку");
button.textColor = new Color("#ffffff"); // Колір тексту кнопки
button.centerAlignText(); // Вирівнювання тексту по центру

button.url = "scriptable:///run?name=StopCharging"; // Замініть на ім'я вашого скрипту в Scriptable

// Відображення інформації про зарядку (приклад)
const chargingStatus = "Зарядка: Активна";
const batteryLevel = "Рівень батареї: 80%";
const chargingSpeed = "Швидкість зарядки: 10 кВт";

widget.addText(chargingStatus);
widget.addText(batteryLevel);
widget.addText(chargingSpeed);

// Відображення віджета
if (config.runsInWidget) {
  Script.setWidget(widget);
} else {
  widget.presentMedium();
}

Script.complete();
