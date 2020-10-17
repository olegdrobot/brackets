module.exports = function check(str, bracketsConfig) {
  let curBrac=[[]];
let arrVert=[];
let curVert=[];
let cur=[];
let flag;
let flag_vertical=false;
let close = 0;
let open = 0;


for (i=0; i<bracketsConfig.length; i++){
    if (str[0]==bracketsConfig[i][0]) {
        curBrac.push([i,1]);
        i=bracketsConfig.length+1;
    }
}


 if(curBrac==0) {
 
    return false;} 

let k=0;
for (i=0; i<bracketsConfig.length; i++){
    if (bracketsConfig[i][0]==bracketsConfig[i][1]) {
        arrVert[k]=i;
        k++;
    }
}


for (i=1; i<str.length; i++){
    
    cur=[0,0,0];
    flag_vertical=false;
    
    for(j=0; j<bracketsConfig.length; j++){
        if (bracketsConfig[j][0]!=bracketsConfig[j][1]){
            switch(str[i]){
            case (bracketsConfig[j][0]):
            cur=[j,1,0];
       
            break;

            case (bracketsConfig[j][1]):
            cur=[j,-1,0];
         
            break;        
        }    
        }
        else {
      
            if(str[i]==bracketsConfig[j][0]) {
                cur=[j,1,1];
                
                flag_vertical=true;
            }
        }
        
        
    }

flag=0;

if (flag_vertical) {
       
        if (cur[0]==curBrac[curBrac.length-1][0]){
             curBrac[curBrac.length-1][1]++;
           
             if (curBrac[curBrac.length-1][1]%2==0){
                curBrac.pop();
             
                for (k=0; k<curVert.length; k++) {
                    if (curVert[k]==cur[0]) {
                        curVert.splice(k, 1);
                    }
                }
            
             }
        }
        else {
            if (curVert.includes(cur[0])) {return false;}
            else {
                curBrac.push(cur);
                curVert.push(cur[0]);
              
            }
        }

}
else {

if (cur[0]==curBrac[curBrac.length-1][0]){
    curBrac[curBrac.length-1][1]+=cur[1];
  
    if (curBrac[curBrac.length-1][1]==0){
        curBrac.pop();
        flag=1;
     
    }
 }

 if (cur[0]!=curBrac[curBrac.length-1][0] && cur[1]!=-1 && flag==0) {
    curBrac.push(cur);
    flag=1;

 }

 if (cur[0]!=curBrac[curBrac.length-1][0] && cur[1]==-1 && flag==0) {
 
    return false;
    
 } 

}

}
if ((curBrac==0) )  {
  
    return true;} 
else {
 
    return false;
}

}
