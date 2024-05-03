document.addEventListener('DOMContentLoaded', function() {
    const userForm = document.getElementById('userForm');
    const userCard = document.getElementById('userCard');
    const clearDataButton = document.getElementById('clearData');

    // Function to update user card UI
    function updateUserCard(user) {
        userCard.innerHTML = `
            <h2>User Information Card</h2>
            <p><strong>First Name:</strong> ${user.firstName}</p>
            <p><strong>Last Name:</strong> ${user.lastName}</p>
            <p><strong>Country:</strong> ${user.country}</p>
            <p><strong>Phone Number:</strong> ${user.phone}</p>
            <p><strong>State:</strong> ${user.state}</p>
            <p><strong>City:</strong> ${user.city}</p>
            <p><strong>Village:</strong> ${user.village}</p>
        `;
    }

    // Event listener for form submission
    userForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Get form values
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const country = document.getElementById('country').value;
        const phone = document.getElementById('phone').value;
        const state = document.getElementById('state').value;
        const city = document.getElementById('city').value;
        const village = document.getElementById('village').value;

        // Create user object
        const user = {
            firstName: firstName,
            lastName: lastName,
            country: country,
            phone: phone,
            state: state,
            city: city,
            village: village
        };

        // Store user data in local storage
        localStorage.setItem('userData', JSON.stringify(user));

        // Update user card UI
        updateUserCard(user);
    });

    // Event listener for clear data button
    clearDataButton.addEventListener('click', function() {
        localStorage.removeItem('userData');
        userCard.innerHTML = ''; // Clear user card UI
    });

    // Check if user data exists in local storage on page load
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData) {
        updateUserCard(userData);
    }
});
