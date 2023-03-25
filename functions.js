
const {existsSync,readdirSync} = require('fs');
const {mkdir, appendFile, readFile,unlink,rename} = require('node:fs/promises');
 const path = require('node:path');


async function Create(n,text){
    try {
        
    if (!existsSync(path.join(__dirname,'Files'))) {
        await mkdir(path.join(__dirname,'Files'))
    }
    await appendFile(path.join(__dirname,'Files',`file${n}.txt`),text);
       console.log(`created file${n}`); 
    } catch (err) {
        console.log(err);
    }

  

}

async function Read(n){
   try {
    let data = await readFile(path.join(__dirname,'Files',`file${n}.txt`));
    return data.toString();
   } catch (err) {
    console.log(err);
   }
}
const GetRandNumber = ()=>{
    try {
        const MAX = 5,MIN = 1;
        return Math.round(Math.random()* (MAX-MIN)+MIN);
        
    } catch (err) {
        console.log(err);
    }
 
  
}

async function ConcatFiles(){
    try {
        if (existsSync(path.join(__dirname,'Files','concatTextFile,txt'))) {
            await unlink(path.join(__dirname,'Files','concatTextFile,txt'));   
        }
        let n = GetRandNumber();
        console.log('n =', n);
        for (let i = 1; i <= n; i++) {
            let text = await Read(i);
            await appendFile(path.join(__dirname,'Files','stringtxt.txt'),`${text}\n`);   
        }
        await rename(path.join(__dirname,'Files','stringtxt.txt'), path.join(__dirname,'Files','concatTextFile,txt'))
        console.log(`creted concatTextFile until n = ${n}`);
    } catch (err) {
        console.log(err);
    }

}
async function ReadRndFile(){
    try {
       let n = GetRandNumber();
       let data = await readFile(path.join(__dirname,'Files',`file${n}.txt`));
       console.log(data.toString());   
    } catch (err) {
        console.log(err);
    }

}
async function PrintAllFiles(){

    try {
        const length = await readdirSync('./Files').length;
    while(length> 0){
        console.log('**********\n');
        console.log(Read(length));
        console.log('\n');
        length-=1;
    }     
    } catch (err) {
        console.log(err);
    }
    


}
module.exports={Create,ConcatFiles,ReadRndFile,PrintAllFiles};