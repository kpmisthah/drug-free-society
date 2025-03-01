
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
