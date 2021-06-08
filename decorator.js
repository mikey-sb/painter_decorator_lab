const Room = require("./room")

const Decorator = function () {
    this.paint_stock = []
}


Decorator.prototype.addPaint = function(paint){
    this.paint_stock.push(paint)
}

Decorator.prototype.stockSize = function(){
    return this.paint_stock.length
}

Decorator.prototype.totalLitres = function(){
    total_litres = 0
    for (let can of this.paint_stock){
        total_litres += can.litres 
    }
    return total_litres
}

Decorator.prototype.enoughPaint = function(room){
    if(this.totalLitres() < room.area){
        return false
    } else {
        return true
    }
}

Decorator.prototype.roomPainted = function(room){
    if(this.enoughPaint(room) == true){
        room.painted = true
    }
}

Decorator.prototype.decreasePaintStock = function(room){
    if(room.painted == true){
        let leftoverPaint = this.totalLitres() - room.area
        return leftoverPaint
    }
}

module.exports = Decorator

// if total litres < room size return false