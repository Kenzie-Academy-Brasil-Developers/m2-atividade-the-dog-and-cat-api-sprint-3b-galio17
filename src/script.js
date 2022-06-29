class PetGenerator {
    static async getPetImage(pet) {
        const petImageContainer = document.getElementById(`${pet}Container`);
        const petImage = document.createElement('img');

        petImageContainer.innerHTML = '';

        petImage.classList.add('pet__petImage');
        petImage.alt = pet;
        petImage.src = await fetch(`https://api.the${pet}api.com/v1/images/search`)
            .then((response) => response.json())
            .then((response) => response[0].url);

        petImageContainer.append(petImage);
    }

    static clickEvent() {
        addEventListener('click', (event) => {
            if(event.target.id === 'dogButton') {
                this.getPetImage('dog');
            } else if(event.target.id === 'catButton') {
                this.getPetImage('cat');
            }
        });
    }
}

PetGenerator.clickEvent();