document.getElementById('Btn').addEventListener('click',fetchUserDetail);

async function fetchUserDetail() {
    try {
        const response = await fetch('https://randomuser.me/api/?results=5');

        if (!response.ok) {
            throw new Error('Network response was not ok');      
        }

        const data = await response.json();
        const users = data.results;

        const profilesContainer = document.getElementById('profilesContainer');
        const profilesTableBody = document.querySelector('#profilesTable tbody');


        profilesContainer.innerHTML = '';
        profilesTableBody.innerHTML = '';

        users.forEach(user => {
            
            const profileCard = document.createElement('div');
            profileCard.classList.add('profile-card');
            
            const profileImage = document.createElement('img');
            profileImage.src = user.picture.medium;
            profileImage.alt = `${user.name.first} ${user.name.last}`;
            
            const profileInfo = document.createElement('div');
            profileInfo.classList.add('profile-info');
            profileInfo.innerHTML = `<h3>${user.name.first} ${user.name.last}</h3><p>${user.email}</p>`;
            
            profileCard.appendChild(profileImage);
            profileCard.appendChild(profileInfo);
            profilesContainer.appendChild(profileCard);

            
            const tableRow = document.createElement('tr');
            tableRow.innerHTML = `<td>${user.name.first} ${user.name.last}</td><td>${user.email}</td>`;
            profilesTableBody.appendChild(tableRow);
        });



        
    } catch (error) {
        console.error ('Error fetching users: ', error ) ;
    }

    
}