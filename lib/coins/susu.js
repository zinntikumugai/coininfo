// https://github.com/susucoin-project/susucoin/blob/master/src/chainparams.cpp

var common = {
  name: 'Susucoin',
  unit: 'SUSU'
}

var main = Object.assign({}, {
  hashGenesisBlock: '00021e95bf5a918551b5fce3f7e21280c349ae3b121a41e1416d4d6dd76bcf57',
  port: 8877,
  portRpc: 8876,
  protocol: {
    magic: 0xf9beb9e9
  },
  seedsDns: [
  ],
  versions: {
    bip32: {
      private: 0x043587cf,
      public: 0x0488ade4
    },
    bip44: 22,
    private: 0xef,
    public: 0x6f,
    scripthash: 0xc4,
  }
}, common)

var test = Object.assign({}, {
  hashGenesisBlock: '23008320bded1d5f241db83c9c0e4aa2d232fde52a88c99af8d07d612820acee',
  port: 18444,
  portRpc: 18876,
  protocol: {
    magic: 0xfbbfb5da
  },
  seedsDns: [
  ],
  versions: {
    bip32: {
      private: 0x04358394,
      public: 0x043587cf
    },
    bip44: 1,
    private: 0xef,
    public: 0x6f,
    scripthash: 0xef,
  }
}, common)

module.exports = {
  main: main,
  test: test
}
