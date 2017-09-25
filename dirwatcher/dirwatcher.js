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
                    const newFiles = files.forEach(file => !this.previousFiles.includes(file)? this.emit('dirwatcher:changed', file): null);
                   // console.log(newFiles)
                    this.previousFiles = files;
                }
            }), delay);
        }
    }
}
