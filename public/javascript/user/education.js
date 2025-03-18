
function showTab(tabId) {
    // Remove active class from all nav cards
    document.querySelectorAll('.nav-card').forEach(card => {
        card.classList.remove('active');
    });
    
    // Add active class to selected nav card
    const selectedNav = document.querySelector(`.nav-card:nth-child(${
        {'blog': 1, 'videos': 2, 'quizzes': 3, 'infographics': 4}[tabId]
    })`);
    if (selectedNav) {
        selectedNav.classList.add('active');
    }
    
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Show selected tab
    const selectedTab = document.getElementById(tabId);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }
}

function selectAnswer(button) {
    const quizId = button.getAttribute("data-quiz-id");
    const quizContainer = document.querySelector(`[data-quiz-id="${quizId}"]`);
    const options = quizContainer.querySelectorAll(".quiz-option");
    const feedback = quizContainer.querySelector(".feedback");
    const isCorrect = button.getAttribute("data-correct") === "true";
  
    // Disable all options
    options.forEach((opt) => {
      opt.disabled = true;
      opt.classList.remove("hover:bg-gray-50");
    });
  
    // Show result
    if (isCorrect) {
      button.classList.add("bg-green-100", "border-green-500");
      feedback.textContent = "Correct! Well done.";
      feedback.classList.add("text-green-600");
    } else {
      button.classList.add("bg-red-100", "border-red-500");
      feedback.textContent = "Incorrect!";
      feedback.classList.add("text-red-600");
      quizContainer.querySelector(`[data-correct="true"]`).classList.add("bg-green-100", "border-green-500");
    }
    feedback.style.display = "block";
  }
