"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const noble_1 = __importDefault(require("@abandonware/noble"));
exports.scanner = () => {
    // tslint:disable-next-line:no-expression-statement
    noble_1.default.on('onChange', (state) => {
        state === 'poweredOn' ? console.info('BLE On') : console.info('BLE Off');
    }).on('discover', (peripheral) => {
        const manufacturerData = peripheral.advertisement &&
            peripheral.advertisement.manufacturerData &&
            peripheral.advertisement.manufacturerData.toString('hex') || '';
        const serviceUuids = peripheral.advertisement && peripheral.advertisement.serviceUuids || '';
        console.info(`id: ${peripheral.id} uuid: ${peripheral.uuid}, rssi: ${peripheral.rssi} serviceuuids: ${serviceUuids} ${manufacturerData}`);
    });
    noble_1.default.startScanning([], true);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nhbm5lci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvc2Nhbm5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLCtEQUFxRDtBQUV4QyxRQUFBLE9BQU8sR0FBRyxHQUFHLEVBQUU7SUFDeEIsbURBQW1EO0lBQ25ELGVBQUssQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLENBQUMsS0FBWSxFQUFFLEVBQUU7UUFDbEMsS0FBSyxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM3RSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLENBQUMsVUFBcUIsRUFBRSxFQUFFO1FBQ3hDLE1BQU0sZ0JBQWdCLEdBQUcsVUFBVSxDQUFDLGFBQWE7WUFDaEQsVUFBVSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0I7WUFDeEMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2hFLE1BQU0sWUFBWSxHQUFHLFVBQVUsQ0FBQyxhQUFhLElBQUksVUFBVSxDQUFDLGFBQWEsQ0FBQyxZQUFZLElBQUksRUFBRSxDQUFDO1FBQy9GLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxVQUFVLENBQUMsRUFBRSxVQUFVLFVBQVUsQ0FBQyxJQUFJLFdBQVcsVUFBVSxDQUFDLElBQUksa0JBQWtCLFlBQVksSUFBSSxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7SUFDOUksQ0FBQyxDQUFDLENBQUM7SUFDSCxlQUFLLENBQUMsYUFBYSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUVsQyxDQUFDLENBQUMifQ==