const events = [
    { id: 1, name: "Rock Concert", date: "2025-03-20", category: "music", description: "A live rock concert featuring top bands." },
    { id: 2, name: "Tech Expo", date: "2025-04-05", category: "technology", description: "Latest innovations in tech industry." },
    { id: 3, name: "Art Exhibition", date: "2025-03-28", category: "art", description: "Showcasing amazing art pieces." },
    { id: 4, name: "Marathon Championship", date: "2025-05-10", category: "sports", description: "A city-wide marathon for professional and amateur runners." },
    { id: 5, name: "Food Festival", date: "2025-04-15", category: "food", description: "Enjoy delicious food from different cultures." },
    { id: 6, name: "Business Summit", date: "2025-06-08", category: "business", description: "A networking event for entrepreneurs and investors." },
    { id: 7, name: "Basketball Finals", date: "2025-07-02", category: "sports", description: "Watch the top teams compete for the championship." },
    { id: 8, name: "Fashion Week", date: "2025-09-14", category: "fashion", description: "A showcase of the latest fashion trends from top designers." },
    { id: 9, name: "Science Fair", date: "2025-08-20", category: "education", description: "Innovative projects and experiments from young scientists." },
    { id: 10, name: "Film Festival", date: "2025-10-10", category: "entertainment", description: "Screenings of independent and blockbuster movies." }
];

function displayEvents(query, date, category) {
    const eventsContainer = document.getElementById("eventsContainer");
    eventsContainer.innerHTML = "";

    let filteredEvents = events.filter(event => {
        return (!query || event.name.toLowerCase().includes(query.toLowerCase())) &&
               (!date || event.date === date) &&
               (!category || event.category === category);
    });

    if (filteredEvents.length === 0) {
        eventsContainer.innerHTML = `<p class="text-center">No events found.</p>`;
        return;
    }

    filteredEvents.forEach(event => {
        const eventCard = document.createElement("div");
        eventCard.className = "col-md-4 mb-4";
        eventCard.innerHTML = `
            <div class="card p-3 shadow">
                <h5>${event.name}</h5>
                <p>${event.date}</p>
                <p>${event.category}</p>
                <a href="events-details.html?id=${event.id}" class="btn btn-primary">View Details</a>
            </div>
        `;
        eventsContainer.appendChild(eventCard);
    });
}

function displayEventDetails(eventId) {
    const event = events.find(event => event.id == eventId);
    if (event) {
        document.getElementById("eventTitle").textContent = event.name;
        document.getElementById("eventDate").textContent = `Date: ${event.date}`;
        document.getElementById("eventCategory").textContent = `Category: ${event.category}`;
        document.getElementById("eventDescription").textContent = event.description;
    }
}
