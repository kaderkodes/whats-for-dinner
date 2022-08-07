
document.querySelector('button').addEventListener('click', getFood)


function getFood() {
  fetch("https:www.themealdb.com/api/json/v1/1/random.php")
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data.meals[0])

      document.querySelector('#meal').innerText = data.meals[0].strMeal
      document.querySelector('img').src = data.meals[0].strMealThumb
      document.querySelector('#instructions').innerText = data.meals[0].strInstructions
      document.querySelector('.hidden').classList.toggle("hidden")

    })

    .catch(err => {
      console.log(`error ${err}`)
    });
}

