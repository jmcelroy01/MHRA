document.getElementById("convertButton").addEventListener("click", function () {
  const inputText = document.getElementById("inputText").value;

  // Function to convert MLA to MHRA
  function mlaToMhra(mlaText) {
    const mlaPattern = /^([^,]+), ([^\.]+)\. "([^"]+)" ([^0-9]+)(?: (\d+\.\d+))? ?\(?(\d{4})\)?\: (\d+(?:-\d+)?)\.$/gm;
    return mlaText.replace(mlaPattern, (_, lastName, firstName, title, publisher, issue, year, page) => {
      return `${firstName} ${lastName}, ${title} (${publisher}: ${year}), pp. ${page}.`;
    });
  }

  // Process the input and display output
  const convertedText = mlaToMhra(inputText);
  document.getElementById("outputText").textContent = convertedText || "No valid MLA references detected.";
});
