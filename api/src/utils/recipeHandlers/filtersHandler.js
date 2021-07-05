function ratingFilter (response, minRating, maxRating) {
    response = response.filter(recipe => {
        if(recipe.rating >= minRating && recipe.rating <= maxRating) {
            return recipe;
        }
    })
    return response;
}

function healthRatingFilter (response, minHrating, maxHrating) {
    response = response.filter(recipe => {
        if(recipe.health_rating >= minHrating && recipe.health_rating <= maxHrating) {
            return recipe;
        };
    })
    return response;
}

function typesFilter(response, types) {
    types = types.split(',')
    types.forEach(type => {
        response = response.filter(recipe => {
            for(let i = 0; i < recipe.types.length; i++) {
                if(recipe.types[i].toLowerCase() === type.toLowerCase()) {
                    return recipe;
                };
            };
        });
    });
    return response;
}

module.exports = {
    ratingFilter,
    healthRatingFilter,
    typesFilter
}