import XLSX from "xlsx"


export default function getExcelData(sheetName) {
    let filePath = "Excel/OMRBranch_TestData.xlsx"
    const workbook = XLSX.readFile(filePath)
    const sheet = workbook.Sheets[sheetName]
    const jsonData = XLSX.utils.sheet_to_json(sheet)
    return jsonData;
}