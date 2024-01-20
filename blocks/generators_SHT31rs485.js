Blockly.JavaScript['rs485_sht31_begin'] = function (block) {
	var code = '';
	code += '#EXTINC#include <ModbusMaster.h>#END\n';
	code += '#VARIABLE ModbusMaster rs485_sht31Meter;#END\n';
	code += '\n';
	code += '#SETUP Wire.begin();#END\n';
	code += '#SETUP Serial2.begin(9600);#END\n';
	code += '#SETUP rs485_sht31Meter.begin(1, Serial2);#END\n';
	code += '#LOOP_EXT_CODE uint8_t result_temp;#END\n';
	code += '#LOOP_EXT_CODE rs485_sht31Meter.readHoldingRegisters(1, 2);#END\n';
	return code;
};

Blockly.JavaScript['rs485_sht31_read'] = function (block) {
	var code = 'rs485_sht31Meter.getResponseBuffer(1) / 10.00f';
	return [code, Blockly.JavaScript.ORDER_NONE];
};
