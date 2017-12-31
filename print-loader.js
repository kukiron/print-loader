var path = require("path"),
  url = require("url"),
  queryString = require("querystring")

module.exports = function(source, map) {
  this.cacheable && this.cacheable()

  var query = queryString.parse(url.parse(this.query).query),
    msg = query.msg || "echo: "
  console.log(msg + ": " + path.basename(this.resourcePath))

  if (msg === "dump") {
    console.log("****************")
    console.log(source)
    console.log("****************")
  }
  this.callback(null, source, map)
}
