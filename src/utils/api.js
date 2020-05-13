export async function getAllData() {
    const response = await fetch(
        "https://dog.ceo/api/breeds/list/all"
    );
    return response.json();
}

export async function getMyBreed(breedName) {
    const response = await fetch(
        `https://dog.ceo/api/breed/${breedName}/images`
    );
    if (!response.ok) throw new Error(response.message);
    return response.json();
}
