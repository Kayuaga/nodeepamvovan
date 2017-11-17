import program from 'commander';
import reducer from './reducer/reducer'
import {actions} from "./reducer/actions.json"
import * as fileWorker from "./reducer/controller/fileStreamController"
let actionItem;
let fileItem;

program
  .version('0.1.0')
  .option('-a, --action <action> ', 'choose and action')
  .option('-f, --file <file> ', 'file path')
  .action((action, file) => {
    actionItem = action;
    fileItem = file;
  })
  .parse(process.argv);

program.on('--help', () =>{
  console.log(`
    $ ./streams --action=io --file=MOCK_DATA.csv
    $ ./streams --action=transform-file --file=MOCK_DATA.csv
    $ ./streams -a io -f MOCK_DATA.csv
    $ ./streams --help
    $ ./streams -h
             `);
});


if (actionItem || fileItem) {
  console.log(` Please enter the arguments`)
}
else {

  switch (actionItem.toLowerCase()) {
    case actions.IO:
      fileWorker.fileReader(file);
      break;
    case actions.TRANSFROM_FILE:
      fileWorker.fileUpdater(file);
      break;
    case actions.CONVERT :
      fileWorker.fileTransformer(file);
      break;
    case actions.IOJSON:
      fileWorker.cvsTojsonIO(file);
      break;
    default :
      console.error('no action has been given');
      process.exit(1);
      break;
  }

}
