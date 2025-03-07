const events = [
    { id: 1, name: "Rock Concert", date: "2025-03-20", category: "music", description: "A live rock concert featuring top bands." },
    { id: 2, name: "Tech Expo", date: "2025-04-05", category: "technology", description: "Latest innovations in tech industry." },
    { id: 3, name: "Art Exhibition", date: "2025-03-28", category: "art", description: "Showcasing amazing art pieces." },
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
