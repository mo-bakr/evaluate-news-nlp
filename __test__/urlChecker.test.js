import { urlChecker } from "../src/client/js/urlChecker"

describe("Testing the urlChecker functionality", () => {
    test("Testing the urlChecker() function", () => {
        expect(urlChecker).toBeDefined()
    })

    test("Testing if urlChecker() returns false when the input is empty", () => {
        expect(urlChecker('')).toBeFalsy()
    })

    test("Testing if urlChecker() returns false when the input is incorrect url", () => {
        expect(urlChecker('Cats')).toBeFalsy()
    })
})