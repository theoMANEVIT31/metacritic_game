const criticsEditors = require('../../services/criticsEditorsService')
const db = require('../../models/indexModel')

describe('About critics from editors...', () => {

    it("should return list of critics from editors", async () => {
        // MOCK //
        criticsFromEditors = {
            0: {
                idC: 1,
                evaluation: "Good",
                noteE: 8,
                date: "2023-12-19",
                idE: 1
            },
            1: {
                idC: 2,
                evaluation: "Bad",
                noteE: 2,
                date: "2023-12-20",
                idE: 1
            },
        }
        db.criticsEditors.findAll = jest.fn().mockReturnValue(criticsFromEditors)

        // WHEN //
        const result = await criticsEditors.getCriticsEditors()

        // THEN //
        expect(db.criticsEditors.findAll).toBeCalled()
        expect(result[1]).toStrictEqual({
            idC: 2,
            evaluation: "Bad",
            noteE: 2,
            date: "2023-12-20",
            idE: 1
        })
        expect(result[0]).toHaveProperty('evaluation', "Good")
    })

    it("should add a new critic from editor", async() => {
        // MOCK //
        db.criticsEditors.create = jest.fn()

        // WHEN //
        const result = await criticsEditors.addCriticsEditor("Very Good", 9, "19/12/2023", 1)

        // THEN //
        expect(db.criticsEditors.create).toBeCalled()
        expect(db.criticsEditors.create.mock.calls[0][0].evaluation).toBe("Very Good")
        expect(db.criticsEditors.create.mock.calls[0][0].noteE).toBe(9)
        expect(db.criticsEditors.create.mock.calls[0][0].idE).toBe(1)
    })

    it("should return a single critic", async() => {
        // MOCK //
        db.criticsEditors.findOne = jest.fn().mockReturnValueOnce({
            idC: 2,
            evaluation: "Bad",
            noteE: 2,
            date: "2023-12-20",
            idE: 1
        })

        // WHEN //
        const result = await criticsEditors.getCriticsEditorById(2)

        // THEN //
        expect(db.criticsEditors.findOne).toBeCalled()
        expect(db.criticsEditors.findOne.mock.calls[0][0].where.idC).toBe(2)
        expect(result).toStrictEqual({
            idC: 2,
            evaluation: "Bad",
            noteE: 2,
            date: "2023-12-20",
            idE: 1
        })
    })

    it("should update a single critic", async() => {
        // MOCK //
        db.criticsEditors.update = jest.fn().mockReturnValueOnce({
            evaluation: "Not Bad", 
            noteE: "6",
            date: "24/12/2023",
            idE: 2
        })

        // WHEN //
        const result = await criticsEditors.putCriticsEditor(null, "Good")

        // THEN //
        expect(db.criticsEditors.update).toBeCalled()
        expect(db.criticsEditors.update.mock.calls[0][0].evaluation).toBe("Good")
        expect(db.criticsEditors.update.mock.calls[0][0].noteE).toBeUndefined()
        expect(result).toStrictEqual({
            evaluation: "Not Bad", 
            noteE: "6",
            date: "24/12/2023",
            idE: 2
        })
    })

    it("should delete a single critic", async() => {
        // MOCK //
        db.criticsEditors.destroy = jest.fn()

        // WHEN //
        const result = await criticsEditors.deleteCriticsEditorById(2)

        // THEN //
        expect(db.criticsEditors.destroy).toBeCalled()
        expect(db.criticsEditors.destroy.mock.calls[0][0].where.idC).toBe(2)
        expect(result).toBeUndefined()
    })

})
