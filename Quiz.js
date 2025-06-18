document.getElementById("submit").addEventListener("click", () => {
  let score = 0;
  const questions = document.querySelectorAll(".question");

  questions.forEach((q, index) => {
    const correct = q.dataset.correct;
    const selected = q.querySelector("input[type='radio']:checked");

    const labels = q.querySelectorAll("label");
    labels.forEach(label => {
      label.classList.remove("correct", "incorrect");
    });

    if (selected) {
      if (selected.value === correct) {
        score++;
        selected.parentElement.classList.add("correct");
      } else {
        selected.parentElement.classList.add("incorrect");
        const correctOption = q.querySelector(input[value="${correct}"]);
        if (correctOption) {
          correctOption.parentElement.classList.add("correct");
        }
      }
    }
  });

  document.getElementById("result").innerText = `Você acertou ${score} de ${questions.length}`;
});