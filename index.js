const {EventHandler} = require('./Models/EventHandler');
const {Create,ConcatFiles,ReadRndFile,PrintAllFiles} = require('./functions')
async function Main(){
    await Create(1,'hello1');
    await Create(2,'hello2');
    await Create(3,'hello3');
    await Create(4,'hello4');
    await Create(5,'hello5');

    await ConcatFiles();
    let myEventHandler = new EventHandler();
    myEventHandler.on('readFile', ReadRndFile)
    myEventHandler.on('endProgram',PrintAllFiles)
    
    setTimeout(()=>{
        myEventHandler.emit('readFile');
    },1000*6);
    setTimeout(()=>{
        myEventHandler.emit('endProgram');
    },1000*0.1);

    
    
}
Main();