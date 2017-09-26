const fs = require('fs');
import {DirWatcher} from './dirwatcher/dirwatcher.js';
import {Importer} from './importer/importer.js'
const dw = new DirWatcher(),
    importer = new Importer('./hw2.mock.data');
importer.import('./hw2.mock.data/MOCK_DATA (1).csv').then(data => {
    console.log(data);
})

