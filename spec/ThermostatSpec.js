'use strict';

describe('Thermostat', function(){

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function(){
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it('raises the temp by 1', function() {
    thermostat.up();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  it('lowers the temp by 1', function() {
    thermostat.down();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });

});
