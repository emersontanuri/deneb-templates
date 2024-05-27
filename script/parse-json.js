const codedJson = require('coded-json')
const path = require('path')
const fs = require('fs')

console.log(process.argv[2])
if (!process.argv[2]) {
  console.log('Please specify a file')
  process.exit(1)
}

if (!fs.existsSync(process.argv[2])) {
  console.log('File not found')
  process.exit(1)
}

const file = process.argv[2]

const cjson = new codedJson.Cjson(path.join(__dirname, '.' + file))

const b = cjson.deserialize()

fs.writeFile(
  file.split('.cjson')[0] + '-parsed' + '.json',
  JSON.stringify(b),
  function (err) {
    if (err) {
      console.log(err)
    }
  },
)
