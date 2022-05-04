const Net = require("net");

const { prepareToSend } = require("./helpers.js");


class Http {
  constructor(info) {
    this.host = info.host;
    this.port = info.port;
    this.client = new Net.Socket();
    this.connected = false;
  }

  connect(info) {

    return new Promise((resolve, reject) => {
      const client = this.client
      if (info?.host && info?.port) {
        this.host = info.host;
        this.port = info.port;
      }

      if (!this.host) {
        reject("Host Missied")
      }

      if (!this.port) {
        reject("Port Missied");
      }

      this.client.connect({ host: this.host, port: this.port }, function () {
            this.connected = true;
            resolve(client)
      });


    });

  }

  request(raw_request) {
    this.client.write(prepareToSend(raw_request), () => {
      return this.client;
    });
  }
}

module.exports = Http