enyo.kind({
  name: 'Socket',
  kind: enyo.Component,
  address: window.location.host,
  connOptions: {},
  socket: null,
  // Initial state, allow for passing listener hash to the constructor
  init: {
    on: {}
  },
  on: function(mapOrName, optionalCallback){
    // Allows for normal socket.on('test', function(data){})
    // Also allows to pass a map on name: callback pairs
    var name, callback;
    if(enyo.isString(mapOrName) && enyo.isFunction(optionalCallback)){
      name = mapOrName;
      callback = optionalCallback;
      this.socket.on(name, callback);
    } else if(mapOrName === Object(mapOrName)){ // isObject
      for(name in mapOrName){
        if(mapOrName.hasOwnProperty(name)){
          callback = mapOrName[name];
          this.socket.on(name, enyo.bind(this, callback));
        }
      }
    }
  },
  emit: null,
  create: function(){
    // Has to be called to fire the super-class create method
    this.inherited(arguments);

    // Make a new socket
    this.socket = io.connect(this.address, this.connOptions);
    // Bind initial on listeners
    this.on(this.init.on);
    // Convenience for emit
    this.emit = enyo.bind(this.socket, this.socket.emit);
  }
});