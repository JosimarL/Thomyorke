import jsonfile from "jsonfile";
import moment from "moment";

const path = "./data.json";

const date = moment().format();

const data = {
    date: date,
};

jsonfile.writeFile(path, data);











/*
import { Random } from "random";
import simpleGit from "simple-git";
import { Random } from "random"; 



const date = moment().format().subtract(5,'d').format();

const markCommit=(N=>){

if (n==0) return simpleGit.push();

        const x = Random.defaul.int(0,54);
        const y = Random.defaul.int(0,6);
        const date = moment().subtract(1,"y").add(x,"w").add(y,"d").format();
    const date =moment()
    const markCommit = (X,Y)=> 
    .subtract(1,"y")
    .add(1,"d")
    .add(X,"w")
    .add(Y,"d"
    .format();
    )_
   
const data = { date: 
    date ,

};
console.log(date);
jsonfile.writeFile(path, data,() =>[ 
simpleGit().add([path]).commit(date,{'--date':date},markCommits.bind(this,--n));
 } );

markCommits(100);

*/