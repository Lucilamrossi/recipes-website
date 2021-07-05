const recipes = [
    {
        id: 642614,
        name: 'Fast Tiramisu',
        summary: 'Fast Tiramisu requires about <b>approximately 45 minutes</b> from start to finish.',
        rating: 20,
        health_rating: 1,
        steps: [{
            number: 1,
            step: "Preheat the oven for 10 minutes at 180C. Grease a rectangular tin for baking the cake and keep it aside. Take a big vessel and sift the two kinds of flour with baking powder, coffee, powder, cinnamon powder and salt for at least three times.",
        }],
        types: [],
        img: 'https://spoonacular.com/recipeImages/642614-556x370.jpg'
    },
    {
        id: 661602,
        name: 'Sterling Cooper Blini with Caviar',
        summary: 'Sterling Cooper Blini with Caviar might be just the morn meal you are searching for.',
        rating: 10,
        health_rating: 0,
        steps: [
            {
                number: 1,
                step: "Add the egg yolks and sugar to your mixer. Whip it up good until the mixture turns a light yellow color.Now, grab your small saucepan and add to it the milk, heavy cream, allspice, nutmeg, and cinnamon.",
            },
        ],
        types: [ 'pescatarian', "gluten Free" ],
        img: 'https://spoonacular.com/recipeImages/661602-556x370.jpg'
    },
    {
        id: "8770a4af-5d58-4051-b8cc-46493a99142b",
        name: "pizza",
        summary: "pizza",
        rating: 40,
        health_rating: 50,
        steps: [],
        types: [
            "vegan",
            "vegetarian",
            "pepe",
            "pizza"
        ],
        img: "http://cla.com"
    },
    {
        id: "8770a4af-5d58-4051-b8cc-888",
        name: "pastas",
        summary: "pasta",
        rating: 80,
        health_rating: 20,
        steps: [],
        types: [
            "gluten Free"
        ],
        img: "http://cla.com"
    },
    {
        id: 661677,
        name: 'Ice cream with mango',
        summary: 'Ice cream',
        rating: 10,
        health_rating: 0,
        steps: [
            {
                number: 1,
                step: "step",
            },
        ],
        types: [ 'pescatarian', "vegan", "gluten Free" ],
        img: 'https://spoonacular.com/recipeImages/661602-556x370.jpg'
    },
];

// Rating >40
const ratingFilter1 = [
    {
        id: "8770a4af-5d58-4051-b8cc-46493a99142b",
        name: "pizza",
        summary: "pizza",
        rating: 40,
        health_rating: 50,
        steps: [],
        types: [
            "vegan",
            "vegetarian",
            "pepe",
            "pizza"
        ],
        img: "http://cla.com"
    },
    {
        id: "8770a4af-5d58-4051-b8cc-888",
        name: "pastas",
        summary: "pasta",
        rating: 80,
        health_rating: 20,
        steps: [],
        types: [
            "gluten Free"
        ],
        img: "http://cla.com"
    },
];

//rating entre 0 y 50
const ratingFilter2 = [
    {
        id: 642614,
        name: 'Fast Tiramisu',
        summary: 'Fast Tiramisu requires about <b>approximately 45 minutes</b> from start to finish.',
        rating: 20,
        health_rating: 1,
        steps: [{
            number: 1,
            step: "Preheat the oven for 10 minutes at 180C. Grease a rectangular tin for baking the cake and keep it aside. Take a big vessel and sift the two kinds of flour with baking powder, coffee, powder, cinnamon powder and salt for at least three times.",
        }],
        types: [],
        img: 'https://spoonacular.com/recipeImages/642614-556x370.jpg'
    },
    {
        id: 661602,
        name: 'Sterling Cooper Blini with Caviar',
        summary: 'Sterling Cooper Blini with Caviar might be just the morn meal you are searching for.',
        rating: 10,
        health_rating: 0,
        steps: [
            {
                number: 1,
                step: "Add the egg yolks and sugar to your mixer. Whip it up good until the mixture turns a light yellow color.Now, grab your small saucepan and add to it the milk, heavy cream, allspice, nutmeg, and cinnamon.",
            },
        ],
        types: [ 'pescatarian', "gluten Free" ],
        img: 'https://spoonacular.com/recipeImages/661602-556x370.jpg'
    },
    {
        id: "8770a4af-5d58-4051-b8cc-46493a99142b",
        name: "pizza",
        summary: "pizza",
        rating: 40,
        health_rating: 50,
        steps: [],
        types: [
            "vegan",
            "vegetarian",
            "pepe",
            "pizza"
        ],
        img: "http://cla.com"
    },
    {
        id: 661677,
        name: 'Ice cream with mango',
        summary: 'Ice cream',
        rating: 10,
        health_rating: 0,
        steps: [
            {
                number: 1,
                step: "step",
            },
        ],
        types: [ 'pescatarian', "vegan", "gluten Free" ],
        img: 'https://spoonacular.com/recipeImages/661602-556x370.jpg'
    },
];

//health rating >30
const healthRatingFilter1 = [
    {
        id: "8770a4af-5d58-4051-b8cc-46493a99142b",
        name: "pizza",
        summary: "pizza",
        rating: 40,
        health_rating: 50,
        steps: [],
        types: [
            "vegan",
            "vegetarian",
            "pepe",
            "pizza"
        ],
        img: "http://cla.com"
    },
];

//health rating < 15
const healthRatingFilter2 = [
    {
        id: 642614,
        name: 'Fast Tiramisu',
        summary: 'Fast Tiramisu requires about <b>approximately 45 minutes</b> from start to finish.',
        rating: 20,
        health_rating: 1,
        steps: [{
            number: 1,
            step: "Preheat the oven for 10 minutes at 180C. Grease a rectangular tin for baking the cake and keep it aside. Take a big vessel and sift the two kinds of flour with baking powder, coffee, powder, cinnamon powder and salt for at least three times.",
        }],
        types: [],
        img: 'https://spoonacular.com/recipeImages/642614-556x370.jpg'
    },
    {
        id: 661602,
        name: 'Sterling Cooper Blini with Caviar',
        summary: 'Sterling Cooper Blini with Caviar might be just the morn meal you are searching for.',
        rating: 10,
        health_rating: 0,
        steps: [
            {
                number: 1,
                step: "Add the egg yolks and sugar to your mixer. Whip it up good until the mixture turns a light yellow color.Now, grab your small saucepan and add to it the milk, heavy cream, allspice, nutmeg, and cinnamon.",
            },
        ],
        types: [ 'pescatarian', "gluten Free" ],
        img: 'https://spoonacular.com/recipeImages/661602-556x370.jpg'
    },
    {
        id: 661677,
        name: 'Ice cream with mango',
        summary: 'Ice cream',
        rating: 10,
        health_rating: 0,
        steps: [
            {
                number: 1,
                step: "step",
            },
        ],
        types: [ 'pescatarian', "vegan", "gluten Free" ],
        img: 'https://spoonacular.com/recipeImages/661602-556x370.jpg'
    },
];

//types gluten Free
const typesFilter1 = [
 
    {
        id: 661602,
        name: 'Sterling Cooper Blini with Caviar',
        summary: 'Sterling Cooper Blini with Caviar might be just the morn meal you are searching for.',
        rating: 10,
        health_rating: 0,
        steps: [
            {
                number: 1,
                step: "Add the egg yolks and sugar to your mixer. Whip it up good until the mixture turns a light yellow color.Now, grab your small saucepan and add to it the milk, heavy cream, allspice, nutmeg, and cinnamon.",
            },
        ],
        types: [ 'pescatarian', "gluten Free" ],
        img: 'https://spoonacular.com/recipeImages/661602-556x370.jpg'
    },
    {
        id: "8770a4af-5d58-4051-b8cc-888",
        name: "pastas",
        summary: "pasta",
        rating: 80,
        health_rating: 20,
        steps: [],
        types: [
            "gluten Free"
        ],
        img: "http://cla.com"
    },
    {
        id: 661677,
        name: 'Ice cream with mango',
        summary: 'Ice cream',
        rating: 10,
        health_rating: 0,
        steps: [
            {
                number: 1,
                step: "step",
            },
        ],
        types: [ 'pescatarian', "vegan", "gluten Free" ],
        img: 'https://spoonacular.com/recipeImages/661602-556x370.jpg'
    },
];

//types gluten free and pescatarian
const typeFilter2 = [
    {
        id: 661602,
        name: 'Sterling Cooper Blini with Caviar',
        summary: 'Sterling Cooper Blini with Caviar might be just the morn meal you are searching for.',
        rating: 10,
        health_rating: 0,
        steps: [
            {
                number: 1,
                step: "Add the egg yolks and sugar to your mixer. Whip it up good until the mixture turns a light yellow color.Now, grab your small saucepan and add to it the milk, heavy cream, allspice, nutmeg, and cinnamon.",
            },
        ],
        types: [ 'pescatarian', "gluten Free" ],
        img: 'https://spoonacular.com/recipeImages/661602-556x370.jpg'
    },
    {
        id: 661677,
        name: 'Ice cream with mango',
        summary: 'Ice cream',
        rating: 10,
        health_rating: 0,
        steps: [
            {
                number: 1,
                step: "step",
            },
        ],
        types: [ 'pescatarian', "vegan", "gluten Free" ],
        img: 'https://spoonacular.com/recipeImages/661602-556x370.jpg'
    },
];

module.exports = {
    recipes,
    ratingFilter1,
    ratingFilter2,
    healthRatingFilter1,
    healthRatingFilter2,
    typesFilter1,
    typeFilter2
}