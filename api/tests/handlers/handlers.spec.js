const { expect } = require('chai');

const { apiHandler, dbHandler } = require('../../src/utils/recipeHandlers/api-dbHandler')
const { ratingFilter, healthRatingFilter, typesFilter } = require('../../src/utils/recipeHandlers/filtersHandler')
// const { alfabeticOrder, ratingOrder, halthRatingOrder } = require('../../src/utils/recipeHandlers/orderHandler')
// const { pages } = require('../../src/utils/recipeHandlers/pages')

const { apiExample, apiExpected, dbExample, dbExpected } = require('./handlersExamples')
const { recipes, ratingFilter1, ratingFilter2, healthRatingFilter1,
    healthRatingFilter2, typesFilter1, typeFilter2 } = require('./filterExamples')
// const { alfabeticAsc, alfabeticDesc, ratingAsc, ratingDesc, 
//     healtRatingAsc, healtRatingDesc } = require('./orderExamples')
// const { allRecipes, firstPageby5, secondPageby6, thirdPageby4, fourthPageby5 } = require('./pagesExamples')

describe('Handlers, filters, ordering and pages', () => {
    describe('Handlers', () => {
        xit('Apihandler should return an correctly handled array', () => {
            expect(apiHandler(apiExample)).to.deep.equal(apiExpected);
        })
        xit('DbHandler should return an correctly handled array', () => {
            expect(dbHandler(dbExample)).to.deep.equal(dbExpected);
        })
    })

    describe('Filters', () => {
        describe('Rating filter', () => {
            xit('should return recipes with rating > 40', () => {
                expect(ratingFilter(recipes, 40, 100)).to.deep.equal(ratingFilter1);
            })
            xit('should return recipes with rating between 0 and 50', () => {
                expect(ratingFilter(recipes, 0, 50)).to.deep.equal(ratingFilter2);
            })
        })
        describe('Health Rating filter', () => {
            xit('should return recipes with health rating > 30', () => {
                expect(healthRatingFilter(recipes, 30, 100)).to.deep.equal(healthRatingFilter1);
            })
            xit('should return recipes with health rating between 0 and 15', () => {
                expect(healthRatingFilter(recipes, 0, 15)).to.deep.equal(healthRatingFilter2);
            })
        })
        describe('Types filter', () => {
            xit('should return recipes that has type "Gluten free"', () => {
                expect(typesFilter(recipes, 'Gluten free')).to.deep.equal(typesFilter1);
            })
            xit('should return recipes that has type "Gluten free" and "Pescatarian"', () => {
                expect(typesFilter(recipes, 'gluten free,Pescatarian')).to.deep.equal(typeFilter2);
            })
        })
    })

    // describe('Ordering', () => {
    //     describe('Alfabetic order', () => {
    //         xit('should order alfabeticaly in an ascending way', () => {
    //             expect(alfabeticOrder(recipes, 'asc')).to.deep.equal(alfabeticAsc);
    //         })
    //         xit('should order alfabeticaly in a descending way', () => {
    //             expect(alfabeticOrder(recipes, 'desc')).to.deep.equal(alfabeticDesc);
    //         })
    //     })
    //     describe('Rating order', () => {
    //         xit('should order by rating in an ascending way', () => {
    //             expect(ratingOrder(recipes, 'asc')).to.deep.equal(ratingAsc);
    //         })
    //         xit('should order by rating in a descending way', () => {
    //             expect(ratingOrder(recipes, 'desc')).to.deep.equal(ratingDesc);
    //         })
    //     })
    //     describe('Health Rating order', () => {
    //         xit('should order by health rating in an ascending way', () => {
    //             expect(halthRatingOrder(recipes, 'asc')).to.deep.equal(healtRatingAsc);
    //         })
    //         xit('should order by health rating in a descending way', () => {
    //             expect(halthRatingOrder(recipes, 'desc')).to.deep.equal(healtRatingDesc);
    //         })
    //     })
    // })

    // describe('Pages', () => {
    //     describe('Dividing into pages', () => {
    //         beforeEach(() => {recipesUpdated = [...allRecipes];})
    //         xit('should return the correct recipes', () => {
    //             expect(pages(recipesUpdated, 5)[0]).to.deep.equal(firstPageby5);
    //         })
    //         xit('should return the correct recipes', () => {
    //             expect(pages(recipesUpdated, 6)[1]).to.deep.equal(secondPageby6);
    //         })
    //         xit('should return the correct recipes', () => {
    //             expect(pages(recipesUpdated, 4)[2]).to.deep.equal(thirdPageby4);
    //         })
    //         xit('should return the correct recipes', () => {
    //             expect(pages(recipesUpdated, 5)[3]).to.deep.equal(fourthPageby5);
    //         })
    //     })
        
    // })
        
})