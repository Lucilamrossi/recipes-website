export const queryHandler = (actualQuery, newQuery, type) => {
    if(actualQuery === '') return `?${type}=${newQuery}`;

    else { // ?name=pasta&minRating=5
        actualQuery = actualQuery.substring(1); //name=pasta&minRating=5

        if(actualQuery.includes(type)){

            let splitQuery = actualQuery.split('&'); //[name=pasta, minRating=5]
            splitQuery = splitQuery.map((q) => {
                if(q.includes(type)) {
                    return `${type}=${newQuery}`;
                } else return q;
            });

            let finalQuery = splitQuery.join('&');

            return '?' + finalQuery;
        };

        return `?${actualQuery}&${type}=${newQuery}`;
    };
};


// Remove option if ever needed:
// if(action === 'remove') {
//     if(actualQuery === '') return '';

//     actualQuery = actualQuery.substring(1);

//     if(actualQuery.includes(type)){
        
//         let splitQuery = actualQuery.split('&');
        
//         for(let i = 0; i < splitQuery.length; i++){
//             if(splitQuery[i].includes(type)){
//                 splitQuery.splice(i, 1);
//             };
//         };
        
//         let finalQuery = splitQuery.join('&');
        
//         return '?' + finalQuery;

//     } else return actualQuery;
// };