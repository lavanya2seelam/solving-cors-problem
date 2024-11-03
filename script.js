document.getElementById('fetchDataButton').addEventListener('click', () => {
    fetch('http://localhost:5001/')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log("Data received from server:", data);
            document.getElementById('result').textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            document.getElementById('result').textContent = 'Error fetching data';
        });
});