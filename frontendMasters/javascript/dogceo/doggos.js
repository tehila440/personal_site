/* const BREEDS_URL ="https://dog.ceo/api/breeds/image/random";

function addDoggo () {
    fetch(BREEDS_URL)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            const img = document.createElement('img');
            img.src = data.message;
            img.alt = 'Cute Doggo';

            document.querySelector('.doggos').appendChild(img);
    })
}
    
document.querySelector('.add-doggo').addEventListener('click', addDoggo); */

//pulling photos from a website ans selecting the breeds class from the html

const BREEDS_URL = 'https://dog.ceo/api/breeds/list/all'
const select = document.querySelector('.breeds');

//the BREEDS_URL pulls in the meta data.  it is a list of the breeds

fetch(BREEDS_URL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        //console.log(data);
        const breedsObject = data.message;
        const breedsArray = Object.keys(breedsObject);
       
        for (let i = 0;i < breedsArray.length; i++) {
            const option = document.createElement('option');
            option.value = breedsArray[i];
            option.innerText = breedsArray[i];
            select.appendChild(option);
        }
    })

    select.addEventListener('change', function(event) {
        //make url
        //show loading spinner
        //fetch from api
        //use url to change curent image
        //stop showing loading spinner
        let url = `https://dog.ceo/api/breed/${event.target.value}/images/random`

    getDoggo(url);

    });
    

    const img = document.querySelector('.dog-img');
    const spinner = document.querySelector('.spinner');

    function getDoggo (url) {
        spinner.classList.add('show');
        img.classList.remove('show');
        fetch(url) 
            .then(function (response) {
                return response.json()
            })
            .then(function(data) {
                img.src = data.message;
              /*   spinner.classList.remove('show');
                img.classList.add('show'); */
            })
    }

    img.addEventListener('load', function() {
        spinner.classList.remove('show');
        img.classList.add('show');
    })