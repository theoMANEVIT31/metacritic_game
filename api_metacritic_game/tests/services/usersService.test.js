const user = require('../../services/usersService')
const db = require('../../models/indexModel');

describe('getUsers', () => {
    it("should return all users", async () => {
        db.users.findAll = jest.fn().mockReturnValue({pseudo: "user_1", email: "user_1@gmail.com"})
        const result = await user.getUsers()
        console.log()
        expect(db.users.findAll).toBeCalled()
        expect(result).toHaveProperty('pseudo', "user_1")
    })
})