const { GoogleSpreadsheet } = require('google-spreadsheet')
const credentials = require('./credentials.json')

const doc = new GoogleSpreadsheet('1OUgVdmt7_TEnPMB9-IkChhvcLXZmC6mAcxKZEn4KCjc')

const run = async () => {
  try {
    await doc.useServiceAccountAuth(credentials)
    await doc.loadInfo()

    sheet = doc.sheetsByIndex[1]
    console.log(doc.title)

    await sheet.addRow({
      Nome: 'Gustavo',
      Email: 'gustavo.rodrigues@gmail.com',
      Whatsapp: '34 99999999',
      Cupom: '142563',
      Prmo: 'asdasd'
    })
  }
  catch (err) {
    console.log(err)
  }
}

run()