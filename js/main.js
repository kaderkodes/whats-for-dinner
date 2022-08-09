
document.querySelector('button').addEventListener('click', getFood)


function getFood() {
  const url = `https:www.themealdb.com/api/json/v1/1/random.php`
  fetch(url)
    .then(res => res.json()) 
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

