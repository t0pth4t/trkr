"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const noble_1 = __importDefault(require("@abandonware/noble"));
exports.scanner = () => {
    // tslint:disable-next-line:no-expression-statement
    noble_1.default.on('onChange', (state) => {
        state === 'poweredOn' ? start() : console.info('BLE Off');
    }).on('discover', (peripheral) => {
        console.info(peripheral);
    });
};
const start = () => {
    console.info('BLE On');
    noble_1.default.startScanning();
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nhbm5lci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvc2Nhbm5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLCtEQUFxRDtBQUV4QyxRQUFBLE9BQU8sR0FBRyxHQUFHLEVBQUU7SUFDeEIsbURBQW1EO0lBQ25ELGVBQUssQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLENBQUMsS0FBWSxFQUFFLEVBQUU7UUFDbEMsS0FBSyxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDOUQsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxDQUFDLFVBQXFCLEVBQUUsRUFBRTtRQUN4QyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzdCLENBQUMsQ0FBQyxDQUFDO0FBRVAsQ0FBQyxDQUFDO0FBRUYsTUFBTSxLQUFLLEdBQUcsR0FBRyxFQUFFO0lBQ2YsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN2QixlQUFLLENBQUMsYUFBYSxFQUFFLENBQUM7QUFDMUIsQ0FBQyxDQUFBIn0=