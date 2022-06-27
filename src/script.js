class PetGenerator {
    static async getPetImage(pet) {
        const petImageContainer = document.getElementById(`${pet}Container`);
        const petImage = document.createElement('img');
        const image = await fetch(`https://api.the${pet}api.com/v1/images/search`)
            .then((response) => response.json())
            .then((response) => response[0].url);

        console.log('carregando');
        petImageContainer.innerHTML = '';
        petImage.classList.add('pet__petImage');
        petImage.alt = pet;
        petImage.src = image;

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

async function test() {
    const response = await fetch(`https://api.thedogapi.com/v1/images/search`)
    const arrayJson = await response.json();
    const widthDog = arrayJson[0].url;

    const numero = 1;

    console.log(arrayJson)
}

test()
