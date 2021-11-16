const exec = require('child_process').exec;
exec('npm run install').on('exit', () => exec('./node_modules/.bin/rn-nodeify --hack --install'));