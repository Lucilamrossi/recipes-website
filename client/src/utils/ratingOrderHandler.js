function ratingOrder (response, ratingOrder) {
    return sorting('rating', ratingOrder, response);
}

function halthRatingOrder (response, hRatingOrder) {
    return sorting('health_rating', hRatingOrder, response);
}

function sorting (condition, order, response) {
    if(order === 'asc') {
        response.sort(function(a, b) {
            let x = a[condition];
            let y = b[condition];
            return x === y ? 0 : x > y ? 1 : -1;
        });
    };

    if(order === 'desc') {
        response.sort(function(a, b) {
            let x = a[condition];
            let y = b[condition];
            return x === y ? 0 : x < y ? 1 : -1;
        });
    };

    return response;
};

module.exports = {
    ratingOrder,
    halthRatingOrder
}