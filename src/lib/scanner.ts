import noble, {Peripheral} from '@abandonware/noble';

export const scanner = () => {
    // tslint:disable-next-line:no-expression-statement
    noble.on('onChange', (state:string) => {
        state === 'poweredOn' ? start() : console.info('BLE Off');
    }).on('discover', (peripheral:Peripheral) =>{
        console.info(peripheral);
    });

};

const start = () => {
    console.info('BLE On');
    noble.startScanning();
}