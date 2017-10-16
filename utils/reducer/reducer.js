import {actions} from "./actions.json"
import * as fileWorker from "./controller/fileStreamController"

export default (action, file) => {
    switch (action.toLowerCase()) {
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