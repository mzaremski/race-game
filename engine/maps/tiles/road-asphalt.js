"use strict";

const p2 = require('p2');

const roadAsphalt = {
    tile000:function(){
        const shape1 = new p2.Capsule({ // Capsule below the chassis
          length: 67,
          radius: 7.5
        })
        const shape2 = new p2.Capsule({ // Capsule below the chassis
          length: 67,
          radius: 7.5
        })

        return [
        	{ shape: shape1, positionMod: [-13, 34], angle: -0.95 , width: 67 + 7.5/2, height: 7.5*2 },
            { shape: shape2, positionMod: [34, -12], angle: 2.5, width: 67 + 7.5/2, height: 7.5*2  }
        ]
    },

    tile001: function(){
        const shape1 = new p2.Capsule({ // Capsule below the chassis
          length: 67,
          radius: 7.5
        })
        const shape2 = new p2.Capsule({ // Capsule below the chassis
          length: 65,
          radius: 7.5
        })

        return [
            { shape: shape1, positionMod: [-33, -42], angle: -0.31 , width: 67 + 7.5/2, height: 7.5*2 },
            { shape: shape2, positionMod: [31, -55], angle: -0.11, width: 65 + 7.5/2, height: 7.5*2  }
        ]
    },

    tile002: function(){
        const shape1 = new p2.Capsule({ // Capsule below the chassis
          length: 67,
          radius: 7.5
        })
        const shape2 = new p2.Capsule({ // Capsule below the chassis
          length: 65,
          radius: 7.5
        })

        return [
            { shape: shape1, positionMod: [31, -42], angle: 0.31 , width: 67 + 7.5/2, height: 7.5*2 },
            { shape: shape2, positionMod: [-33, -55], angle: 0.11, width: 65 + 7.5/2, height: 7.5*2  }
        ]
    },

    tile003: function(){
        const shape1 = new p2.Capsule({ // Capsule below the chassis
          length: 67,
          radius: 7.5
        })
        const shape2 = new p2.Capsule({ // Capsule below the chassis
          length: 67,
          radius: 7.5
        })

        return [
        	{ shape: shape1, positionMod: [13, 34], angle: 0.95 , width: 67 + 7.5/2, height: 7.5*2 },
            { shape: shape2, positionMod: [-34, -12], angle: -2.5, width: 67 + 7.5/2, height: 7.5*2  }
        ]
    },

    tile004: function(){
        const shape1 = new p2.Capsule({ // Capsule below the chassis
          length: 64,
          radius: 7.5
        })
        const shape2 = new p2.Capsule({ // Capsule below the chassis
          length: 60,
          radius: 7.5
        })
        const shape3 = new p2.Capsule({ // Capsule below the chassis
          length: 64,
          radius: 7.5
        })

        return [
            { shape: shape1, positionMod: [30, -50], angle: -0.21 , width: 64 + 7.5/2, height: 7.5*2 },
            { shape: shape2, positionMod: [-23, -22], angle: -0.79 , width: 60 + 7.5/2, height: 7.5*2 },
            { shape: shape3, positionMod: [-50, 31], angle: 1.78 , width: 64 + 7.5/2, height: 7.5*2 }
        ]
    },

    tile005: function(){
        const shape1 = new p2.Capsule({ // Capsule below the chassis
          length: 125,
          radius: 7.5
        })

        return [{ shape: shape1, positionMod: [0, -58], angle: 0 , width: 125 + 7.5/2, height: 7.5*2 }]
    },

    tile006: function(){
        const shape1 = new p2.Capsule({ // Capsule below the chassis
          length: 64,
          radius: 7.5
        })
        const shape2 = new p2.Capsule({ // Capsule below the chassis
          length: 60,
          radius: 7.5
        })
        const shape3 = new p2.Capsule({ // Capsule below the chassis
          length: 64,
          radius: 7.5
        })

        return [
            { shape: shape1, positionMod: [-30, -50], angle: 0.21 , width: 64 + 7.5/2, height: 7.5*2 },
            { shape: shape2, positionMod: [23, -22], angle: 0.79 , width: 60 + 7.5/2, height: 7.5*2 },
            { shape: shape3, positionMod: [50, 31], angle: -1.78 , width: 64 + 7.5/2, height: 7.5*2 }
        ]
    },

    tile007: function(){
        const shape1 = new p2.Capsule({ // Capsule below the chassis
          length: 115,
          radius: 7.5
        })

        return [{ shape: shape1, positionMod: [34, 12], angle: -1.1 , width: 115 + 7.5/2, height: 7.5*2 }]
    },

    tile008: function(){
        const shape1 = new p2.Capsule({ // Capsule below the chassis
          length: 23,
          radius: 7.5
        })

        return [{ shape: shape1, positionMod: [-61, -52], angle: -1.1 , width: 23 + 7.5/2, height: 7.5*2 }]
    },

    tile009: function(){
        const shape1 = new p2.Capsule({ // Capsule below the chassis
          length: 140,
          radius: 7.5
        })

        return [{ shape: shape1, positionMod: [24, 0], angle: -1.1 , width: 140 + 7.5/2, height: 7.5*2 }]
    },

    tile010: function(){
        const shape1 = new p2.Capsule({ // Capsule below the chassis
          length: 67,
          radius: 7.5
        })
        const shape2 = new p2.Capsule({ // Capsule below the chassis
          length: 65,
          radius: 7.5
        })

        return [
            { shape: shape1, positionMod: [-42, -33], angle: -1.28 , width: 67 + 7.5/2, height: 7.5*2 },
            { shape: shape2, positionMod: [-54, 29], angle: -1.460, width: 65 + 7.5/2, height: 7.5*2  }
        ]
    },

    tile011: undefined, tile012: undefined,

    tile013: function(){
        const shape1 = new p2.Capsule({ // Capsule below the chassis
          length: 67,
          radius: 7.5
        })
        const shape2 = new p2.Capsule({ // Capsule below the chassis
          length: 65,
          radius: 7.5
        })

        return [
            { shape: shape1, positionMod: [42, -33], angle: 1.28 , width: 67 + 7.5/2, height: 7.5*2 },
            { shape: shape2, positionMod: [54, 29], angle: 1.460, width: 65 + 7.5/2, height: 7.5*2  }
        ]
    },

    tile014: function(){
        const shape1 = new p2.Capsule({ // Capsule below the chassis
          length: 125,
          radius: 7.5
        })

        return [{ shape: shape1, positionMod: [-56, 0 ], angle: 1.57079633 , width: 125 + 7.5/2, height: 7.5*2 }]
    },

    tile015: undefined,

    tile016: function(){
        const shape1 = new p2.Capsule({ // Capsule below the chassis
          length: 125,
          radius: 7.5
        })

        return [{ shape: shape1, positionMod: [56, 0 ], angle: -1.57079633 , width: 125 + 7.5/2, height: 7.5*2 }]
    },

    tile017: function(){
        const shape1 = new p2.Capsule({ // Capsule below the chassis
          length: 140,
          radius: 7.5
        })

        return [{ shape: shape1, positionMod: [-24, 0], angle: -1.1 , width: 140 + 7.5/2, height: 7.5*2 }]
    },

    tile018: function(){
        const shape1 = new p2.Capsule({ // Capsule below the chassis
          length: 23,
          radius: 7.5
        })

        return [{ shape: shape1, positionMod: [61, 52], angle: -1.1 , width: 23 + 7.5/2, height: 7.5*2 }]
    },

    tile019: function(){
        const shape1 = new p2.Capsule({ // Capsule below the chassis
          length: 118,
          radius: 7.5
        })

        return [{ shape: shape1, positionMod: [-36, -10], angle: -1.1 , width: 118 + 7.5/2, height: 7.5*2 }]
    },

    tile020: function(){
        const shape1 = new p2.Capsule({ // Capsule below the chassis
          length: 67,
          radius: 7.5
        })
        const shape2 = new p2.Capsule({ // Capsule below the chassis
          length: 65,
          radius: 7.5
        })

        return [
            { shape: shape1, positionMod: [-42, 29], angle: 1.28 , width: 67 + 7.5/2, height: 7.5*2 },
            { shape: shape2, positionMod: [-54, -33], angle: 1.460, width: 65 + 7.5/2, height: 7.5*2  }
        ]
    },

    tile021: undefined, tile022: undefined,

    tile023: function(){
        const shape1 = new p2.Capsule({ // Capsule below the chassis
          length: 67,
          radius: 7.5
        })
        const shape2 = new p2.Capsule({ // Capsule below the chassis
          length: 65,
          radius: 7.5
        })

        return [
            { shape: shape1, positionMod: [42, 29], angle: -1.28 , width: 67 + 7.5/2, height: 7.5*2 },
            { shape: shape2, positionMod: [54, -33], angle: -1.460, width: 65 + 7.5/2, height: 7.5*2  }
        ]
    },

    tile024: function(){
        const shape1 = new p2.Capsule({ // Capsule below the chassis
          length: 64,
          radius: 7.5
        })
        const shape2 = new p2.Capsule({ // Capsule below the chassis
          length: 60,
          radius: 7.5
        })
        const shape3 = new p2.Capsule({ // Capsule below the chassis
          length: 64,
          radius: 7.5
        })


        return [
            { shape: shape1, positionMod: [-50, -31], angle: 1.36079633 , width: 64 + 7.5/2, height: 7.5*2 },
            { shape: shape2, positionMod: [-23, 21], angle: 0.78079633 , width: 60 + 7.5/2, height: 7.5*2 },
            { shape: shape3, positionMod: [30, 50], angle: 0.20920367 , width: 64 + 7.5/2, height: 7.5*2 }
        ]
    },

    tile025: function(){
        const shape1 = new p2.Capsule({ // Capsule below the chassis
          length: 125,
          radius: 7.5
        })

        return [{ shape: shape1, positionMod: [0, 57], angle: 3.14159266 , width: 125 + 7.5/2, height: 7.5*2 }]
    },

    tile026: function(){
        const shape1 = new p2.Capsule({ // Capsule below the chassis
          length: 64,
          radius: 7.5
        })
        const shape2 = new p2.Capsule({ // Capsule below the chassis
          length: 60,
          radius: 7.5
        })
        const shape3 = new p2.Capsule({ // Capsule below the chassis
          length: 64,
          radius: 7.5
        })


        return [
            { shape: shape1, positionMod: [50, -31], angle: -1.36079633 , width: 64 + 7.5/2, height: 7.5*2 },
            { shape: shape2, positionMod: [23, 21], angle: -0.78079633 , width: 60 + 7.5/2, height: 7.5*2 },
            { shape: shape3, positionMod: [-30, 50], angle: -0.20920367 , width: 64 + 7.5/2, height: 7.5*2 }
        ]
    },

    tile027: function(){
        const shape1 = new p2.Capsule({ // Capsule below the chassis
          length: 140,
          radius: 7.5
        })

        return [{ shape: shape1, positionMod: [-24, 0], angle: 1.1 , width: 140 + 7.5/2, height: 7.5*2 }]
    },

    tile028: function(){
        const shape1 = new p2.Capsule({ // Capsule below the chassis
          length: 23,
          radius: 7.5
        })

        return [{ shape: shape1, positionMod: [61, -52], angle: 1.1 , width: 23 + 7.5/2, height: 7.5*2 }]
    },

    tile029: function(){
        const shape1 = new p2.Capsule({ // Capsule below the chassis
          length: 115,
          radius: 7.5
        })

        return [{ shape: shape1, positionMod: [-36, 10], angle: 1.1 , width: 115 + 7.5/2, height: 7.5*2 }]
    },

    tile030: function(){
        const shape1 = new p2.Capsule({ // Capsule below the chassis
          length: 67,
          radius: 7.5
        })
        const shape2 = new p2.Capsule({ // Capsule below the chassis
          length: 67,
          radius: 7.5
        })

        return [
        	{ shape: shape1, positionMod: [-13, -36], angle: 0.95 , width: 67 + 7.5/2, height: 7.5*2 },
            { shape: shape2, positionMod: [34, 11], angle: -2.5, width: 67 + 7.5/2, height: 7.5*2  }
        ]
    },

    tile031: function(){
        const shape1 = new p2.Capsule({ // Capsule below the chassis
          length: 67,
          radius: 7.5
        })
        const shape2 = new p2.Capsule({ // Capsule below the chassis
          length: 65,
          radius: 7.5
        })

        return [
            { shape: shape1, positionMod: [-33, 42], angle: 0.31 , width: 67 + 7.5/2, height: 7.5*2 },
            { shape: shape2, positionMod: [31, 55], angle: 0.11, width: 65 + 7.5/2, height: 7.5*2  }
        ]
    },

    tile032: function(){
        const shape1 = new p2.Capsule({ // Capsule below the chassis
          length: 67,
          radius: 7.5
        })
        const shape2 = new p2.Capsule({ // Capsule below the chassis
          length: 65,
          radius: 7.5
        })

        return [
            { shape: shape1, positionMod: [31, 42], angle: -0.31 , width: 67 + 7.5/2, height: 7.5*2 },
            { shape: shape2, positionMod: [-33, 55], angle: -0.11, width: 65 + 7.5/2, height: 7.5*2  }
        ]
    },

    tile033: function(){
        const shape1 = new p2.Capsule({ // Capsule below the chassis
          length: 67,
          radius: 7.5
        })
        const shape2 = new p2.Capsule({ // Capsule below the chassis
          length: 67,
          radius: 7.5
        })

        return [
        	{ shape: shape1, positionMod: [14, -36], angle: -0.95 , width: 67 + 7.5/2, height: 7.5*2 },
            { shape: shape2, positionMod: [-35, 11], angle: 2.5, width: 67 + 7.5/2, height: 7.5*2  }
        ]
    },

    tile034: function(){
        const shape1 = new p2.Capsule({ // Capsule below the chassis
          length: 64,
          radius: 7.5
        })
        const shape2 = new p2.Capsule({ // Capsule below the chassis
          length: 60,
          radius: 7.5
        })
        const shape3 = new p2.Capsule({ // Capsule below the chassis
          length: 64,
          radius: 7.5
        })

        return [
            { shape: shape1, positionMod: [30, -50], angle: -0.21 , width: 64 + 7.5/2, height: 7.5*2 },
            { shape: shape2, positionMod: [-23, -22], angle: -0.79 , width: 60 + 7.5/2, height: 7.5*2 },
            { shape: shape3, positionMod: [-50, 31], angle: 1.78 , width: 64 + 7.5/2, height: 7.5*2 }
        ]
    },

    tile035: function(){
        const shape1 = new p2.Capsule({ // Capsule below the chassis
          length: 125,
          radius: 7.5
        })

        return [{ shape: shape1, positionMod: [0, -58], angle: 0 , width: 125 + 7.5/2, height: 7.5*2 }]
    },

    tile036: function(){
        const shape1 = new p2.Capsule({ // Capsule below the chassis
          length: 64,
          radius: 7.5
        })
        const shape2 = new p2.Capsule({ // Capsule below the chassis
          length: 60,
          radius: 7.5
        })
        const shape3 = new p2.Capsule({ // Capsule below the chassis
          length: 64,
          radius: 7.5
        })

        return [
            { shape: shape1, positionMod: [-30, -50], angle: 0.21 , width: 64 + 7.5/2, height: 7.5*2 },
            { shape: shape2, positionMod: [23, -22], angle: 0.79 , width: 60 + 7.5/2, height: 7.5*2 },
            { shape: shape3, positionMod: [50, 31], angle: -1.78 , width: 64 + 7.5/2, height: 7.5*2 }
        ]
    },

    tile037: function(){
        const shape1 = new p2.Capsule({ // Capsule below the chassis
          length: 115,
          radius: 7.5
        })

        return [{ shape: shape1, positionMod: [34, -12], angle: 1.1 , width: 115 + 7.5/2, height: 7.5*2 }]
    },

    tile038: function(){
        const shape1 = new p2.Capsule({ // Capsule below the chassis
          length: 23,
          radius: 7.5
        })

        return [{ shape: shape1, positionMod: [-61, 52], angle: 1.1 , width: 23 + 7.5/2, height: 7.5*2 }]
    },

    tile039: function(){
        const shape1 = new p2.Capsule({ // Capsule below the chassis
          length: 140,
          radius: 7.5
        })

        return [{ shape: shape1, positionMod: [24, 0], angle: 1.1 , width: 140 + 7.5/2, height: 7.5*2 }]
    },

    tile040: function(){
        const shape1 = new p2.Capsule({ // Capsule below the chassis
          length: 67,
          radius: 7.5
        })
        const shape2 = new p2.Capsule({ // Capsule below the chassis
          length: 67,
          radius: 7.5
        })

        return [
        	{ shape: shape1, positionMod: [-13, 34], angle: -0.95 , width: 67 + 7.5/2, height: 7.5*2 },
            { shape: shape2, positionMod: [34, -12], angle: 2.5, width: 67 + 7.5/2, height: 7.5*2  }
        ]
    },

    tile041: function(){
        const shape1 = new p2.Capsule({ // Capsule below the chassis
          length: 67,
          radius: 7.5
        })
        const shape2 = new p2.Capsule({ // Capsule below the chassis
          length: 65,
          radius: 7.5
        })

        return [
            { shape: shape1, positionMod: [-33, -42], angle: -0.31 , width: 67 + 7.5/2, height: 7.5*2 },
            { shape: shape2, positionMod: [31, -55], angle: -0.11, width: 65 + 7.5/2, height: 7.5*2  }
        ]
    },

    tile042: function(){
        const shape1 = new p2.Capsule({ // Capsule below the chassis
          length: 67,
          radius: 7.5
        })
        const shape2 = new p2.Capsule({ // Capsule below the chassis
          length: 65,
          radius: 7.5
        })

        return [
            { shape: shape1, positionMod: [31, -42], angle: 0.31 , width: 67 + 7.5/2, height: 7.5*2 },
            { shape: shape2, positionMod: [-33, -55], angle: 0.11, width: 65 + 7.5/2, height: 7.5*2  }
        ]
    },

    tile043: function(){
        const shape1 = new p2.Capsule({ // Capsule below the chassis
          length: 67,
          radius: 7.5
        })
        const shape2 = new p2.Capsule({ // Capsule below the chassis
          length: 67,
          radius: 7.5
        })

        return [
        	{ shape: shape1, positionMod: [13, 34], angle: 0.95 , width: 67 + 7.5/2, height: 7.5*2 },
            { shape: shape2, positionMod: [-34, -12], angle: -2.5, width: 67 + 7.5/2, height: 7.5*2  }
        ]
    },

    tile044: function(){
        const shape1 = new p2.Capsule({ // Capsule below the chassis
          length: 125,
          radius: 7.5
        })

        return [{ shape: shape1, positionMod: [-56, 0 ], angle: 1.57079633 , width: 125 + 7.5/2, height: 7.5*2 }]
    },

    tile045: undefined,

    tile046: function(){
        const shape1 = new p2.Capsule({ // Capsule below the chassis
          length: 125,
          radius: 7.5
        })

        return [{ shape: shape1, positionMod: [56, 0 ], angle: -1.57079633 , width: 125 + 7.5/2, height: 7.5*2 }]
    },

    tile047: undefined, tile048: undefined, tile049: undefined,

    tile050: function(){
        const shape1 = new p2.Capsule({ // Capsule below the chassis
          length: 67,
          radius: 7.5
        })
        const shape2 = new p2.Capsule({ // Capsule below the chassis
          length: 65,
          radius: 7.5
        })

        return [
            { shape: shape1, positionMod: [-42, -33], angle: -1.28 , width: 67 + 7.5/2, height: 7.5*2 },
            { shape: shape2, positionMod: [-54, 29], angle: -1.460, width: 65 + 7.5/2, height: 7.5*2  }
        ]
    },

    tile051: undefined,

    tile052: undefined,

    tile053: function(){
        const shape1 = new p2.Capsule({ // Capsule below the chassis
          length: 67,
          radius: 7.5
        })
        const shape2 = new p2.Capsule({ // Capsule below the chassis
          length: 65,
          radius: 7.5
        })

        return [
            { shape: shape1, positionMod: [42, -33], angle: 1.28 , width: 67 + 7.5/2, height: 7.5*2 },
            { shape: shape2, positionMod: [54, 29], angle: 1.460, width: 65 + 7.5/2, height: 7.5*2  }
        ]
    },

    tile054: function(){
        const shape1 = new p2.Capsule({ // Capsule below the chassis
          length: 64,
          radius: 7.5
        })
        const shape2 = new p2.Capsule({ // Capsule below the chassis
          length: 60,
          radius: 7.5
        })
        const shape3 = new p2.Capsule({ // Capsule below the chassis
          length: 64,
          radius: 7.5
        })


        return [
            { shape: shape1, positionMod: [-50, -31], angle: 1.36079633 , width: 64 + 7.5/2, height: 7.5*2 },
            { shape: shape2, positionMod: [-23, 21], angle: 0.78079633 , width: 60 + 7.5/2, height: 7.5*2 },
            { shape: shape3, positionMod: [30, 50], angle: 0.20920367 , width: 64 + 7.5/2, height: 7.5*2 }
        ]
    },

    tile055: function(){
        const shape1 = new p2.Capsule({ // Capsule below the chassis
          length: 125,
          radius: 7.5
        })

        return [{ shape: shape1, positionMod: [0, 57], angle: 3.14159266 , width: 125 + 7.5/2, height: 7.5*2 }]
    },

    tile056: function(){
        const shape1 = new p2.Capsule({ // Capsule below the chassis
          length: 64,
          radius: 7.5
        })
        const shape2 = new p2.Capsule({ // Capsule below the chassis
          length: 60,
          radius: 7.5
        })
        const shape3 = new p2.Capsule({ // Capsule below the chassis
          length: 64,
          radius: 7.5
        })


        return [
            { shape: shape1, positionMod: [50, -31], angle: -1.36079633 , width: 64 + 7.5/2, height: 7.5*2 },
            { shape: shape2, positionMod: [23, 21], angle: -0.78079633 , width: 60 + 7.5/2, height: 7.5*2 },
            { shape: shape3, positionMod: [-30, 50], angle: -0.20920367 , width: 64 + 7.5/2, height: 7.5*2 }
        ]
    },

    tile057: undefined, tile058: undefined, tile059: undefined,

    tile060: function(){
        const shape1 = new p2.Capsule({ // Capsule below the chassis
          length: 67,
          radius: 7.5
        })
        const shape2 = new p2.Capsule({ // Capsule below the chassis
          length: 65,
          radius: 7.5
        })

        return [
            { shape: shape1, positionMod: [-42, 29], angle: 1.28 , width: 67 + 7.5/2, height: 7.5*2 },
            { shape: shape2, positionMod: [-54, -33], angle: 1.460, width: 65 + 7.5/2, height: 7.5*2  }
        ]
    },

    tile061: undefined, tile062: undefined,

    tile063: function(){
        const shape1 = new p2.Capsule({ // Capsule below the chassis
          length: 67,
          radius: 7.5
        })
        const shape2 = new p2.Capsule({ // Capsule below the chassis
          length: 65,
          radius: 7.5
        })

        return [
            { shape: shape1, positionMod: [42, 29], angle: -1.28 , width: 67 + 7.5/2, height: 7.5*2 },
            { shape: shape2, positionMod: [54, -33], angle: -1.460, width: 65 + 7.5/2, height: 7.5*2  }
        ]
    },

    tile064: function(){
        const shape1 = new p2.Capsule({ // Capsule below the chassis
          length: 125,
          radius: 7.5
        })

        return [{ shape: shape1, positionMod: [-56, 0 ], angle: 1.57079633 , width: 125 + 7.5/2, height: 7.5*2 }]
    },

    tile065: undefined,

    tile066: function(){
        const shape1 = new p2.Capsule({ // Capsule below the chassis
          length: 125,
          radius: 7.5
        })

        return [{ shape: shape1, positionMod: [56, 0 ], angle: -1.57079633 , width: 125 + 7.5/2, height: 7.5*2 }]
    },

    tile067: undefined, tile068: undefined, tile069: undefined,

    tile070: function(){
        const shape1 = new p2.Capsule({ // Capsule below the chassis
          length: 67,
          radius: 7.5
        })
        const shape2 = new p2.Capsule({ // Capsule below the chassis
          length: 67,
          radius: 7.5
        })

        return [
        	{ shape: shape1, positionMod: [-13, -36], angle: 0.95 , width: 67 + 7.5/2, height: 7.5*2 },
            { shape: shape2, positionMod: [34, 11], angle: -2.5, width: 67 + 7.5/2, height: 7.5*2  }
        ]
    },

    tile071: function(){
        const shape1 = new p2.Capsule({ // Capsule below the chassis
          length: 67,
          radius: 7.5
        })
        const shape2 = new p2.Capsule({ // Capsule below the chassis
          length: 65,
          radius: 7.5
        })

        return [
            { shape: shape1, positionMod: [-33, 42], angle: 0.31 , width: 67 + 7.5/2, height: 7.5*2 },
            { shape: shape2, positionMod: [31, 55], angle: 0.11, width: 65 + 7.5/2, height: 7.5*2  }
        ]
    },

    tile072: function(){
        const shape1 = new p2.Capsule({ // Capsule below the chassis
          length: 67,
          radius: 7.5
        })
        const shape2 = new p2.Capsule({ // Capsule below the chassis
          length: 65,
          radius: 7.5
        })

        return [
            { shape: shape1, positionMod: [31, 42], angle: -0.31 , width: 67 + 7.5/2, height: 7.5*2 },
            { shape: shape2, positionMod: [-33, 55], angle: -0.11, width: 65 + 7.5/2, height: 7.5*2  }
        ]
    },

    tile073: function(){
        const shape1 = new p2.Capsule({ // Capsule below the chassis
          length: 67,
          radius: 7.5
        })
        const shape2 = new p2.Capsule({ // Capsule below the chassis
          length: 67,
          radius: 7.5
        })

        return [
        	{ shape: shape1, positionMod: [14, -36], angle: -0.95 , width: 67 + 7.5/2, height: 7.5*2 },
            { shape: shape2, positionMod: [-35, 11], angle: 2.5, width: 67 + 7.5/2, height: 7.5*2  }
        ]
    },

    tile074: undefined, tile075: undefined,
    tile076: undefined, tile077: undefined, tile078: undefined, tile079: undefined,

    tile080: function(){
        const shape1 = new p2.Capsule({ // Capsule below the chassis
          length: 118,
          radius: 7.5
        })

        return [{ shape: shape1, positionMod: [10, 37], angle: -0.47079633 , width: 118 + 7.5/2, height: 7.5*2 }]
    },

    tile081: function(){
        const shape1 = new p2.Capsule({ // Capsule below the chassis
          length: 140,
          radius: 7.5
        })

        return [{ shape: shape1, positionMod: [ 0, -23], angle: -0.47079633 , width: 140 + 7.5/2, height: 7.5*2 }]
    },

    tile082: function(){
        const shape1 = new p2.Capsule({ // Capsule below the chassis
          length: 140,
          radius: 7.5
        })

        return [{ shape: shape1, positionMod: [ 0, -23], angle: 0.47079633 , width: 140 + 7.5/2, height: 7.5*2 }]
    },

    tile083: function(){
        const shape1 = new p2.Capsule({ // Capsule below the chassis
          length: 118,
          radius: 7.5
        })

        return [{ shape: shape1, positionMod: [-10, 37], angle: 0.47079633 , width: 118 + 7.5/2, height: 7.5*2 }]
    },

    tile084: undefined, tile085: undefined,
    tile086: undefined, tile087: undefined,

    tile088: function(){
        const shape1 = new p2.Capsule({ // Capsule below the chassis
          length: 125,
          radius: 7.5
        })

        return [{ shape: shape1, positionMod: [0, -58], angle: 0 , width: 125 + 7.5/2, height: 7.5*2 }]
    },

    tile089: undefined,

    tile090: function(){
        const shape1 = new p2.Capsule({ // Capsule below the chassis
          length: 23,
          radius: 7.5
        })

        return [{ shape: shape1, positionMod: [-52, -60], angle: -0.47079633 , width: 23 + 7.5/2, height: 7.5*2 }]
    },

    tile091: function(){
        const shape1 = new p2.Capsule({ // Capsule below the chassis
          length: 23,
          radius: 7.5
        })

        return [{ shape: shape1, positionMod: [52, 59], angle: -0.47079633 , width: 23 + 7.5/2, height: 7.5*2 }]
    },

    tile092: function(){
        const shape1 = new p2.Capsule({ // Capsule below the chassis
          length: 23,
          radius: 7.5
        })

        return [{ shape: shape1, positionMod: [-52, 59], angle: 0.47079633 , width: 23 + 7.5/2, height: 7.5*2 }]
    },

    tile093: function(){
        const shape1 = new p2.Capsule({ // Capsule below the chassis
          length: 23,
          radius: 7.5
        })

        return [{ shape: shape1, positionMod: [52, -60], angle: 0.47079633 , width: 23 + 7.5/2, height: 7.5*2 }]
    },

    tile094: undefined, tile095: undefined,
    tile096: undefined, tile097: undefined, tile098: undefined, tile099: undefined,

    tile100: function(){
        const shape1 = new p2.Capsule({ // Capsule below the chassis
          length: 140,
          radius: 7.5
        })

        return [{ shape: shape1, positionMod: [ 0, 23], angle: -0.47079633 , width: 140 + 7.5/2, height: 7.5*2 }]
    },

    tile101: function(){
        const shape1 = new p2.Capsule({ // Capsule below the chassis
          length: 118,
          radius: 7.5
        })

        return [{ shape: shape1, positionMod: [-10, -37], angle: -0.47079633 , width: 118 + 7.5/2, height: 7.5*2 }]
    },

    tile102: function(){
        const shape1 = new p2.Capsule({ // Capsule below the chassis
          length: 118,
          radius: 7.5
        })

        return [{ shape: shape1, positionMod: [10, -37], angle: 0.47079633 , width: 118 + 7.5/2, height: 7.5*2 }]
    },

    tile103: function(){
        const shape1 = new p2.Capsule({ // Capsule below the chassis
          length: 140,
          radius: 7.5
        })

        return [{ shape: shape1, positionMod: [ 0, 23], angle: 0.47079633 , width: 140 + 7.5/2, height: 7.5*2 }]
    },

    tile104: undefined, tile105: undefined,
    tile106: undefined, tile107: undefined,

    tile108: function(){
        const shape1 = new p2.Capsule({ // Capsule below the chassis
          length: 125,
          radius: 7.5
        })

        return [{ shape: shape1, positionMod: [0, 57], angle: 3.14159266 , width: 125 + 7.5/2, height: 7.5*2 }]
    },

    tile109: undefined, tile110: undefined




}
module.exports = roadAsphalt
