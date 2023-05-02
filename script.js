const URL = "https://api.thecatapi.com/v1/images/search"
// const URL = "https://dog.ceo/api/breeds/image/random"
getUrl = async () => {
    try {
        return fetch(URL)
            .then(response => response.json())
            .then(response => response[0].url)
    } catch (error) {
        console.error(error)
    }
}

setBackground = async () => {
    try {
        getUrl().then(response => document.body.style.backgroundImage = `url(${response})`)
    } catch (error) {
        console.log(error)
    }
}
document.body.addEventListener('click', setBackground)

setBackground()