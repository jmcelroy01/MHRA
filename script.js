document.getElementById("convertButton").addEventListener("click", function () {
  const inputText = document.getElementById("inputText").value;

  // Function to convert MLA to MHRA
  function mlaToMhra(mlaText) {
    const mlaPattern = /^([^,]+), ([^\.]+)\. \"([^\*]+)\"\.(.*?): (.+), (\d+)\.$/gm;
    return mlaText.replace(mlaPattern, (_, lastName, firstName, title, location, publisher, year) => {
      return `${firstName} ${lastName}, "${title}". (${location.trim()}: ${publisher.trim()}, ${year})`;
    });
  }

  // Process the input and display output
  const convertedText = mlaToMhra(inputText);
  document.getElementById("outputText").textContent = convertedText || "No valid MLA references detected.";
});
