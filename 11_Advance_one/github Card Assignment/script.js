const card = document.querySelector('.card');
const image = document.createElement('img');
const naMe = document.createElement('h3');
const follower = document.createElement('p');
const following = document.createElement('p');
const publicRepo = document.createElement('p');
const company = document.createElement('p');
const loCation = document.createElement('p');
const githubUrl = document.createElement('a');
const submit = document.querySelector('#submit');
let username;
let requestUrl;

submit.addEventListener('click', function (e) {
    e.preventDefault();

    username = document.querySelector('#username').value;
    requestUrl = "https://api.github.com/users/" + username;
    console.log(requestUrl);

    if (username.trim() !== '') {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', requestUrl);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) { // Check if request is complete
                if (xhr.status === 200) { // Check if request was successful
                    try {
                        card.innerHTML = ''; // Clear previous content

                        const data = JSON.parse(this.responseText);

                        // Set the card elements
                        console.log(data);
                        naMe.innerHTML = data.name || username;
                        image.setAttribute('src', data.avatar_url || 'default-avatar.jpg');
                        githubUrl.setAttribute('href', data.html_url);
                        githubUrl.textContent = 'GitHub Profile';
                        company.innerText = `Company: ${data.company || 'N/A'}`;
                        githubUrl.setAttribute('target','_blank')
                        follower.innerText = `Followers: ${data.followers || 0}`;
                        following.innerText = `Following: ${data.following || 0}`;
                        loCation.innerText = `Location: ${data.location || 'N/A'}`;
                        publicRepo.innerText = `Public Repositories: ${data.public_repos || 'N/A'}`;

                        naMe.classList.add('card-title');
                        company.classList.add('card-text');
                        follower.classList.add('card-text');
                        following.classList.add('card-text');
                        publicRepo.classList.add('card-text');
                        loCation.classList.add('card-text');
                        githubUrl.classList.add('card-link');

                        // Creating a container for the info to organize it better
                        const infoContainer = document.createElement('div');
                        infoContainer.classList.add('card-info');

                        // Append the elements in a structured manner
                        infoContainer.appendChild(company);
                        infoContainer.appendChild(loCation);
                        infoContainer.appendChild(follower);
                        infoContainer.appendChild(following);
                        infoContainer.appendChild(publicRepo);

                        card.appendChild(image);
                        card.appendChild(naMe);
                        card.appendChild(infoContainer);
                        card.appendChild(githubUrl);

                    } catch (e) {
                        console.error('Error parsing JSON:', e);
                    }
                } else {
                    console.error('Error fetching data:', xhr.statusText);
                }
            }
        };
        xhr.send();
    } else {
        console.error('Username cannot be empty');
    }
});
