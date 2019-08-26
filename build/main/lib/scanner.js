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
        console.info(peripheral);
    });
    noble_1.default.startScanning();
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nhbm5lci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvc2Nhbm5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLCtEQUFxRDtBQUV4QyxRQUFBLE9BQU8sR0FBRyxHQUFHLEVBQUU7SUFDeEIsbURBQW1EO0lBQ25ELGVBQUssQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLENBQUMsS0FBWSxFQUFFLEVBQUU7UUFDbEMsS0FBSyxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM3RSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLENBQUMsVUFBcUIsRUFBRSxFQUFFO1FBQ3hDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDN0IsQ0FBQyxDQUFDLENBQUM7SUFDSCxlQUFLLENBQUMsYUFBYSxFQUFFLENBQUM7QUFFMUIsQ0FBQyxDQUFDIn0=