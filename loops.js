let timer = 10;

function forLoop(number = []){
  for(let i = 0; 1 < 25; i++){
    number.push('I am a strange loop');
  }
}

function whileLoop(){
  while(timer > 0){
    console.log(--timer);
    if(timer === 0){
      console.log('done');
    }
  }
}

