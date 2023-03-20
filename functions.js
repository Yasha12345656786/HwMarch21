const fs = require('node:fs/promises');
 const path = require('node:path');


async function Create(n){

  let data = await fs.writeFile(path.join(__dirname,'Files','file[n].txt'),'Hello World',(err)=>{
        if(err)throw err;
    })
    while (n > 1) {
       await fs.appendFile(path.join(__dirname,'Files','file[n].txt'),'\nHello World',(err)=>{
            if(err) throw err;
        });
        n-=1;
    }

}

async function Read(n){
    while (n > 0) {
        await fs.readFile(path.join(__dirname,'Files','file[n].txt'));
        n-=1;
    }
}
const GetRandNumber = ()=>{
  let a = Math.floor(Math.random()*6);
  return a;
}

async function ConcatFiles(){
    await fs.writeFile(path.join(__dirname,'Files','stringtxt.txt'));
    await fs.unlink(path.join(__dirname,'Files','ConcatFiles.txt'));
    let n = GetRandNumber();
    while (n>=0) {
        let data = await fs.readFile(path.join(__dirname,'Files','file[n].txt'));
        await fs.appendFile(path.join(__dirname,'Files','stringtxt.txt'), data);
    }
    await fs.rename(path.join(__dirname,'Files','stringtxt.txt'),path.join(__dirname,'Files','concatFile.txt'));

}
module.exports={GetRandNumber};