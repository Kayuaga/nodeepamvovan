'use strict'
import fs from 'fs'
import csv from 'csv'
import EventEmitter from 'events'
import {DirWatcher} from '../dirwatcher/dirwatcher.js';
let filterCVS = (d) => {
    let arr = d.toString().split('\n');
    let data = [];
    let [id, name, brand, company, price, isbn] = arr[0].split(',');
    arr.forEach((a) => {
        let line = a.split(',');
        data.push(
            {
                [id]: line[0],
                [name]: line[1],
                [brand]: line[2],
                [company]: line[3],
                [price]: line[4],
                [isbn]: line[5]
            }
        )
    })
    return data
}
export class Importer {
    constructor(path) {
        this.dw = new DirWatcher();
        this.dw.watch(path, 2000);
        this.path = path
    }

    import(path) {
        let read = (path) => {
            return new Promise((resolve, reject) => {
                fs.readFile(path, (err, d) => {
                    if (err) {
                        return reject(err)
                    }
                    const data = filterCVS(d);
                    return resolve(data);
                });
            });
        }
        return new Promise((resolve) => {
            if (fs.existsSync(path)) {
                console.log('In if')
                return read(path).then((data) => {
                    resolve(data)
                });
            }
            this.dw.on('dirwatcher:changed', (filePath) => {
                if (path.includes(filePath)) {
                    return read(`${this.path}/${filePath}`).then((data) => {
                        resolve(data)
                    });
                }
            })

        });
    }
    importSync(path){
        let data
        if(fs.existsSync(path)){
            data = fs.readFileSync(path)
            return filterCVS(data)
        }
        return null;


    }

}