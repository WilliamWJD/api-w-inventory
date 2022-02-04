import excelToJson from 'convert-excel-to-json';

function ConvertPlanHostsToJson(path: string) {
    const result = excelToJson({
        sourceFile: path,
        sheets: [{
            name: 'Planilha1',
            header: {
                rows: 1
            },
            columnToKey: {
                A: 'patrimony',
                B: 'hostname',
                C: 'model',
                D: 'department',
                E: 'group',
                F: 'user'
            },
        }]

    })
    return result.Planilha1;
}

export { ConvertPlanHostsToJson }