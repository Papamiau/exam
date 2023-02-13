let recipes = [];

function getRecipes() {
  recipes = JSON.parse(window.localStorage.getItem("receptas"));
  displayRecipes(recipes);
}

console.log(recipes)