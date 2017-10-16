import program from 'commander';
import reducer from './reducer/reducer'

export const comandLine = ()=> program
    .version('0.1.0')
    .option('-a, --action', 'choose and action')
    .option('-f, --file', 'file path')
    .action(reducer)
    .parse(process.argv);


// if (require.main === module) {
//    comandLine()
// }else{
//     comandLine
// }



