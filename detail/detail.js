import { getDog } from '../fetch-utils.js';
import { renderDogDetail } from '../render-utils.js';

const dogDetailContainer = document.getElementById('dog-detail-container');

async function fetchDog() {
// add params variable with urlsearchparams class
    const params = new URLSearchParams(window.location.search);

    const dogId = await getDog(params.get('id'));

    const singleDog = renderDogDetail(dogId);
    dogDetailContainer.append(singleDog);

}
fetchDog();
// on load
// get the id from URL
// use the id to fetch the dog
// render and append this dog's details to the container
