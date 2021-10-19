import * as product_details_page from "./product-details.page"
import * as router from "@angular/router"
// @ponicode
describe("ngOnInit", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new router.ActivatedRoute()
        inst2 = new product_details_page.ProductDetailsPage(inst)
    })

    test("0", () => {
        let callFunction: any = () => {
            inst2.ngOnInit()
        }
    
        expect(callFunction).not.toThrow()
    })
})
