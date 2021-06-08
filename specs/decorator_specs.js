const assert = require('assert')
const Decorator = require('../decorator')
const Paint = require('../paint')
const Room = require('../room')

describe('Decorator', function () {

    let decorator

    beforeEach(function () {

        decorator = new Decorator([])
        paint = new Paint(50, false)
        roomL = new Room(150, false)
        roomS = new Room(50, false)
    })

    it('should have empty stock', function(){
        const actual = decorator.paint_stock
        assert.deepStrictEqual(actual, [])
    })

    it('should be able to add paint to stock', function(){
        decorator.addPaint(paint)
        const actual = decorator.stockSize()
        assert.strictEqual(actual, 1)
    })

    it('should be able to find total litres', function(){
        decorator.addPaint(paint)
        decorator.addPaint(paint)        
        const actual = decorator.totalLitres()
        assert.strictEqual(actual, 100)
    })

    it('should not have enough paint for room', function(){
        decorator.addPaint(paint)
        decorator.addPaint(paint)
        const actual = decorator.enoughPaint(roomL)
        assert.strictEqual(actual, false)        
    })

    it('should have enough paint for room', function(){
        decorator.addPaint(paint)
        decorator.addPaint(paint)
        const actual = decorator.enoughPaint(roomS)
        assert.strictEqual(actual, true)        
    })

    it('should update room as painted', function(){
        decorator.addPaint(paint)
        decorator.addPaint(paint)
        decorator.roomPainted(roomS)
        const actual = roomS.painted
        assert.strictEqual(actual, true)
    })


    it('should decrease paint stock when painting a room', function(){
        decorator.addPaint(paint)
        decorator.addPaint(paint)
        decorator.roomPainted(roomS)
        const actual = decorator.decreasePaintStock(roomS)
        assert.strictEqual(actual, 50)       
    })

    it('should be able to remove empty paint cans from stock')
})


