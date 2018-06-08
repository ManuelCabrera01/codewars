const solve = (s)=>{
   let contU=0;
   let contL=0;
    let my1=s

    let str = s.split('').forEach((e)=>{
    if (e === e.toUpperCase()) contU++;
   else if (e === e.toLowerCase()) contL++;

 }
 );
  if(contL>=contU)return my1.toLowerCase()
 else return my1.toUpperCase()

 }
