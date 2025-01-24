const maahmaah = [
    "Caano daatay dabadood la qabay..",
    "TNin aan talin jirin loo taliyaa.",
    "Far kaliya fool ma dhaqdo..",
    "intaadan falin ka fiirso..",
    
    "Far kaliya fool ma dhaqdo..",
   
  ];
  
  getQuotes = () => {
    const randIndex = Math.floor(Math.random() * maahmaah.length);
    document.getElementById("quote").textContent = maahmaah[randIndex];
  }