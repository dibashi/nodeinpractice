var events=require('events');
var emitter=new events.EventEmitter();

function hello(name){
  console.log("hello",name);
}
emitter.on('newListener',function(eventName,listener){
  console.log(eventName);
  console.log(listener);
});
emitter.addListener('say',hello);
