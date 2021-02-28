document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('joke-form')
  const jokeList = document.getElementById('joke-list')
  const newJokeLi = document.createElement('li')
  const username = document.getElementById('name-input').value
  let newJoke;

  let newFetchObj = {
        headers: {
          "Accept": "application/json"
        }
      }

  function fetchJoke(event){
    fetch('https://icanhazdadjoke.com/', newFetchObj)

      .then(res => res.json())
      .then(jokeData => {
        newJoke = jokeData.joke
        newJokeLi.innerHTML = `
        <span class="username">${event.target.name.value} says:</span> ${newJoke}
        `
        jokeList.appendChild(newJokeLi)
        form.reset()
      })
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault() 

    if(event.target.name.value === "") {
      return} else {
          fetchJoke(event) 
      }
  })
})
