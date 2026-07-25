import XLSX from 'xlsx'

//mention file location
const filePath = "Excel/OMRBranch_TestData.xlsx"

//load workbook
const workbook = XLSX.readFile(filePath)

//To get all the sheets
const sheets = workbook.SheetNames
console.log(sheets)

//To get the particular sheet from workbook
const sheet = workbook.Sheets[sheets[0]]

//To convert sheet data in json data
const jsonData = XLSX.utils.sheet_to_json(sheet)
console.log("before update:", jsonData)

jsonData[0].UserName = "dev@gmail.com"
jsonData[0].Password = "Dev@123"

console.log(jsonData)

//To convert Json data into sheet data 
const updatedSheet = XLSX.utils.json_to_sheet(jsonData)

//replace the old sheet with updated sheet
workbook.Sheets[sheets[0]] = updatedSheet

//To save this
XLSX.writeFile(workbook, filePath)
console.log("Done...")


