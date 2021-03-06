module.exports = Directory

function Directory(name) {
  this.name = name
  this._ls = []
  this._ls_la = []
  this._cat = ''
}

Directory.prototype.ls = function() {
  return this._ls.map(f_data => f_data.file).reverse()
}

Directory.prototype.ls_la = function() {
  return this._ls_la.reverse()
}

Directory.prototype.cat = function(fileName) {
  let file = this._ls.find(f_data => (f_data.file === fileName))
  if (file.link) {
    return file.link.data
  } else {
    return file.data
  }
}

Directory.prototype.mv = function(fileName, newFileName) {
  return this._ls.map(f_data => (f_data.file === fileName ? f_data.file = newFileName : f_data.file = f_data.file)).toString()

}

Directory.prototype.cp = function (originalName, copyName) {
  var originalFind = this._ls.find(f_data => (f_data.file === originalName))
  var copy = Object.assign({}, originalFind)
  copy.file = copyName
  this._ls.push(copy)
  return copy.data

}

Directory.prototype.write = function(file, data) {
  let fileMatch = this._ls.find(f_data => (f_data.file === file))
  if (fileMatch) {
    fileMatch.data = data
  }else if (this._ls.link) {
    this._ls.link.data = this._ls.data;
  } else {
    this._ls.push({file, data})
  }
  this._ls_la.push(file + " - " + data.length)
}

Directory.prototype.ln_s = function (fileName, newFile) {
  let file = this._ls.find(f_data => (f_data.file === fileName))
  file = Object.assign({}, {file:newFile, link:file})
  this._ls.push(file)
}
