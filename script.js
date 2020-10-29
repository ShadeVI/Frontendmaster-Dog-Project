const RANDOM_BREEDS_URL = 'https://dog.ceo/api/breeds/image/random';
const ALL_BREEDS_URL = 'https://dog.ceo/api/breeds/list/all';

const imageContainerEl = document.querySelector('.image-container');
const statusEl = document.querySelector('.status-result');
const selectEl = document.querySelector('.dog-select');
const dogImageEl = document.querySelector('.dog-image');
const spinnerEl = document.querySelector('.spinner');

function setImageValues(data){
    dogImageEl.src = data.message;
    dogImageEl.alt = 'cute doggo';
    
    statusEl.innerText = data.status;
    if (data.status == 'success'){
        if(statusEl.classList.contains('error')){
            statusEl.classList.remove('error')
        }
        statusEl.classList.add('success');
    } else {
        if(statusEl.classList.contains('success')){
            statusEl.classList.remove('success')
        }
        statusEl.classList.add('error');
    }
}

function populateSelect(){

    fetch(ALL_BREEDS_URL)
        .then(response => {
            return response.json();
        })
        .then(data => {
            const listBreed = Object.keys(data.message);
            listBreed.forEach(function(el){
                const option = document.createElement("option");
                option.value = el;
                option.innerText = el;
                selectEl.appendChild(option);
            })
        });

}

function getDog(breed){
    spinnerEl.classList.add('show');
    dogImageEl.classList.remove('show');
    let url;
    if (breed === undefined){
        url = RANDOM_BREEDS_URL;
    } else {
        url = `https://dog.ceo/api/breed/${breed}/images/random`;
    }

    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            setImageValues(data);
        })
}

document.addEventListener('DOMContentLoaded', populateSelect);
document.querySelector('.add-doggo').addEventListener('click', () => {
    getDog();
});
selectEl.addEventListener('change', event => {
    getDog(event.target.value);
})
dogImageEl.addEventListener('load', () => {
    spinnerEl.classList.remove('show');
    dogImageEl.classList.add('show');
})