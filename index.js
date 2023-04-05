
const {EventHandler} = require('./Models/EventHandler');
const {Create,ConcatFiles, Read,GetRandNumber} = require('./functions')
async function Main(){
    for (let i = 1; i <=5; i++) {
       await Create(i,`text${i}`)
        
    }

    await ConcatFiles();
    const myEventHandler = new EventHandler();
    myEventHandler.on('readFile', async() => {
               let n = GetRandNumber();
           let data =await Read(n); 
           console.log(data);
           myEventHandler.emit(`endProgram`);

    });
    myEventHandler.on('endProgram',async()=>{
        for (let i = 1; i < 5; i++) {
            let txt = await Read(i);
            console.log(`${txt}\n***********`);
            
        }

    });
    
    //setTimeout(()=>{
      //  myEventHandler.emit('readFile');
    //},1000*6);
    let t=1;
    let interval = setInterval(()=>{
        console.log(t++);
        if(t==4){
            myEventHandler.emit('readFile');
            clearInterval(interval);
        }
    },1000)

    
    
}
Main();