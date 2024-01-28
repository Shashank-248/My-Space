const recipes = [
    {
        name: "Chicken Biryani",
        description: "Aromatic rice dish layered with tender chicken, fragrant spices, and rich flavors.",
        ingredients: ["chicken", "basmati rice", "onions", "tomatoes", "ginger", "garlic", "yogurt", "spices"],
        instructions: "1. Marinate chicken in yogurt and spices. 2. Saute onions, tomatoes, ginger, and garlic. 3. Layer rice, chicken, and sauteed ingredients in a pot. 4. Cook on low heat until rice is tender and chicken is cooked through."
      },
      {
        name: "Paneer Butter Masala",
        description: "Rich and creamy tomato-based gravy with melt-in-your-mouth paneer cubes.",
        ingredients: ["paneer", "onions", "tomatoes", "ginger", "garlic", "yogurt", "cashews", "spices", "cream", "butter"],
        instructions: "1. Marinate paneer cubes in yogurt and spices. 2. Saute onions, tomatoes, ginger, and garlic. 3. Blend the sauteed mixture into a smooth puree. 4. Heat butter and add spices. 5. Add the puree and cook until the oil separates. 6. Add marinated paneer and water. 7. Simmer until paneer is cooked through. 8. Add cream and garnish with coriander leaves.",
        image: "paneer-butter-masala.jpg", // Add the actual image path here
      },
      
      {
        name: "Chicken Tikka Masala",
        description: "Creamy tomato-based curry with tender, flavorful chicken tikka pieces.",
        ingredients: ["chicken","yogurt","lemon juice","ginger","garlic","garam masala","turmeric","cumin","coriander powder","chili powder","onions","tomatoes","oil","cream","cilantro"
        ],
        instructions: "1. Marinate chicken in yogurt, lemon juice, ginger, garlic, and spices for at least 30 minutes. 2. Thread chicken onto skewers and grill or bake until cooked through. 3. Saute onions and tomatoes in oil. 4. Blend the sauteed mixture into a smooth puree. 5. Heat oil and add spices. 6. Add the puree and cook until the oil separates. 7. Add water and stir in cream. 8. Add cooked chicken tikka pieces and simmer until heated through. 9. Garnish with cilantro and serve with rice.",
        image: "chicken-tikka-masala.jpg", // Add the actual image path here
      },
      {
        name: "Mutton Rogan Josh",
        description: "Rich and aromatic Mughlai curry with tender mutton pieces in a spicy and flavorful tomato-based gravy.",
        ingredients: ["mutton","onions","tomatoes","ginger","garlic","yogurt","red chili powder","coriander powder","turmeric","garam masala","bay leaves","cardamom","cloves","cinnamon","oil","water","cilantro"
        ],
        instructions: "1. Marinate mutton in yogurt, ginger, garlic, and spices for at least 30 minutes. 2. Saute onions in oil until golden brown. 3. Add tomatoes and cook until mushy. 4. Add the marinated mutton and cook until browned. 5. Add water and spices like bay leaves, cardamom, cloves, and cinnamon. 6. Cover and simmer until the mutton is tender and the gravy thickens. 7. Garnish with cilantro and serve with rice or naan.",
        image: "mutton-rogan-josh.jpg", // Add the actual image path here
      },
      {
        name: "Hyderabadi Mutton Biryani",
        description: "Layered fragrant rice dish with tender mutton pieces, caramelized onions, saffron, and a blend of aromatic spices.",
        ingredients: ["mutton","basmati rice","onions","yogurt","ginger","garlic","mint leaves","coriander leaves","lemon juice","ghee","spices (cardamom, cloves, black pepper, bay leaves, etc.)","saffron","eggs"
        ],
        instructions: "1. Marinate mutton in yogurt, ginger, garlic, mint leaves, coriander leaves, and lemon juice for at least 30 minutes. 2. Fry onions in ghee until golden brown and caramelized. 3. Cook basmati rice separately. 4. Layer rice, mutton, fried onions, and spices in a pot. 5. Add water and seal the pot tightly. 6. Cook over low heat or dum style until the rice is cooked and fragrant. 7. Garnish with saffron and optional boiled eggs before serving.",
        image: "hyderabadi-mutton-biryani.jpg", // Add the actual image path here
      },
      {
        name: "Masala Dosa",
        description: "Crispy fermented crepes stuffed with a delicious potato and onion masala.",
        ingredients: ["dosa batter (rice, lentils, fenugreek)","potatoes","onions","ginger","garlic","turmeric","chili powder","coriander powder","oil","ghee","coconut chutney","sambar"
        ],
        instructions: "1. Prepare dosa batter by fermenting rice and lentils overnight. 2. Boil potatoes and mash them with onions, ginger, garlic, and spices. 3. Heat a griddle and spread dosa batter into thin circles. 4. Apply oil and cook until edges become crisp. 5. Spread potato masala in the center, fold, and serve hot with coconut chutney and sambar.",
        image: "masala-dosa.jpg", // Add actual image path
      },
      
      {
        name: "Uttarpam",
        description: "Savory rice and lentil pancakes topped with various vegetables and spices.",
        ingredients:
        [ "uttapam batter (rice, lentils, fenugreek)","onions","tomatoes","capsicum","carrot","coriander leaves","oil","ghee"
        ],
        instructions: "1. Prepare uttapam batter by fermenting rice and lentils overnight. 2. Chop onions, tomatoes, capsicum, and carrot. 3. Heat a griddle and spread uttapam batter into thick circles. 4. Sprinkle chopped vegetables and coriander leaves on top. 5. Drizzle oil and ghee around the edges. 6. Cook until the bottom is golden brown and the batter sets. 7. Fold or flip and cook briefly on the other side. 8. Serve hot with coconut chutney and sambar.",
        image: "uttapam.jpg", // Add actual image path
      },
      
      {
        name: "Vegetable Korma",
        description: "Creamy and flavorful coconut-based curry with assorted vegetables.",
        ingredients:
        ["coconut milk","vegetables (carrots, potatoes, peas, cauliflower, etc.)","onions","ginger","garlic","turmeric","chili powder","garam masala","oil","cashews","cilantro"
        ],
        instructions: "1. Grind cashews into a smooth paste. 2. Heat oil in a pan and saute onions, ginger, and garlic until fragrant. 3. Add spices like turmeric, chili powder, and garam masala. 4. Add chopped vegetables and stir fry until slightly softened. 5. Pour in coconut milk and cashew paste. 6. Cover and simmer until vegetables are cooked through and the gravy thickens. 7. Garnish with cilantro and serve with rice or naan.",
        image: "vegetable-korma.jpg", // Add actual image path
      },
      {
        name: "Butter Chicken",
        description: "Creamy tomato-based curry with succulent chicken pieces.",
        ingredients:
        ["chicken","yogurt","lemon juice","ginger","garlic","garam masala","turmeric","cumin","coriander powder","chili powder","onions","tomatoes","oil","butter","cream","cilantro"
        ],
        instructions: "1. Marinate chicken in yogurt, lemon juice, ginger, garlic, and spices for at least 30 minutes. 2. Heat oil in a pan and cook onions until golden brown. 3. Add tomatoes and cook until mushy. 4. Add marinated chicken and cook until browned. 5. Add water and spices like garam masala and cumin. 6. Cover and simmer until chicken is cooked through. 7. Add butter and cream for a richer flavor. 8. Garnish with cilantro and serve with rice or naan.",
        image: "butter-chicken.jpg", // Add actual image path
      },
      {
        name: "Chana Masala",
        description: "Spicy chickpea curry with ginger, garlic, and tomatoes.",
        ingredients:["dried chickpeas","onions","tomatoes","ginger","garlic","turmeric","red chili powder","coriander powder","cumin","garam masala","oil","cilantro"
        ],
        instructions: "1. Soak dried chickpeas overnight or for at least 8 hours. 2. Pressure cook the chickpeas with water until tender. 3. Saute onions in oil until golden brown. 4. Add ginger, garlic, and chopped tomatoes. 5. Cook until the tomatoes soften and become mushy. 6. Add turmeric, red chili powder, coriander powder, cumin, and garam masala. 7. Add the cooked chickpeas and water",
    },   
    {
        name: "Dal Makhani",
        description: "Creamy black lentil curry with butter and cream.",
        ingredients: ["black lentils","kidney beans (optional)","onions","tomatoes","ginger","garlic","turmeric","red chili powder","garam masala","bay leaves","butter","cream","cilantro"
        ],
        instructions: "1. Wash and soak black lentils for at least 30 minutes. 2. Pressure cook the lentils with water and bay leaves until tender. 3. Saute onions in butter until golden brown. 4. Add ginger, garlic, and chopped tomatoes. 5. Cook until the tomatoes soften and become mushy. 6. Add turmeric, red chili powder, and garam masala. 7. Add the cooked lentils and water. 8. Simmer until the gravy thickens and flavors blend. 9. Stir in cream and adjust seasonings. 10. Garnish with cilantro and serve hot with naan or rice.",
        image: "dal-makhani.jpg", // Add the actual image path here
      },

      {
        name: "Paneer Bhurji",
        description: "Scrambled paneer cubes with onions, tomatoes, and spices.",
        ingredients: ["paneer","onions","tomatoes","ginger","garlic","turmeric","red chili powder","coriander powder","garam masala","oil","cilantro"
        ],
        instructions: "1. Crumble paneer and set aside. 2. Saute onions in oil until golden brown. 3. Add ginger, garlic, and chopped tomatoes. 4. Cook until the tomatoes soften and become mushy. 5. Add turmeric, red chili powder, coriander powder, and garam masala. 6. Stir in the crumbled paneer and cook until heated through. 7. Garnish with cilantro and serve hot with roti or rice.",
        image: "paneer-bhurji.jpg", // Add the actual image path here
      },
      {
        name: "Aloo Fry",
        description: "Crispy pan-fried potatoes seasoned with Indian spices.",
        ingredients: ["potatoes", "all-purpose flour", "salt", "pepper", "turmeric", "red chili powder", "oil"],
        instructions: "1. Cut potatoes into cubes and toss with flour, spices, and salt. 2. Heat oil in a skillet and fry potatoes until golden brown and crispy. 3. Serve hot with chutney or sauce."
      },
      {
        name: "Aloo Masala",
        description: "Flavorful potato curry cooked in a blend of spices and tomatoes.",
        ingredients: ["potatoes", "onion", "tomatoes", "ginger", "garlic", "turmeric", "coriander powder", "cumin powder", "garam masala", "red chili powder", "oil", "salt"],
        instructions: "1. Saute onion, ginger, and garlic. 2. Add tomatoes, spices, and cook until fragrant. 3. Add potatoes and water. 4. Simmer until potatoes are tender and gravy thickens. 5. Serve hot with rice or roti."
      },
      {
        name: "Potato Curry",
        description: "Hearty potato curry in a yogurt-based sauce, rich with spices.",
        ingredients: ["potatoes", "onion", "tomatoes", "ginger", "garlic", "turmeric", "coriander powder", "cumin powder", "garam masala", "red chili powder", "yogurt", "cilantro", "salt"],
        instructions: ""},
      {
        name: "Chicken 65",
        description: "Crispy, spicy, and addictive deep-fried chicken pieces perfect for snacking or appetizers.",
        ingredients: ["chicken","yogurt","lemon juice","ginger","garlic","red chili powder","coriander powder","turmeric"," garam masala","egg white","cornstarch","rice flour","oil","curry leaves","green chilies"
        ]},
        
          {
            name: "Tacos",
            description: "Versatile dish with seasoned meat or vegetables served in soft tortillas, topped with fresh ingredients.",
            ingredients: ["tortillas (corn or flour)","protein (ground beef, chicken, fish, beans, etc.)","taco seasoning","onions","tomatoes","lettuce","cheese","cilantro","salsa (optional)","guacamole (optional)","sour cream (optional)"
            ],
            instructions: "1. Brown and season your chosen protein with taco seasoning. Alternatively, prepare grilled or baked fish or vegetables. 2. Warm tortillas in a pan or microwave. 3. Fill each tortilla with protein, chopped onions, tomatoes, lettuce, and cheese. 4. Add your favorite toppings like salsa, guacamole, and sour cream. 5. Enjoy hot and customize with additional toppings to your liking.",
            image: "tacos.jpg", // Add the actual image path here
          },

          {
            name: "Fish and Chips",
            description: "Classic British dish featuring crispy fried fish and golden fries.",
            ingredients:["cod fillets (or any white fish)","beer batter (flour, cornstarch, beer, baking powder)","oil for frying","potatoes","oil for frying","salt","malt vinegar (optional)"
            ],
            instructions: "1. Prepare the beer batter by mixing flour, cornstarch, beer, and baking powder. Let rest for at least 30 minutes. 2. Cut potatoes into thick fries. 3. Heat oil for frying to 350°F (175°C). 4. Dip fish fillets in batter and carefully fry until golden brown and cooked through. 5. Fry potato fries until golden and crispy. 6. Drain fish and fries on paper towels. 7. Season with salt and enjoy fish and chips with malt vinegar (optional).",
            image: "fish-and-chips.jpg", // Add the actual image path here
          },
          {
            name: "Grilled Salmon with Lemon and Herbs",
            description: "Healthy and flavorful dish featuring grilled salmon seasoned with lemon and fresh herbs.",
            ingredients:["salmon fillets","lemon","fresh herbs (dill, parsley, thyme, etc.)","olive oil","salt","pepper"
            ],
            instructions: "1. Preheat grill to medium-high heat. 2. Slice lemon and chop fresh herbs. 3. Brush salmon fillets with olive oil and season with salt and pepper. 4. Place lemon slices and herbs on top of the salmon. 5. Grill salmon for 4-5 minutes per side, or until cooked through and slightly flakey. 6. Serve grilled salmon with remaining lemon slices and herbs.",
            image: "grilled-salmon-lemon-herbs.jpg", // Add the actual image path here
          },
          
          
          
        {
            name: "Palak Paneer",
            description: "Spinach and paneer curry with a mild and creamy flavor.",
            ingredients: ["spinach","paneer (cubes)","onions","tomatoes","ginger","garlic","turmeric","coriander powder","garam masala","yogurt (optional)","cream","cilantro"
            ],
            instructions: "1. Wash and blanch spinach. 2. Puree the spinach with a little water. 3. Saute onions in oil until golden brown. 4. Add ginger, garlic, and chopped tomatoes. 5. Cook until the tomatoes soften and become mushy. 6. Add turmeric, coriander powder, and garam masala. 7. Stir in the spinach puree and cook until heated through. 8. Add paneer cubes and yogurt (optional). 9. Simmer until the paneer is cooked and the gravy thickens. 10. Stir in cream and adjust seasonings. 11. Garnish with cilantro and serve hot with roti or rice.",
            image: "palak-paneer.jpg", // Add the actual image path here
          },
{
    name: "Chicken Alfredo Pasta",
    description: "Delicious pasta dish with chicken, Alfredo sauce, and pasta.",
    ingredients: ["chicken", "Alfredo sauce", "pasta"],
    instructions: "1. Cook chicken. 2. Boil pasta. 3. Mix cooked chicken with Alfredo sauce. 4. Serve hot over pasta."
},
{
    name: "Spaghetti Carbonara",
    description: "A classic Italian pasta dish made with eggs, cheese, pancetta, and black pepper.",
    ingredients: ["spaghetti", "eggs", "cheese", "pancetta", "black pepper"],
    instructions: "1. Boil spaghetti. 2. In a separate pan, cook pancetta until crispy. 3. Mix eggs and cheese. 4. Toss cooked spaghetti with egg and cheese mixture. 5. Top with pancetta and black pepper."
},
{
    name: "Chicken Tacos",
    description: "Tasty tacos with seasoned chicken, lettuce, tomato, and salsa.",
    ingredients: ["chicken", "tortillas", "lettuce", "tomato", "salsa"],
    instructions: "1. Cook chicken. 2. Assemble tortillas with chicken, lettuce, tomato, and salsa."
},

{
    name: "Chicken Alfredo Pasta",
    description: "Delicious pasta dish with chicken, Alfredo sauce, and pasta.",
    ingredients: ["chicken", "Alfredo sauce", "pasta"],
    instructions: "1. Cook chicken. 2. Boil pasta. 3. Mix cooked chicken with Alfredo sauce. 4. Serve hot over pasta."
},
{
    name: "Chicken Tacos",
    description: "Tasty tacos with seasoned chicken, lettuce, tomato, and salsa.",
    ingredients: ["chicken", "tortillas", "lettuce", "tomato", "salsa"],
    instructions: "1. Cook chicken. 2. Assemble tortillas with chicken, lettuce, tomato, and salsa."
},

{
    name: "Chicken Fried Rice",
    description: "A flavorful fried rice with chicken, vegetables, and soy sauce.",
    ingredients: ["chicken", "rice", "soy sauce", "vegetables"],
    instructions: "1. Cook rice. 2. Stir-fry chicken and vegetables with soy sauce. 3. Mix with cooked rice."
},
{
    name: "Vegetable Biryani",
    description: "A fragrant Indian rice dish with mixed vegetables and spices.",
    ingredients: ["rice", "mixed vegetables", "spices"],
    instructions: "1. Saut  spices and vegetables. 2. Mix with cooked rice."
},
{
    name: "Shrimp Scampi over Rice",
    description: "Garlicky shrimp with a lemony sauce served over rice.",
    ingredients: ["shrimp", "garlic", "lemon", "rice"],
    instructions: "1. Saut  shrimp and garlic. 2. Add lemon juice and serve over cooked rice."
},
{
    name: "Mashed Potatoes",
    description: "Creamy mashed potatoes with butter and cream.",
    ingredients: ["potatoes", "butter", "cream"],
    instructions: "1. Boil and mash potatoes. 2. Add butter and cream for creaminess."
},
{
    name: "Roasted Potatoes",
    description: "Crispy roasted potatoes with herbs and olive oil.",
    ingredients: ["potatoes", "herbs", "olive oil"],
    instructions: "1. Toss potatoes with herbs and olive oil. 2. Roast until crispy."
},
{
    name: "Potato Salad",
    description: "Classic potato salad with mayonnaise and mustard.",
    ingredients: ["potatoes", "mayonnaise", "mustard"],
    instructions: "1. Boil potatoes and mix with mayonnaise and mustard."
},
{
    name: "Grilled Salmon with Lemon Butter",
    description: "Grilled salmon with a tangy lemon butter sauce.",
    ingredients: ["salmon", "lemon", "butter"],
    instructions: "1. Grill salmon and drizzle with lemon butter sauce."
},
{
    name: "Baked Salmon with Garlic and Dijon",
    description: "Baked salmon with a flavorful garlic and Dijon mustard glaze.",
    ingredients: ["salmon", "garlic", "Dijon mustard"],
    instructions: "1. Bake salmon with garlic and Dijon mustard glaze."
},
{
    name: "Scrambled Eggs with Spinach and Feta",
    description: "Scrambled eggs with saut ed spinach and crumbled feta cheese.",
    ingredients: ["eggs", "spinach", "feta cheese"],
    instructions: "1. Saut  spinach and mix with scrambled eggs and feta cheese."
},
{
    name: "Eggs Benedict",
    description: "Poached eggs on English muffins with ham and hollandaise sauce.",
    ingredients: ["eggs", "English muffins", "ham", "hollandaise sauce"],
    instructions: "1. Poach eggs and serve on toasted muffins with ham and hollandaise sauce."
},
{
    name: "Spanish Tortilla",
    description: "Spanish omelette with potatoes, onions, and eggs.",
    ingredients: ["eggs", "potatoes", "onions"],
    instructions: "1. Saut  potatoes and onions, add beaten eggs, and cook until set."
},
{
    name: "Caprese Salad",
    description: "Fresh salad with tomatoes, mozzarella, basil, and balsamic glaze.",
    ingredients: ["tomatoes", "mozzarella", "basil", "balsamic glaze"],
    instructions: "1. Slice tomatoes and mozzarella, layer with basil, and drizzle with balsamic glaze."
},
{
    name: "Tomato and Basil Bruschetta",
    description: "Toasted bread topped with diced tomatoes, fresh basil, and garlic.",
    ingredients: ["baguette", "tomatoes", "basil", "garlic"],
    instructions: "1. Toast bread, top with diced tomatoes, basil, and garlic."
},
{
    name: "Tomato Soup",
    description: "Classic tomato soup with a hint of cream and herbs.",
    ingredients: ["tomatoes", "cream", "herbs"],
    instructions: "1. Simmer tomatoes with cream and herbs, then blend until smooth."
},
{
    name: "Spinach and Feta Stuffed Chicken Breast",
    description: "Chicken breasts stuffed with spinach and feta cheese.",
    ingredients: ["chicken", "spinach", "feta cheese"],
    instructions: "1. Stuff chicken breasts with spinach and feta, then bake or grill."
},
{
    name: "Spinach and Mushroom Quiche",
    description: "Savory quiche with spinach, mushrooms, and cheese.",
    ingredients: ["pie crust", "spinach", "mushrooms", "cheese"],
    instructions: "1. Mix spinach, mushrooms, and cheese in a pie crust, and bake."
},
{
    name: "Spinach and Strawberry Salad",
    description: "Refreshing salad with baby spinach, strawberries, and balsamic vinaigrette.",
    ingredients: ["baby spinach", "strawberries", "balsamic vinaigrette"],
    instructions: "1. Toss baby spinach and strawberries with balsamic vinaigrette."
},
{
    name: "Grilled Vegetable Kabobs",
    description: "Skewers of assorted grilled vegetables with a marinade.",
    ingredients: ["bell peppers", "zucchini", "mushrooms", "cherry tomatoes"],
    instructions: "1. Skewer vegetables, grill, and brush with marinade."
},
{
    name: "Broccoli Cheddar Soup",
    description: "Creamy soup with broccoli and cheddar cheese.",
    ingredients: ["broccoli", "cheddar cheese", "cream"],
    instructions: "1. Simmer broccoli with cream and cheddar cheese, then blend until smooth."
},
{
    name: "Broccoli and Cheese Stuffed Chicken",
    description: "Chicken breasts stuffed with broccoli and cheese, baked to perfection.",
    ingredients: ["chicken", "broccoli", "cheddar cheese"],
    instructions: "1. Stuff chicken breasts with broccoli and cheddar cheese, then bake."
},
{
    name: "French Onion Soup",
    description: "Rich onion soup with melted cheese and toasted bread.",
    ingredients: ["onions", "beef broth", "cheese", "baguette"],
    instructions: "1. Saut  onions and simmer with beef broth. 2. Top with toasted baguette and cheese."
},
{
    name: "Caramelized Onions",
    description: "Sweet and savory caramelized onions as a topping or side dish.",
    ingredients: ["onions", "butter", "brown sugar"],
    instructions: "1. Saut  onions with butter and brown sugar until caramelized."
},
{
    name: "Onion Rings",
    description: "Crispy onion rings with a seasoned batter.",
    ingredients: ["onions", "flour", "seasonings"],
    instructions: "1. Dip onion rings in seasoned batter and deep-fry until golden."
},
{
    name: "Garlic Lemon Roasted Chicken",
    description: "Roasted chicken with a zesty garlic and lemon marinade.",
    ingredients: ["chicken", "garlic", "lemon"],
    instructions: "1. Marinate chicken with garlic and lemon. 2. Roast in the oven until golden brown."
}

];

document.addEventListener("DOMContentLoaded", function () {
const generateButton = document.getElementById("generate-button");
const ingredientText = document.getElementById("ingredient-text");
const recipeDisplay = document.getElementById("recipe-display");
const recipeList = document.getElementById("recipe-list");
const loadingSpinner = document.getElementById("loading-spinner");

generateButton.addEventListener("click", generateRecipes);
ingredientText.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    generateRecipes();
  }
});

function generateRecipes() {
  const userIngredients = ingredientText.value.toLowerCase().split(",").map(ingredient => ingredient.trim());

  loadingSpinner.style.display = "block";

  setTimeout(function () {
    const matchingRecipes = recipes.filter(recipe =>
      userIngredients.every(ingredient => recipe.ingredients.includes(ingredient))
    );

    if (matchingRecipes.length > 0) {
      const recipeListHTML = matchingRecipes.map(recipe =>
        `<li>
          <img src="images/${recipe.name.toLowerCase().replace(" ", "-")}.jpg" alt="${recipe.name}">
          <strong>${recipe.name}</strong>: ${recipe.description}<br>
          Instructions: ${recipe.instructions}
        </li>`
      ).join("");

      recipeList.innerHTML = `<ul>${recipeListHTML}</ul>`;
      recipeDisplay.style.display = "block";
    } else {
      alert("No matching recipes found. Please try different ingredients.");
      recipeDisplay.style.display = "none";
    }

    loadingSpinner.style.display = "none";
  }, 1500);
}
});