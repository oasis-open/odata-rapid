class App {
  listeners: Listener[];
  rsdl: string;
  requestUrl: string;
  constructor() {
    this.listeners = [];
  }
  /**
   * @param {Listener} listener
   */
  addListener = (listener) => {
    this.listeners.push(listener);
  };
  /**
   *
   * @param {string} senderAddress
   * @param {string} event
   */
  publishRsdl = (senderAddress, event) => {
    if (event === this.rsdl) {
      return;
    }
    this.rsdl = event;
    this.listeners.forEach((listener) => {
      if (listener.senderAddress !== senderAddress) {
        listener.callback(event);
      }
    });
  };
}

type ListenerCallback = (rsdl: string) => any;

class Listener {
  senderAddress: string;
  config: any;
  callback: (rsdl: string) => any;
  /**
   *
   * @param {string} senderAddress
   */
  constructor(senderAddress, callback: ListenerCallback = () => {}) {
    this.senderAddress = senderAddress;
    this.callback = callback;
  }

  configure = (config) => {
    this.config = config;
  };
}
export { App, Listener };
