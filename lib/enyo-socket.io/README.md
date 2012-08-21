# Enyo-Socket.io

Socket.io wrapper for EnyoJS

## Example

Can be used in much the same way as Socket.io

```javascript
var socket = new Socket();
socket.on('example', function(data){
  console.log(data);
});
```

Can also be passed a map of key-value pairs for on()

```javascript
var socket = new Socket();
socket.on({
  example: function(data){
    console.log(data);
  },
  example2: function(data){
    console.log(data);
  }
});
```

Constructor can take an initial map of key-value pairs that will be passed to on() during instantiation

```javascript
var socket = new Socket({
  init: {
    on: {
      example: function(data){
        console.log(data);
      },
      example2: function(data){
        console.log(data);
      }
    }
  }
});
```

Convenience function for emit exists on Socket

```javascript
var socket = new Socket();
socket.emit('example', 'example data');
```

Socket.io address can be configured on instantiation (Defaults to window.location.host)

```javascript
var socket = new Socket({
  address: 127.0.0.1
});
```

Socket.io configuration options can be passed to constructor as connOptions

```javascript
var socket = new Socket({
  connOptions: {
    transports: ['websocket']
  }
});
```

## TODO

Enyo Tests

Solidify API