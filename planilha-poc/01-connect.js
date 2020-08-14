const { GoogleSpreadsheet } = require('google-spreadsheet')
const credentials = require('./credentials.json')

const doc = new GoogleSpreadsheet('1OUgVdmt7_TEnPMB9-IkChhvcLXZmC6mAcxKZEn4KCjc')

const run = async () => {
  await doc.useServiceAccountAuth(credentials)
  await doc.loadInfo()
  console.log(doc.title)
}

run()