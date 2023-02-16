fetch('https://api.mementodatabase.com/v1/libraries/libraryId/entries/?token=CvnVxFvud9AA9kpjjOn2rbpIfy3Jms'
)
.then((response) => {
  if (response.ok) {
    return response.json();
  } else {
    throw new Error("NETWORK RESPONSE NOT OK");
  }
})
.then(function (data) {   
  console.log(data); 
  displayPortfolio(data);
})
.catch((error) => {
  console.error("FETCH ERROR:", error);
});

   function displayPortfolio(data) {
    const portfolio = data.entries[2];
    const imageDiv = document.getElementById('prtData');
   };

   const portImg = document.createElement("img");

   