function alfabeticOrder (response, alfabeticOrder) {
    
    if(alfabeticOrder === 'asc') {
        response.sort(function(a, b) {
            let x = a.name.toUpperCase();
            let y = b.name.toUpperCase();
            return x === y ? 0 : x > y ? 1 : -1;
        });
    };

    if(alfabeticOrder === 'desc') {
        response.sort(function(a, b) {
            let x = a.name.toUpperCase();
            let y = b.name.toUpperCase();
            return x === y ? 0 : x < y ? 1 : -1;
        });
    };

    return response;
};


module.exports = {
    alfabeticOrder,
}