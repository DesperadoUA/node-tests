const sum = require('../../sum')

describe("example tests", () => {
    it('adds 1 + 2 to equal 3', () => {
        const result = sum(1, 2)
        expect(result).toBe(3)
    })

    it("object assignment", () => {
        const obj = {}
        expect(obj).toEqual({})
    })
    
    it("object assignment field", () => {
        const obj = { value: 'hello world' }
        expect(obj.value).toEqual('hello world')
    })

    it("arrays", ()=> {
        const arr = ['hide', 'public', 'basket']
        expect(arr).toContain('hide')
        expect(arr).toContain('public')
    })
})