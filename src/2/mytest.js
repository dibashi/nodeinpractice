

process.stdin.resume();

process.on('SIGHUP',function() 
{
    console.log('rereere');
})

console.log('pid',process.pid);