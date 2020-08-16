const credentials = require('../../credentials.json')
const doc = new GoogleSpreadsheet('1OUgVdmt7_TEnPMB9-IkChhvcLXZmC6mAcxKZEn4KCjc')

export default async (req, res) => {
  try {
    await doc.useServiceAccountAuth(credentials)
    await doc.loadInfo()

    const sheet = doc.sheetsByIndex[2]
    await sheet.loadCells('A2:B2')

    const mostrarPromocaoCell = sheet.getCell(1, 0)
    console.log(mostrarPromocaoCell)
    const textoCell = sheet.getCell(1, 1)
    console.log(textoCell)

    res.end(JSON.stringify({
      showCoupon: mostrarPromocaoCell.value,
      message: textoCell.value
    }))

  } catch (err) {
    //console.log(err)
    res.end(JSON.stringify({
      showCoupon: false,
      message: ''
    }))
  }
}