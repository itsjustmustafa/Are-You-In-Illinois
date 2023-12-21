document.addEventListener("DOMContentLoaded", function () {
    // Use a free IP geolocation API to get the user's location based on their IP
    fetch('https://ipapi.co/json/')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const resultElement = document.getElementById('result');
            const state = data.region_code;
            const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
            if (state === 'IL' || timezone.includes("Chicago")) {
                resultElement.textContent = 'You are in Illinois!';
            } else {
                resultElement.textContent = 'You are not in Illinois.';
            }
        })
        .catch(error => {
            console.error('Error fetching location:', error);
            document.getElementById('result').textContent = 'Unable to determine your location.';
        });
});
