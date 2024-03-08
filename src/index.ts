import {scanner} from './lib/scanner';
const justScanIndex = process.argv.indexOf('--justScan');
const justScan = justScanIndex !== -1; //
scanner(justScan);
