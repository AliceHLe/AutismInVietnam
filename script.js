/* .js files add interaction to your website */
var factList = [
    "Scientists haven't deciphered the cause of ASD yet. However, they do know that there are many factors that lead to ASD such as genetic disorder at early age or environmental influence.",
  
    "ASD affects boys more frequently than girls. For every 1 girl affected, there are 4 boys being diagnosed with the disorder.",
  
    "The IQ range of autistic people also vary widely. Those with Asperger Syndrome typically have above-average intelligence level while about 55% of autistic people have an intellectual disability (IQ<70).",
  
    "Minority groups tend to be diagnosed later and less often.",
  
    "April 2 is World Autism Awareness Day."
  ];
  
  var fact = document.getElementById("fact");
  var myButton = document.getElementById("myButton");
  var count = 0;
  
  if (myButton){
  myButton.addEventListener("click", displayFact);
  }
  
  function displayFact(){
    fact.innerHTML = factList[count];
    count++;
    if (count == factList.length){
      count = 0;
    }
  }
  