//Получаю элементы
const birthdayInput = document.getElementById("birthdayDate");
const calculateButton = document.getElementById("calculateButton");
const message = document.querySelector(".message");

//Проверяю, заполнена ли дата и отображаю результат
calculateButton.addEventListener("click", () => {
  if (!birthdayInput.value) {
    message.textContent = "Пожалуйста, введите дату рождения.";
    message.style.color = "red";
  } else {
    const diffInDays = calculateDaysToBDay();
    message.textContent =
      "До вашего дня рождения осталось " +
      diffInDays +
      " " +
      daysTitle(diffInDays);
    message.style.color = "black";
  }
});

//Получаю текущую дату
//Получаю введённую дату
//Рассчитываю разницу в днях
function calculateDaysToBDay() {
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayInput.value);
  const differenceInMs = birthdayDate - currentDate;
  const diffInDays = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));
  return diffInDays;
}
//Правильное склонение слова "день"
function daysTitle(diffInDays) {
  if (diffInDays % 10 === 1 && diffInDays % 100 !== 11) {
    return "день";
  } else if (
    (diffInDays % 10 === 2 || diffInDays % 10 === 3 || diffInDays % 10 === 4) &&
    (diffInDays % 100 < 10 || diffInDays % 100 > 20)
  ) {
    return "дня";
  } else {
    return "дней";
  }
}
