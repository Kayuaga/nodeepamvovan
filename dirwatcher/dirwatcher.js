import fs from 'fs'
import EventEmitter from 'events'

export  class DirWatcher extends EventEmitter {
    constructor() {
        super();
        this.previousFiles = [];
    }

    watch(path, delay) {
        if (path) {
            setInterval(() => fs.readdir(path, (err, files) => {
                if (files.toString() !== this.previousFiles.toString()) {
                    const newFiles = files.filter(file => !this.previousFiles.includes(file));
                    newFiles.forEach(file =>  this.emit('dirwatcher:changed', file));
                    this.previousFiles = files;
                }
            }), delay);
        }
    }
}
