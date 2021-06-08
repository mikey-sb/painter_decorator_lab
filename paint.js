const Paint = function (litres, empty = false) {
    this.litres = litres
    this.empty = empty
}

Paint.prototype.emptyCan = function () {
    this.empty = true
    this.litres = 0
}


module.exports = Paint