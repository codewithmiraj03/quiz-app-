const correctAnswers = ["Lion", "Islamabad", "Urdu"]; 
const totalQuestions = correctAnswers.length; 
const result = document.querySelector('#result');

const btn = document.querySelector("button")

 btn.addEventListener("click", function() {
    let score = 0; 

    
    for (let i = 0; i < totalQuestions; i++) {
        let selectedOption = document.querySelector(`input[name="question${i + 1}"]:checked`);
        if (selectedOption && selectedOption.value === correctAnswers[i]) {
            score++;    
        }

        let percentage = (score / totalQuestions) * 100;

        result.innerText = `You scored: ${percentage.toFixed(0)}%`;
        
    }
});