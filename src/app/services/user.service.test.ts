import * as user_service from "./user.service"
// @ponicode
describe("getUsers", () => {
    let inst: any

    beforeEach(() => {
        inst = new user_service.UserService()
    })

    test("0", () => {
        let result: any = inst.getUsers()
        expect(result).toMatchSnapshot()
    })
})
