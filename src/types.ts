export type SmartDevice = {
  type: 'bulb' | 'outlet' | 'temperatureSensor'; // 'bulb', 'outlet' or 'temperatureSensor';
  id: string;
  name: string;
  connectionState: 'connected' | 'disconnected' | 'poorConnection';
};

// SmartDeviceDetails can be SmartBulb, SmartOutlet or SmartTemperatureSensor

export type SmartBulb = {
  type: 'bulb';
  id: string;
  name: string;
  connectionState: 'connected' | 'disconnected' | 'poorConnection';
  isTurnedOn: boolean;
  brightness: number; // <0, 100>
  color: string; // in the CSS formats
};

export type SmartOutlet = {
  type: 'outlet';
  id: string;
  name: string;
  connectionState: 'connected' | 'disconnected' | 'poorConnection';
  isTurnedOn: boolean;
  powerConsumption: number; // in watts
};

export type SmartTemperatureSensor = {
  type: 'temperatureSensor';
  id: string;
  name: string;
  connectionState: 'connected' | 'disconnected' | 'poorConnection';
  temperature: number; // in Celsius
};
