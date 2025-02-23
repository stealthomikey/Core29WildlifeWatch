// Function to generate badges
function createAnimalBadge(name, tier) {
    const tierSymbol = {bronze:'③', silver:'②', gold:'①'}[tier];
    return `
    <div class="badge ${tier}">
        <div class="wreath">
            <svg viewBox="0 0 100 100">
                <path class="leaves" d="M20,50 Q30,35 40,50 Q50,65 60,50 Q70,35 80,50 Q70,65 60,50 Q50,35 40,50 Q30,65 20,50" />
                <path class="ribbon" d="M25,75 L50,85 L75,75 L75,70 L50,80 L25,70 Z" />
            </svg>
        </div>
        <div class="medal">
            <div class="tier-icon">${tierSymbol}</div>
        </div>
        <div class="name-plate">${name}</div>
    </div>
    `;
}

// Implementation example:
const container = document.querySelector('.badges-container');
container.innerHTML += createAnimalBadge('Brown Bear', 'bronze');
container.innerHTML += createAnimalBadge('Snow Owl', 'silver');