import noble, {Peripheral} from '@abandonware/noble';

const connectToPeripheral = async (peripheral:Peripheral) => {
  console.info(`trying to connect`);
  // if(!peripheral.connectable){
  //   console.info('not connectable')
  //   return false;
  // }
  console.info(peripheral)
  try{
    await peripheral.connectAsync();
    const services = await peripheral.discoverServicesAsync();
    console.info(services)
  } catch (error){
    console.error(error)
    return false;
  }
  return true;
}


export const scanner = (justScan:boolean = true) => {
    // tslint:disable-next-line:no-expression-statement
    noble.on('onChange', (state:string) => {
        state === 'poweredOn' ? console.info('BLE On') : console.info('BLE Off');
    }).on('discover', async (peripheral:Peripheral) =>{
      if (justScan) {
        const manufacturerData = peripheral.advertisement &&
          peripheral.advertisement.manufacturerData &&
          peripheral.advertisement.manufacturerData.toString('hex') || '';
        const serviceUuids = peripheral.advertisement && peripheral.advertisement.serviceUuids || '';
        console.info(`id: ${peripheral.id} uuid: ${peripheral.uuid}, rssi: ${peripheral.rssi} serviceuuids: ${serviceUuids} ${manufacturerData}`);
        return;
      }
      if (peripheral?.advertisement?.serviceUuids?.includes("e8beeb359595eb9c1095959595959572b9268b") || peripheral.advertisement.localName === "ELK_BBL7"){
        await noble.stopScanningAsync();
        console.info('Found ELK_BBL7')
        const success = await connectToPeripheral(peripheral);
        if(!success){
          await noble.startScanningAsync();
        }
      }
    });
    noble.startScanning([], true);

};
