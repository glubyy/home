// Object containing suggestions based on user interests (more keywords could be added in future)
const suggestionOptions = {
    politics: 'Consider roles in political campaign management, public policy analysis, or community organizing.',
    public: 'Explore opportunities in public service, such as government administration or nonprofit management.',
    service: 'Explore opportunities in public service, such as government administration or nonprofit management.',
    community: 'Look into roles focused on community engagement, social work, or local government initiatives.',
    engagement: 'Look into roles focused on community engagement, social work, or local government initiatives.',
    diversity: 'Consider positions related to diversity and inclusion, equity, and social justice advocacy.',
    inclusion: 'Consider positions related to diversity and inclusion, equity, and social justice advocacy.',
};

let userInterests;

// Function to generate suggestions based on user interests submitted
function generateSuggestions() {
    const suggestionsParagraph = document.getElementById('suggestions');
    
    const lowerCaseInterests = userInterests.toLowerCase();

    const suggestion = suggestionOptions[lowerCaseInterests] || "Explore more roles in various fields based on your interests.";
    suggestionsParagraph.textContent = suggestion;

    document.getElementById('suggestedRoles').style.display = 'block';
}

// Event listener for user input in the interests field
document.getElementById('interests').addEventListener('input', function (event) {
    userInterests = event.target.value;
});

document.getElementById('submitBtn').addEventListener('click', function () {
    generateSuggestions();
});

// Array of upcoming events
const upcomingEvents = [
    { name: `Event 1`, date: `December 10, 2023` },
    { name: `Event 2`, date: `December 15, 2023` },
    { name: `Event 3`, date: `December 20, 2023` }
];

// Function to update the list of upcoming events on the website
function updateUpcomingEvents() {
    const eventsList = document.getElementById('eventsList');
    eventsList.innerHTML = ''; 

    upcomingEvents.forEach(function (event) {
        const listItem = document.createElement('li');
        listItem.textContent = `${event.name} - ${event.date}`;
        eventsList.appendChild(listItem); 
    });
}

updateUpcomingEvents();

function submitForm(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    const confirmationMessage = `Thank you, ${name}! We've received your interest. We'll be in touch via email (${email}).`;
    alert(confirmationMessage);

    document.getElementById('interestForm').reset();
}

document.getElementById('interestForm').addEventListener('submit', submitForm);

