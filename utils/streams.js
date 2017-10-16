import program from 'commander';
import reducer from './reducer/reducer'

export const comandLine = ()=> program
    .version('0.1.0')
    .option('-a, --action', 'choose and action')
    .option('-f, --file', 'file path')
    .action(reducer)
    .parse(process.argv);

program.on('--help', () =>
  console.log(`
    $ ./streams --action=io --file=MOCK_DATA.csv
    $ ./streams --action=transform-file --file=MOCK_DATA.csv
    $ ./streams -a io -f MOCK_DATA.csv
    $ ./streams --help
    $ ./streams -h
             `));


if (!module.parent) {
  comandLine()
}



