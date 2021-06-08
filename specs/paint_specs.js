const assert = require('assert')
const Paint = require('../paint')

describe('Paint', function () {
    let paint

    beforeEach(function () {
        paint = new Paint(50, false)
    })

    it('should have litres', function () {
        const actual = paint.litres
        assert.strictEqual(actual, 50)
    })

    it('should not be empty', function () {
        const actual = paint.empty
        assert.strictEqual(actual, false)
    })

    it('should be able to empty itself', function () {
        paint.emptyCan()
        const actual = paint.empty
        assert.strictEqual(actual, true)
    })
})