document.getElementById("convertButton").addEventListener("click", function () {
  const inputText = document.getElementById("inputText").value;

  // Function to convert MLA to MHRA
  function mlaToMhra(mlaText) {
    const mlaPattern = /^([^,]+), ([^\.]+)\. "([^"]+)" ([^0-9]+)(?: (\d+\.\d+))? ?\(?(\d{4})\)?(?:\:|\.) (\d+(?:-\d+)?)\.$/gm;
    return mlaText.replace(mlaPattern, (_, lastName, firstName, title, publisher, issue, year, page) => {
      return `${firstName} ${lastName}, ${title} (${publisher} ${issue}: ${year}), pp. ${page}.`;
    });
  }

  // Process the input and display output
  const convertedText = mlaToMhra(inputText);
  document.getElementById("outputText").textContent = convertedText || "No valid MLA references detected.";
});

// Copy button functionality
document.getElementById("copyButton").addEventListener("click", function () {
  // Select the text in the output area
  const outputText = document.getElementById("outputText");
  
  // Create a temporary text area to copy the text
  const tempTextArea = document.createElement("textarea");
  tempTextArea.value = outputText.textContent;
  
  // Append the text area to the body (it must be in the DOM to be selectable)
  document.body.appendChild(tempTextArea);
  
  // Select the text inside the temporary text area
  tempTextArea.select();
  tempTextArea.setSelectionRange(0, 99999); // For mobile devices
  
  // Copy the text to clipboard
  document.execCommand("copy");
  
  // Remove the temporary text area from the DOM
  document.body.removeChild(tempTextArea);
  
  // Alert the user that the text has been copied
  alert("Text copied to clipboard!");
});
