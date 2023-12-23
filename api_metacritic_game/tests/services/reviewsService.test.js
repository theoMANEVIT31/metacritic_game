const reviews = require('../../services/reviewsService');
const db = require('../../models/indexModel');

describe('About reviews...', () => {

    reviewsList = {
        0: {
            idR: 1, 
            avgU: 8.1, 
            description: "Final Fantasy XVI is an action role-playing game in which players take control of protagonist Clive Rosfield and a rotating party of AI-controlled companions through segmented open areas across the continents of Valisthea.", 
            title: "Final Fantasy XVI", 
            release: "2023/06/22", 
            idC: 1
        },
        1: {
            idR: 2, 
            avgU: 8.8, 
            description: "Xenoblade Chronicles 3 is an action role-playing game with a large open world.", 
            title: "Xenoblade Chronicles 3", 
            release: "2023/04/26", 
            idC: 3
        }
    }

    it("should return list of reviews", async () => {
        // MOCK //
        db.reviews.findAll = jest.fn().mockReturnValue(reviewsList)

        // WHEN //
        const result = await reviews.getReviews()

        // THEN //
        expect(db.reviews.findAll).toBeCalled()
        expect(result[1]).toStrictEqual(reviewsList[1])
        expect(result[0]).toHaveProperty('idC', 1)
    })

    it("should return a single review", async() => {
        // MOCK //

        db.reviews.findOne = jest.fn().mockReturnValueOnce(reviewsList[1])

        // WHEN //
        const result = await reviews.getReviewById(2)

        // THEN //
        expect(db.reviews.findOne).toBeCalled()
        expect(db.reviews.findOne.mock.calls[0][0].where.idR).toBe(2)
        expect(result).toStrictEqual({
            idR: 2, 
            avgU: 8.8, 
            description: "Xenoblade Chronicles 3 is an action role-playing game with a large open world.", 
            title: "Xenoblade Chronicles 3", 
            release: "2023/04/26", 
            idC: 3
        })
    })

    it("should update a review", async() => {
        // MOCK //
        db.reviews.update = jest.fn().mockReturnValueOnce({
            idR: 2, 
            avgU: 8.8, 
            description: "Xenoblade Chronicles 3 is an action role-playing game with a large open world.", 
            title: "Xenoblade Chronicles 3", 
            release: "2023/04/26", 
            idC: 3
        })

        // WHEN //
        const result = await reviews.putReview(2, 9, "Xenoblade Chronicles 3 is an action role-playing game with a large open world.", "Xenoblade Chronicles 3", "2023/04/26", 3)

        // THEN //
        expect(db.reviews.update).toBeCalled()
        expect(db.reviews.update.mock.calls[0][0].avgU).toBe(9)
        expect(result).toStrictEqual({
            idR: 2, 
            avgU: 8.8, 
            description: "Xenoblade Chronicles 3 is an action role-playing game with a large open world.", 
            title: "Xenoblade Chronicles 3", 
            release: "2023/04/26", 
            idC: 3
        })
    })
})