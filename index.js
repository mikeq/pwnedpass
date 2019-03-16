const yargs = require('yargs');
const figlet = require('figlet');
const clear = require('clear');
const chalk = require('chalk');
const crypto = require('crypto');
const fetch = require('node-fetch');

clear();
console.log(chalk.blue(figlet.textSync('Pwned Passwords')));

const args = yargs
  .usage('Usage: node $0 <password>')
  .help('h')
  .alias('h', 'help')
  .epilog('Copyright © 2019 Mike Quinn').argv;

if (args._.length === 0) {
  yargs.showHelp();
  process.exit();
}

const hash = crypto
  .createHash('sha1')
  .update(args._[0])
  .digest('hex');
const hashPart = hash.substring(0, 5);

fetch(`https://api.pwnedpasswords.com/range/${hashPart}`)
  .then(resp => {
    return resp.text();
  })
  .then(body => {
    const passwordArray = body.split('\r\n');
    const found = passwordArray.filter(h => {
      const parts = h.split(':');
      return parts[0] === hash.substring(5).toUpperCase();
    });
    return found;
  })
  .then(found => {
    if (found.length === 0) {
      console.log(
        chalk.green(`Your password '${args._[0]}' has not been leaked`),
      );
    } else {
      found.map(p => {
        const parts = p.split(':');
        console.log(
          chalk.yellow(
            `Your password '${args._[0]}' has been leaked ${parts[1]} times.`,
          ),
        );
      });
    }
  })
  .catch(err => {
    console.error(err);
  });
