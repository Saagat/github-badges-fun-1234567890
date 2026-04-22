document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        
        card.addEventListener('click', () => {
            const badgeName = card.querySelector('h3').textContent;
            console.log(`Exploring ${badgeName}...`);
            // Add custom logic for badge details if needed
        });
    });

    console.log("Stellar Dev Suite Dashboard Initialized.");
});
