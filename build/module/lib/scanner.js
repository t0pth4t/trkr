import noble from '@abandonware/noble';
export const scanner = () => {
    // tslint:disable-next-line:no-expression-statement
    noble.on('onChange', (state) => {
        state === 'poweredOn' ? console.info('BLE On') : console.info('BLE Off');
    }).on('discover', (peripheral) => {
        const manufacturerData = peripheral.advertisement &&
            peripheral.advertisement.manufacturerData &&
            peripheral.advertisement.manufacturerData.toString('hex') || '';
        console.info(`id: ${peripheral.id} uuid: ${peripheral.uuid}, rssi: ${peripheral.rssi} ${manufacturerData}`);
    });
    noble.startScanning([], true);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nhbm5lci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvc2Nhbm5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEtBQW1CLE1BQU0sb0JBQW9CLENBQUM7QUFFckQsTUFBTSxDQUFDLE1BQU0sT0FBTyxHQUFHLEdBQUcsRUFBRTtJQUN4QixtREFBbUQ7SUFDbkQsS0FBSyxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxLQUFZLEVBQUUsRUFBRTtRQUNsQyxLQUFLLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzdFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxVQUFxQixFQUFFLEVBQUU7UUFDeEMsTUFBTSxnQkFBZ0IsR0FBRyxVQUFVLENBQUMsYUFBYTtZQUNoRCxVQUFVLENBQUMsYUFBYSxDQUFDLGdCQUFnQjtZQUN4QyxVQUFVLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbEUsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLFVBQVUsQ0FBQyxFQUFFLFVBQVUsVUFBVSxDQUFDLElBQUksV0FBVyxVQUFVLENBQUMsSUFBSSxJQUFJLGdCQUFnQixFQUFFLENBQUMsQ0FBQztJQUNoSCxDQUFDLENBQUMsQ0FBQztJQUNILEtBQUssQ0FBQyxhQUFhLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBRWxDLENBQUMsQ0FBQyJ9