import * as login_page from "./login.page"
// @ponicode
describe("ngOnInit", () => {
    let inst: any

    beforeEach(() => {
        inst = new login_page.LoginPage()
    })

    test("0", () => {
        let result: any = inst.ngOnInit()
        expect(result).toMatchSnapshot()
    })
})
