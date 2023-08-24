const fs = require('fs');
const path = require('path');

const inputFolderPath = './';
const outputFolderPath = './';

const files = fs.readdirSync(inputFolderPath).map(fileName => {
    return path.join(inputFolderPath, fileName);
});

const output = {};

for (const file of files) {
    if (path.extname(file) === '.json' && file !== 'index.json' && file !== 'package.json') {
        const fileData = fs.readFileSync(file);
        const jsonData = JSON.parse(fileData);
        
        output[jsonData.id] = jsonData;
    }
}

fs.writeFileSync(`${outputFolderPath}/index.json`, JSON.stringify(output));