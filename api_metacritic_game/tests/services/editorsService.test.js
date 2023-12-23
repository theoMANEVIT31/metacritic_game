const editor = require('../../services/editorsService');
const db = require('../../models/indexModel');

describe('About editors...', () => {

    it("should return list of editors", async () => {
        // MOCK //
        editors = {
            0: {idE: 1, pseudo: "editor_1", email: "editor_1@gmail.com"},
            1: {idE: 2, pseudo: "editor_2", email: "editor_2@gmail.com"}
        }
        db.editors.findAll = jest.fn().mockReturnValue(editors)

        // WHEN //
        const result = await editor.getEditors()

        // THEN //
        expect(db.editors.findAll).toBeCalled()
        expect(result[1]).toStrictEqual({
            idE: 2, 
            pseudo: "editor_2", 
            email: "editor_2@gmail.com"
        })
        expect(result[0]).toHaveProperty('pseudo', "editor_1")
    })

    it("should add a new editor", async() => {
        // MOCK //
        db.editors.create = jest.fn()

        // WHEN //
        const result = await editor.addEditor("editor", ",w)gVX)YAvg#+Uh", "editor@gmail.com")

        // THEN //
        expect(db.editors.create).toBeCalled()
        expect(db.editors.create.mock.calls[0][0].email).toBe("editor@gmail.com")
        expect(db.editors.create.mock.calls[0][0].pseudo).toBe("editor")
        expect(db.editors.create.mock.calls[0][0].hashedPassword).toBe(",w)gVX)YAvg#+Uh")
    
    })

    it("should return a single editor", async() => {
        // MOCK //
        db.editors.findOne = jest.fn().mockReturnValueOnce({
            idE : 1,
            pseudo: "editor_1",
            email: "editor_1@gmail.com"
        })

        // WHEN //
        const result = await editor.getEditorById(1)

        // THEN //
        expect(db.editors.findOne).toBeCalled()
        expect(db.editors.findOne.mock.calls[0][0].where.idE).toBe(1)
        expect(result).toStrictEqual({
            idE : 1,
            pseudo: "editor_1",
            email: "editor_1@gmail.com"
        })
    })

    it("should update a single editor", async() => {
        // MOCK //
        db.editors.update = jest.fn().mockReturnValueOnce({
            pseudo: "myPseudo", 
            hashedPassword: ",w)gVX)YAvg#+Uh",
            email: "myEmail@gmail.com"
        })

        // WHEN //
        const result = await editor.putEditor(1, "myEditorPseudo")

        // THEN //
        expect(db.editors.update).toBeCalled()
        expect(db.editors.update.mock.calls[0][0].pseudo).toBe("myEditorPseudo")
        expect(db.editors.update.mock.calls[0][0].email).toBeUndefined()
        expect(result).toStrictEqual({
            pseudo: "myPseudo", 
            hashedPassword: ",w)gVX)YAvg#+Uh",
            email: "myEmail@gmail.com"
        })
    })

    it("should delete a single editor", async() => {
        // MOCK //
        db.editors.destroy = jest.fn()

        // WHEN //
        const result = await editor.deleteEditorById(2)

        // THEN //
        expect(db.editors.destroy).toBeCalled()
        expect(db.editors.destroy.mock.calls[0][0].where.idE).toBe(2)
        expect(result).toBeUndefined()
    })

})