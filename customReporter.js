import { Transform } from 'node:stream';

const customReporter = new Transform({
  writableObjectMode: true,
  transform(event, encoding, callback) {
    switch (event.type) {
      case 'test:start':
        throw new Error("This reporter has failed");
        callback(null, `test ${event.data.name} started\n`);
        break;
      case 'test:pass':
        callback(null, `test ${event.data.name} passed\n`);
        break;
      case 'test:fail':
        callback(null, `test ${event.data.name} failed\n`);
        break;
      case 'test:plan':
        callback(null, 'test plan\n');
        break;
      case 'test:diagnostic':
        callback(null, event.data.message + '\n');
        break;
      case 'test:coverage': {
        const { totalLineCount } = event.data.summary.totals;
        callback(null, `total line count: ${totalLineCount}\n`);
        break;
      }
    }
  },
});

export default customReporter;
