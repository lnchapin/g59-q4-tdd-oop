function Robot(startCharge) {
  this._battery = startCharge
  this._position = [0, 0]
  this._history = []
}

Robot.prototype.battery = function() {
  return this._battery
}

Robot.prototype.position = function() {
  return this._position
}

Robot.prototype.moveUp = function () {
  this._position[1] ++;
  this._history.push('up')
}

Robot.prototype.moveLeft = function () {
  this._position[0] --;
  this._history.push('left')
}

Robot.prototype.history = function () {
  return this._history
}

module.exports = Robot
