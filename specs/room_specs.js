const assert = require('assert')
const Room = require('../room')

describe('Room', function () {
    let room

    beforeEach(function () {
        room = new Room(500, false)
    })

    it("Should have an area", function () {
        const actual = room.area
        assert.strictEqual(actual, 500)
    })

    it("Should start not painted", function () {
        const actual = room.painted
        assert.strictEqual(actual, false)
    })

    it("Should be painted", function () {
        room.paintRoom()
        const actual = room.painted
        assert.strictEqual(actual, true)
    })


})