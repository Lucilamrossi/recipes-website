function setPages(recipes) {
    const result = [];
    while (recipes.length > 0) {
        const recipesPerPage = recipes.splice(0, 9);
        result.push(recipesPerPage);
    }
    return result;
}

function undoPages(recipes) { 
    var result = [];
    for(let i = 0; i < recipes.length; i++){
        for(let j = 0; j < recipes[i].length; j++) {
            result.push(recipes[i][j]);
        }
    }
    return result;
}

module.exports = {
    setPages,
    undoPages
}