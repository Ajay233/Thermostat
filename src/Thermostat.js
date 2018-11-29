function Thermostat(){
  this.MINIMUM_TEMPERATURE = 10;
  this.MAX_LIMIT_PSM_ON = 25;
  this.MAX_LIMIT_PSM_OFF = 32;
  this.DEFAULT_TEMPERATURE = 20;
  this.MEDIUM_ENERGY_USAGE_LIMIT = 18;
  this.temperature = this.DEFAULT_TEMPERATURE;
  this.powerSavingMode = true;
}

Thermostat.prototype.getCurrentTemperature = function () {
  return this.temperature;
};

Thermostat.prototype.up = function () {
  if (this.isMaxumumTemperature()){
    this.temperature = this.pickMax();
    return;
  }
  this.temperature += 1;
};

Thermostat.prototype.down = function () {
  if (this.isMinimumTemperature()){
    return;
  }
  this.temperature -= 1;
};

Thermostat.prototype.isMinimumTemperature = function () {
  return this.temperature === this.MINIMUM_TEMPERATURE;
};

Thermostat.prototype.isPowerSavingModeOn = function () {
  return this.powerSavingMode === true;
};

Thermostat.prototype.switchPowerSavingModeOff = function() {
  this.powerSavingMode = false;
};

Thermostat.prototype.switchPowerSavingModeOn = function() {
  this.powerSavingMode = true;
  if (this.temperature>= 25){
    this.temperature = this.pickMax();
    return;
  }
};

Thermostat.prototype.isMaxumumTemperature = function () {
  if (this.isPowerSavingModeOn() === false) {
    return this.temperature >= this.MAX_LIMIT_PSM_OFF;
  }
  return this.temperature >= this.MAX_LIMIT_PSM_ON;
}

Thermostat.prototype.resetTemperature = function() {
  this.temperature = this.DEFAULT_TEMPERATURE;
}

<<<<<<< HEAD
Thermostat.prototype.pickMax = function () {
  if (this.powerSavingMode === true) {
    return this.MAX_LIMIT_PSM_ON;
  } else {
    return this.MAX_LIMIT_PSM_OFF;
  }
};
=======
Thermostat.prototype.energyUsage = function() {
  if (this.temperature < this.MEDIUM_ENERGY_USAGE_LIMIT) {
    return 'low-usage';
  }
  if (this.temperature <= this.MAX_LIMIT_PSM_ON) {
    return 'medium-usage';
  }
  return 'high-usage';
}
>>>>>>> 0bd65d7f8a4682de98533b113190b4d7cb70b560
