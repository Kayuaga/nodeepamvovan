'use strict'
import fs from 'fs'
import csv from 'node-csv';
import EventEmitter from 'events'
import {DirWatcher} from '../dirwatcher/dirwatcher.js';
const filterCVS = (path) => {
    return new Promise((resolve,reject)=>{
        csv.createParser().parseFile(path, (err, data) => {
            if (err) {
                return reject(err)
            }
            const [props, ...items] = data;
            console.log(props)
            const filteredData = items.map(vals => vals.reduce((obj, val, idx) => ({...obj, [props[idx]]: val}),{}));

            return resolve(filteredData);
        });
    });

};

export class Importer {
    constructor(path) {
        this.dw = new DirWatcher();
        this.dw.watch(path, 2000);
        this.path = path
    }

    import(path) {
        return new Promise((resolve) => {
            if (fs.existsSync(path)) {
                return  filterCVS(path).then(resolve)
            }
            this.dw.on('dirwatcher:changed', (filePath) => {
                if (path.includes(filePath)) {
                    return filterCVS(`${this.path}/${filePath}`).then(resolve)
                }
            });

        });
    }

}