// Змінні, що відображатимуть інформацію про зарядку
const chargingStatus = "Зарядка: Активна";
const batteryLevel = "Рівень батареї: 80%";
const chargingSpeed = "Швидкість зарядки: 10 кВт";

// Створюємо віджет
const widget = new ListWidget();

// Додаємо інформацію про зарядку
widget.addText(chargingStatus);
widget.addText(batteryLevel);
widget.addText(chargingSpeed);

// Додаємо кнопку "Стоп"
const stopButton = widget.addButton("Стоп");
stopButton.url = "your_api_endpoint_to_stop_charging"; // Замініть це на власний API-запит для зупинки зарядки

// Відображаємо віджет
if (config.runsInWidget) {
  Script.setWidget(widget);
} else {
  widget.presentMedium();
}

Script.complete();
