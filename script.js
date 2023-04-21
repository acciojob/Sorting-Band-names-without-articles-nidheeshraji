//your code here
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
function sortBandNames(touristSpots) {
  // Define the list of articles
  const articles = ["a", "an", "the"];
  
  // Sort the band names in lexicographic order
  bandNames.sort(function(a, b) {
    // Remove the articles from the band names
    let nameA = a.toLowerCase().split(" ");
    let nameB = b.toLowerCase().split(" ");
    
    // Remove the articles from the start of the band names
    if (articles.includes(nameA[0])) {
      nameA.shift();
    }
    if (articles.includes(nameB[0])) {
      nameB.shift();
    }
    
    // Compare the band names
    if (nameA.join(" ") < nameB.join(" ")) {
      return -1;
    } else if (nameA.join(" ") > nameB.join(" ")) {
      return 1;
    } else {
      return 0;
    }
  });

  // Display the sorted band names in an unordered list
  let bandList = document.getElementById("band");
  for (let i = 0; i < bandNames.length; i++) {
    let listItem = document.createElement("li");
    listItem.textContent = bandNames[i];
    bandList.appendChild(listItem);
  }
}

sortBandNames(bandNames);

