const apiHandler = function (recipes) {
    return recipes.map(recipe => {
        return {
            id: recipe.id,
            name: recipe.title,
            summary: recipe.summary.replace(/<[^>]*>?/gm, ''),
            rating: recipe.spoonacularScore,
            health_rating: recipe.healthScore,
            steps: stepsHandler(recipe),
            types: recipe.diets,
            img: recipe.image
        };
    });
}

const stepsHandler = function(recipe) {
    if(recipe.analyzedInstructions && recipe.analyzedInstructions.length > 0) {
        let steps = recipe.analyzedInstructions[0].steps
        return steps.map(step => step.step);
    };
}

const dbHandler = function (recipes) {
    return recipes.map(recipe => {
        return {
            id: recipe.id,
            name: recipe.name,
            summary: recipe.summary,
            rating: Number(recipe.rating),
            health_rating: Number(recipe.health_rating),
            steps: recipe.steps,
            types: recipe.types.map(type => {
                return type.name;
            }),
            img: recipe.img    
        };
    });
}

module.exports = {
    apiHandler, 
    dbHandler
}