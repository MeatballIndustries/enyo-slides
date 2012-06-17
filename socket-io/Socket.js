enyo.kind({
  name: 'Socket',
  address: window.location.href,
  socket: null,
  /* Socket.on
    Array of objects
    {
       name: 'news',
       callback: function(data){}
    }
  */
  on: [],
  emit: null,
  create: function(){
    // Has to be called to fire the super-class create method
    this.inherited(arguments);

    // Make a new socket
    this.socket = io.connect(this.address);
    // Bind arrays to on
    this.connect('on', this.on);
    // Convenience for emit
    this.emit = enyo.bind(this.socket, this.socket.emit);
  },
  connect: function(connType, connArray){
    enyo.forEach(connArray, function(connObject){
      this.socket[connType](connObject.name, connObject.callback ? connObject.callback : connObject.data);
    }, this);
  }
});