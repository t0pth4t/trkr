import noble, {Peripheral} from '@abandonware/noble';

export const scanner = () => {
    // tslint:disable-next-line:no-expression-statement
    noble.on('onChange', (state:string) => {
        state === 'poweredOn' ? console.info('BLE On') : console.info('BLE Off');
    }).on('discover', (peripheral:Peripheral) =>{
        const manufacturerData = peripheral.advertisement.manufacturerData.toString('hex');
        console.info(`id: ${peripheral.id} uuid: ${peripheral.uuid}, rssi: ${peripheral.rssi} ${manufacturerData}`);
    });
    noble.startScanning();

};
