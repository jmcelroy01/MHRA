document.getElementById("convertButton").addEventListener("click", function () {
  const inputText = document.getElementById("inputText").value;

  // Function to convert MLA to MHRA
  function mlaToMhra(mlaText) {
    const mlaPattern = /^([^,]+), ([^\.]+)(?:, et al\.)?\. "([^"]+)" ([^0-9]+)(?: (\d+\.\d+))? \((\d{4})\): (\d+(?:-\d+)?)\.$/gm;

    return mlaText.replace(mlaPattern, (_, lastName, firstName, title, publisher, issue, year, pages) => {
      const author = `${firstName} ${lastName}${mlaText.includes(", et al.") ? ", et al." : ""}`;
      return `${author}, "${title}" (${publisher}: ${year}), pp. ${page}.`;
    });
  }
  
  // Process the input and display output
  const convertedText = mlaToMhra(inputText);
  document.getElementById("outputText").textContent = convertedText || "No valid MLA references detected.";
});
