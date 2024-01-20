Blockly.Blocks['rs485_sht31_begin'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("SHT31 begin (RS485)");
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour("#FF91A4");
		this.setTooltip("");
		this.setHelpUrl("");
	}
};

Blockly.Blocks['rs485_sht31_read'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("SHT31 read (RS485)");
		this.setOutput(true, null);
		this.setColour("#FF91A4");
		this.setTooltip("");
		this.setHelpUrl("");
	}
};
