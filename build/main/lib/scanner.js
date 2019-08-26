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
        const manufacturerData = peripheral.advertisement.manufacturerData.toString('hex');
        console.info(`id: ${peripheral.id} uuid: ${peripheral.uuid}, rssi: ${peripheral.rssi} ${manufacturerData}`);
    });
    noble_1.default.startScanning([], true);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nhbm5lci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvc2Nhbm5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLCtEQUFxRDtBQUV4QyxRQUFBLE9BQU8sR0FBRyxHQUFHLEVBQUU7SUFDeEIsbURBQW1EO0lBQ25ELGVBQUssQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLENBQUMsS0FBWSxFQUFFLEVBQUU7UUFDbEMsS0FBSyxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM3RSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLENBQUMsVUFBcUIsRUFBRSxFQUFFO1FBQ3hDLE1BQU0sZ0JBQWdCLEdBQUcsVUFBVSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkYsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLFVBQVUsQ0FBQyxFQUFFLFVBQVUsVUFBVSxDQUFDLElBQUksV0FBVyxVQUFVLENBQUMsSUFBSSxJQUFJLGdCQUFnQixFQUFFLENBQUMsQ0FBQztJQUNoSCxDQUFDLENBQUMsQ0FBQztJQUNILGVBQUssQ0FBQyxhQUFhLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBRWxDLENBQUMsQ0FBQyJ9