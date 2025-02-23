function showMap(lat, lng) {
    const modal = document.getElementById('mapModal');
    const iframe = document.getElementById('mapFrame');
    
    // Replace with your Google Maps API Key
    const apiKey = 'YOUR_API_KEY_HERE';
    iframe.src = `https://www.google.com/maps/embed/v1/view?key=${apiKey}&center=${lat},${lng}&zoom=12`;
    
    modal.style.display = 'block';
}

function closeMap() {
    document.getElementById('mapModal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('mapModal');
    if (event.target === modal) {
        closeMap();
    }
}