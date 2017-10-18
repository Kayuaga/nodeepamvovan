import program from 'commander';
import reducer from './reducer/reducer'
import {actions} from "./reducer/actions.json"
import * as fileWorker from "./reducer/controller/fileStreamController"


const helpMsg = () =>
  console.log(`
        commands Example
    $ ./streams --action=io --file=MOCK_DATA.csv
    $ ./streams --action=transform-file --file=MOCK_DATA.csv
    $ ./streams -a io -f MOCK_DATA.csv
    $ ./streams --help
    $ ./streams -h
             `);
export const commandLine = () => {
  program
    .version('0.1.0')
    .option('-a, --action <action> ', 'choose and action')
    .option('-f, --file <file> ', 'file path')
    .parse(process.argv);

  program.on('--help',helpMsg);

  const actionItem = program.action;
  const fileItem = program.file;

  if (!actionItem || !fileItem) {
    helpMsg()
  }
  else {

    switch (actionItem.toLowerCase()) {
      case actions.IO:
        fileWorker.fileReader(fileItem);
        break;
      case actions.TRANSFROM_FILE:
        fileWorker.fileUpdater(fileItem);
        break;
      case actions.CONVERT :
        fileWorker.fileTransformer(fileItem);
        break;
      case actions.IOJSON:
        fileWorker.cvsTojsonIO(fileItem);
        break;
      default :
        console.error('no action has been given!!!!');
        process.exit(1);
        break;
    }

  }
}

if(!module.parent){
  commandLine()
}
