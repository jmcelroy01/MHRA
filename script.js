document.getElementById("convertButton").addEventListener("click", function () {
  const inputText = document.getElementById("inputText").value;

  // Function to convert MLA to MHRA
  function mlaToMhra(mlaText) {
    // Regex pattern for MLA citations with quoted titles
    const mlaPattern = /^([^,]+), ([^\.]+)\. "([^"]+)"\. ([^:]+): ([^,]+), (\d+)\.$/gm;

    // Convert MLA citations to MHRA format
    return mlaText.replace(mlaPattern, (_, lastName, firstName, title, location, publisher, year) => {
      return `${firstName} ${lastName}, "${title}" (${location.trim()}: ${publisher.trim()}, ${year})`;
    });
  }

  // Process the input and display output
  const convertedText = mlaToMhra(inputText);
  document.getElementById("outputText").textContent = convertedText || "No valid MLA references detected.";
});
