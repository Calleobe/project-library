/*Here we have created two different arrays that you can work with if you want.
If you choose to create your own arrays with elements, just make sure that some
of the properties make sense to filter on, and some to sort on.*/

const recipes = [
  {
    name: "Individual vegetarian lasagnes",
    cuisineType: ["italian"],
    ingredients: [
      "1.2 kg cherry tomatoes",
      "5 sprigs of fresh thyme",
      "extra virgin olive oil",
      "2 shallots",
      "2 cloves of garlic",
      "500 g baby spinach",
      "8-12 fresh or dried lasagne sheets",
      "350 g ricotta cheese",
      "WHITE SAUCE",
      "600 ml milk",
      "25 g unsalted butter",
      "2 heaped tablespoons flour",
      "150 g vegetarian sharp, mature cheese",
      "100 g mozzarella",
    ],
    source: "Jamie Oliver",
    totalTime: 130,
    url: "http://www.jamieoliver.com/recipes/vegetables-recipes/individual-vegetarian-lasagnes/",
    image: "./recipe-images/individual-vegetarian-lasagnes.jpg",
  },
  {
    name: "Vegetarian Stir-Fried Garlic Scape",
    cuisineType: ["Balanced"],
    ingredients: [
      "8 oz. garlic scapes",
      "3 oz. baby corn",
      "3 oz. carrots",
      "1 oz. dried shiitake mushrooms",
      "1 clove of garlic sliced thinly",
      "3 slices of fresh ginger root",
      "2 tablespoons vegetable oil",
      "1/4 cup shaoxing cooking wine",
      "1/4 vegetarian stock or water",
      "1 tablespoon light soy sauce",
      "1 teaspoon sugar",
      "1 teaspoon cornstarch",
      "1/4 teaspoon ground white pepper",
    ],
    source: "Red Cook",
    totalTime: null,
    url: "http://redcook.net/2010/06/16/garlic-scape-an-off-menu-treat/",
    image: "./recipe-images/vegetarian-stir-fried-garlic-s.jpg",
  },
  {
    name: "Cheat’s cheesy focaccia",
    cuisineType: ["italian"],
    ingredients: [
      "500g pack bread mix",
      "2 tbsp olive oil , plus a little extra for drizzling",
      "25g parmesan (or vegetarian alternative), grated",
      "75g dolcelatte cheese (or vegetarian alternative)",
    ],
    source: "BBC Good Food",
    totalTime: 40,
    url: "https://www.bbcgoodfood.com/recipes/cheats-cheesy-focaccia",
    image: "./recipe-images/cheat’s-cheesy-focaccia.jpg",
  },
  {
    name: "Vegetarian Shepherd's Pie",
    cuisineType: ["Balanced", "High-Fiber"],
    ingredients: [
      "2 tablespoons extra-virgin olive oil",
      "1 large onion, finely diced",
      "2 carrots, peeled and thinly sliced",
      "2 celery stalks, thinly sliced",
      "10 ounces cremini mushrooms, trimmed and sliced",
      "1 tablespoon tomato paste",
      "1 tablespoon vegetarian Worcestershire sauce, such as Annie's Naturals",
      "1 dried bay leaf",
      "1 cup French green lentils, picked over",
      "Kosher salt and freshly ground pepper",
      "1 cup frozen peas",
      "2 pounds Yukon Gold potatoes, scrubbed and cut into 1 1/2-inch pieces",
      "4 cloves garlic",
      "4 tablespoons unsalted butter",
      "1/2 cup whole milk, warmed",
    ],
    source: "Martha Stewart",
    totalTime: 120,
    url: "https://www.marthastewart.com/1535235/vegetarian-shepherds-pie",
    image: "./recipe-images/vegetarian-shepherd's-pie.jpg",
  },
  {
    name: "Chicken Paprikash",
    cuisineType: ["Low-Carb"],
    ingredients: [
      "640 grams chicken - drumsticks and thighs ( 3 whole chicken legs cut apart)",
      "1/2 teaspoon salt",
      "1/4 teaspoon black pepper",
      "1 tablespoon butter – cultured unsalted (or olive oil)",
      "240 grams onion sliced thin (1 large onion)",
      "70 grams Anaheim pepper chopped (1 large pepper)",
      "25 grams paprika (about 1/4 cup)",
      "1 cup chicken stock",
      "1/2 teaspoon salt",
      "1/2 cup sour cream",
      "1 tablespoon flour – all-purpose",
    ],
    source: "No Recipes",
    totalTime: 80,
    url: "http://norecipes.com/recipe/chicken-paprikash/",
    image: "./recipe-images/chicken-paprikash.jpg",
  },
  {
    name: "Baked Chicken",
    cuisineType: ["american"],
    ingredients: [
      "6 bone-in chicken breast halves, or 6 chicken thighs and wings, skin-on",
      "1/2 teaspoon coarse salt",
      "1/2 teaspoon Mrs. Dash seasoning",
      "1/4 teaspoon freshly ground black pepper",
    ],
    source: "Martha Stewart",
    totalTime: 90,
    url: "http://www.marthastewart.com/318981/baked-chicken",
    image: "./recipe-images/baked-chicken.jpg",
  },
  {
    name: "Deep Fried Fish Bones",
    cuisineType: ["south east asian"],
    ingredients: ["8 small whiting fish or smelt", "4 cups vegetable oil"],
    source: "Serious Eats",
    totalTime: 31,
    url: "http://www.seriouseats.com/recipes/2011/03/deep-fried-fish-bones-recipe.html",
    image: "./recipe-images/deep-fried-fish-bones.jpg",
  },
  {
    name: "Burnt-Scallion Fish",
    cuisineType: ["chinese"],
    ingredients: [
      "2 bunches scallions",
      "8 tbsp. butter",
      "2 8-oz. fish filets",
    ],
    source: "Saveur",
    totalTime: 70,
    url: "http://www.saveur.com/article/Recipes/Burnt-Scallion-Fish",
    image: "./recipe-images/fish-dish.jpg",
  },
  {
    name: "Curry-Crusted Fish",
    cuisineType: ["south east asian"],
    ingredients: [
      "3 slices bread , about 85g/3oz in total",
      "1 lime",
      "1.0 tbsp Korma curry paste",
      "4 thick white fish fillets",
    ],
    source: "BBC Good Food",
    totalTime: 80,
    url: "http://www.bbcgoodfood.com/recipes/4717/",
    image: "./recipe-images/fish-dish.jpg",
  },
  {
    name: "Meat Stock",
    cuisineType: "american",
    ingredients: [
      "2.5 pounds beef marrow bones",
      "1 large onion, quartered",
      "2 carrots, sliced",
      "1 leek, cleaned and sliced",
      "2 celery stalks, sliced",
      "2.5 pounds organic beef stew meat, cubed",
      "2 tablespoons tomato paste",
      "5 cloves garlic",
      "2 bay leaves",
      "3 sprigs thyme",
      "3 sprigs Italian parsley",
      "1/2 teaspoon black peppercorns",
    ],
    source: "Food52",
    totalTime: 60,
    url: "https://food52.com/recipes/3712-meat-stock",
    image: "./recipe-images/meat.jpg",
  },
  {
    name: "Homemade Meat Broth",
    cuisineType: "american",
    ingredients: [
      "1 teaspoon salt",
      "1 carrot, peeled",
      "1 medium onion, peeled",
      "2 or 3 celery stalks",
      "¼ red or yellow bell pepper, stripped of all its seeds",
      "1 small boiling potato, peeled",
      "1 ripe, fresh tomato, or 1 canned Italian plum tomato, drained of juice",
      "5 pounds assorted pieces of meat and bones (see meat suggestions above), of which no less than 1½ pounds is all meat",
    ],
    source: "Cookstr",
    totalTime: 60,
    url: "http://www.cookstr.com/recipes/il-brodo-homemade-meat-broth",
    image: "./recipe-images/meat.jpg",
  },
  {
    name: "Spice-Rubbed Grilled Flap Meat (Sirloin Tip) Recipe",
    cuisineType: "south-american",
    ingredients: [
      "1 tablespoon whole black peppercorns, toasted",
      "1 teaspoon coriander seed, toasted",
      "1 teaspoon fennel seed, toasted",
      "1 teaspoon cumin pods, toasted",
      "1 teaspoon red pepper flakes",
      "1/2 teaspoon dried oregano",
      "2 medium cloves garlic, minced (about 2 teaspoons)",
      "2 tablespoons vegetable or canola oil",
      "1 whole flap meat steak, 2 to 2 1/2 pounds",
      "Kosher salt",
    ],
    source: "Serious Eats",
    totalTime: 240,
    url: "http://www.seriouseats.com/recipes/2012/05/spice-rubbed-grilled-flap-meat-sirloin-tip-recipe.html",
    image: "./recipe-images/grilled.jpg",
  },
];
// Populate the filter and load the recipes when the sites loads
window.onload = function () {
  populateCuisineFilter();
  renderRecipes(recipes);
};

//Copy the original recipes array
let currentDisplayedRecipes = [...recipes];

//Function to load the whole recipe list , each one as a box in the recipe-container
function renderRecipes(recipeList) {
  const recipeContainer = document.getElementById("recipe-container");
  //Clear the HTML before we populate the list
  recipeContainer.innerHTML = "";

  //Loop through the array and add a box for each recipe
  recipeList.forEach((recipe) => {
    const recipeBox = document.createElement("div");
    recipeBox.className = "recipe-box";

    //Attach the image
    const recipeImage = document.createElement("img");
    recipeImage.className = "recipe-img";
    recipeImage.src = recipe.image;
    recipeBox.appendChild(recipeImage);

    //Attach the header of each recipe
    const recipeName = document.createElement("h3");
    recipeName.textContent = recipe.name;
    recipeBox.appendChild(recipeName);

    //Attach a smaller header for the ingridients
    const recipeIngredientsHeader = document.createElement("h4");
    recipeIngredientsHeader.textContent = "Ingredients:";
    recipeBox.appendChild(recipeIngredientsHeader);

    //Add the list of ingridients from the array to unordered list and then add each ing...
    const ingredientList = document.createElement("ul");
    recipe.ingredients.forEach((ingredient) => {
      const ingredientItem = document.createElement("li");
      ingredientItem.textContent = ingredient;
      ingredientList.appendChild(ingredientItem);
    });
    recipeBox.appendChild(ingredientList);

    //Header for cooking time
    const recipeTimeHeader = document.createElement("h4");
    recipeTimeHeader.textContent = "Time to prepare:";

    //Adding the cooking time
    const recipeTime = document.createElement("p");
    function timeConvert(n) {
      const rhours = Math.floor(n / 60);
      const rminutes = n % 60;
      if (rhours < 1) {
        return `${rminutes} minutes.`;
      } else if (rminutes != 0) {
        return `${rhours} hours and ${rminutes} minutes.`;
      } else {
        return `${rhours} hours`;
      }
    }

    recipeTime.textContent = timeConvert(recipe.totalTime);

    if (recipe.totalTime != null) {
      //if there is no value here we dont add either heading or cooking time
      recipeBox.appendChild(recipeTimeHeader);
      recipeBox.appendChild(recipeTime);
    }
    //Adding the Cuisine/origin type and header
    const recipeOriginHeader = document.createElement("h4");
    recipeOriginHeader.textContent = "Cuisine type:";

    const recipeOrigin = document.createElement("p");
    recipeOrigin.textContent = recipe.cuisineType;
    if (recipe.cuisineType != null) {
      recipeBox.appendChild(recipeOriginHeader);
      recipeBox.appendChild(recipeOrigin);
    }

    //adding the link / source to each recipe..
    const recipeLink = document.createElement("a");
    recipeLink.textContent = `Source: ${recipe.source}`;
    recipeLink.href = recipe.url;
    recipeBox.appendChild(recipeLink);

    recipeContainer.appendChild(recipeBox);
  });
  //Changing the current displayed recipes to the current recipe list if we need to sort them
  currentDisplayedRecipes = recipeList;
}

//accessing the cuisine-filter dropdown list..
const cuisineFilter = document.getElementById("cuisine-filter");

//Make a new array of all the cuisine types
function populateCuisineFilter() {
  const AllCuisineTypes = [
    ...new Set(recipes.flatMap((cuisine) => cuisine.cuisineType)),
  ];
  //Add every cuisine type as an option to choose in the dropdown
  AllCuisineTypes.forEach((cuisine) => {
    const option = document.createElement("option");
    option.value = cuisine;
    option.textContent = cuisine;

    cuisineFilter.appendChild(option);
  });
}
//If we change the cuisine type in the dropdown we render a new filtered list
cuisineFilter.addEventListener("change", function () {
  const CuisineSelected = cuisineFilter.value;
  let filterRecipes;
  if (CuisineSelected) {
    filterRecipes = recipes.filter((recipe) =>
      recipe.cuisineType.includes(CuisineSelected)
    );
  } else {
    filterRecipes = recipes;
  }
  renderRecipes(filterRecipes);
});

//Selecting all buttons with the class
const sortByTimeButtons = document.querySelectorAll(".timeButton");

//Remember the original order by copying the array
const originalRecipesOrder = [...currentDisplayedRecipes];

//Loop through buttons and check if they are being clicked.. Then switch based on which button. Should refactor this code probably. :)
sortByTimeButtons.forEach((button) => {
  button.addEventListener("click", function () {
    let sortedRecipes;

    switch (button.value) {
      case "longest":
        sortedRecipes = [...currentDisplayedRecipes].sort(
          (shortest, longest) => longest.totalTime - shortest.totalTime
        );
        break;
      case "shortest":
        sortedRecipes = [...currentDisplayedRecipes].sort(
          (shortest, longest) => shortest.totalTime - longest.totalTime
        );
        break;
      default:
        if (!CuisineSelected) sortedRecipes = [...originalRecipesOrder];
    }
    //render the sorted recipes
    renderRecipes(sortedRecipes);
  });
});

//Selecting all buttons with the class
const sortByAlphabet = document.querySelectorAll(".alphabetButton");

//Sorting by alphabet.. I guess it would be best to refactor this to
sortByAlphabet.forEach((button) => {
  button.addEventListener("click", function () {
    let sortedRecipes;

    switch (button.value) {
      case "A":
        sortedRecipes = [...currentDisplayedRecipes].sort((a, b) => {
          if (a.name > b.name) {
            return 1;
          } else if (a.name < b.name) {
            return -1;
          } else {
            return 0;
          }
        });

        break;
      case "B":
        sortedRecipes = [...currentDisplayedRecipes].sort((a, b) => {
          if (b.name > a.name) {
            return 1;
          } else if (b.name < a.name) {
            return -1;
          } else {
            return 0;
          }
        });

        break;
      default:
        sortedRecipes = [...originalRecipesOrder];
    }
    //render the sorted recipes
    renderRecipes(sortedRecipes);
  });
});
