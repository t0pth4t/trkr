import noble, {Peripheral} from '@abandonware/noble';

export const scanner = () => {
    // tslint:disable-next-line:no-expression-statement
    noble.on('onChange', (state:string) => {
        state === 'poweredOn' ? console.info('BLE On') : console.info('BLE Off');
    }).on('discover', (peripheral:Peripheral) =>{
        const manufacturerData = peripheral.advertisement &&
         peripheral.advertisement.manufacturerData &&
          peripheral.advertisement.manufacturerData.toString('hex') || '';
          const serviceUuids = peripheral.advertisement && peripheral.advertisement.serviceUuids || '';
        console.info(`id: ${peripheral.id} uuid: ${peripheral.uuid}, rssi: ${peripheral.rssi} serviceuuids: ${serviceUuids} ${manufacturerData}`);
    });
    noble.startScanning([], true);

};
