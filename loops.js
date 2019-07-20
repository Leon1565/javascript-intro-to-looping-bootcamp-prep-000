let timer = 10;

function whileLoop(){
  while(timer > 0){
    console.log(--timer);
    if(timer === 0){
      console.log('done');
    }
  }
}

