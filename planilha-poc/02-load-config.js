const { GoogleSpreadsheet } = require('google-spreadsheet')
const credentials = require('./credentials.json')

const doc = new GoogleSpreadsheet('1OUgVdmt7_TEnPMB9-IkChhvcLXZmC6mAcxKZEn4KCjc')

const run = async () => {
  try {
    await doc.useServiceAccountAuth(credentials)
    await doc.loadInfo()
    //console.log(doc.title)

    const sheet = doc.sheetsByIndex[2]
    await sheet.loadCells('A2:B2')
    //console.log(sheet.title)

    const mostraPromocaoCell = sheet.getCell(1, 0)
    console.log(mostraPromocaoCell.value)

    const textoCell = sheet.getCell(1, 1)
    console.log(textoCell.value)
  }
  catch (err) {
    console.log(err)
  }
}

run()