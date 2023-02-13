const title = document.querySelector(".title");
const ingridient = document.querySelector(".ingridient");
const description = document.querySelector(".description");
const calories = document.querySelector(".calories");

const pTitle = document.querySelector(".pTitle");
const pDescription = document.querySelector(".pDescription");
const pCalories = document.querySelector(".pCalories");
const pIngridients = document.querySelector(".pIngridients");


const btnGetPhoto = document.querySelector(".getPhoto")
const btnAddIngridient = document.querySelector(".addIngridient")
const btnpRecipe = document.querySelector('.pRecipe')


btnGetPhoto.onclick = () => {
    function randomImage () {
        fetch('https://www.themealdb.com/api/json/v1/1/random.php')
            .then(res => res.json())
            .then(data => {
                imageLink = data.meals[0].strMealThumb
                image.src = imageLink
            })
    }
    randomImage()
}

const allIngridients = [];

btnAddIngridient.onclick = () => {
    allIngridients.push(ingridient.value)
    ingridient.value = ""
}

btnpRecipe.onclick = () => {
    const receptas = {
            title: title.value,
            description: description.value,
            calories: calories.value
        }
        if (receptas.title === "") {
            alert(" Please enter the title")
            
        }
       else if (allIngridients.length < 3 ) {
        alert("please enter at least three ingridients")
       }

       else if (receptas.description === "") {
        alert("please enter the description")
       }
       
       else if (receptas.calories <= 0) {
        alert("enter the correct amount of calories")
       }

        
        else {
        pTitle.innerHTML = receptas.title
        pDescription.innerHTML = receptas.description
        pCalories.innerHTML = receptas.calories + ' calories'
        pIngridients.innerHTML = 'All the ingridients are:   ' + allIngridients}
}


function addRecipes(obj){
    

    let localKey = localStorage.getItem("receptas")
    if(localKey) {
        localKey = JSON.parse(localKey)
        if (localKey.find(title === obj.title)) return
        localKey.push(obj)
        console.log(localKey)
        localStorage.setItem("receptas", JSON.stringify(localKey))
    } else {
        localStorage.setItem("receptas", JSON.stringify(recipeList))
    }
}
