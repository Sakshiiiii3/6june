
// import './App.css';
// const myFunction = ()=> {
//   // Get the text field
//   var copyText = document.getElementById("myInput");

//   // Select the text field
//   copyText.select();
//   //copyText.setSelectionRange(0, 99999); // For mobile devices

//    // Copy the text inside the text field
//   navigator.clipboard.writeText(copyText.value);

//   // Alert the copied text
//   alert("Copied the text: " + copyText.value);
// }
  


// function CopyInput() {
//   const inputRef = useRef(null);

//   // Function to copy text to clipboard
//   const copyToClipboard = () => {
//       // Check if inputRef is available
//       if (inputRef.current) {
//           // Select the text inside the input field
//           inputRef.current.select();
//           // Execute the copy command
//           document.execCommand('copy');
//           // Deselect the text
//           inputRef.current.setSelectionRange(0, 0);
//       }
//   };
// function App() {
//   return (
//     <div className="App" >
//      <input type="text" id="myInput" />
//      <button onclick={myFunction()}> Copy text </button>
//     </div>
//   );
// }

// export default App;

import React, { useRef } from 'react';

function CopyInput() {
    const inputRef = useRef(null);

    // Function to copy text to clipboard
    const copyToClipboard = () => {
        // Check if inputRef is available
        if (inputRef.current) {
            // Select the text inside the input field
            inputRef.current.select();
            // Execute the copy command
            document.execCommand('copy');
            // Deselect the text
            inputRef.current.setSelectionRange(0, 0);
        }
    };

    return (
        <div>
            {/* Input field */}
            <input
                ref={inputRef}
                type="text"
                defaultValue="Text to copy"
                // Make input read-only
            />
            {/* Copy button */}
            <button onClick={copyToClipboard}>Copy</button>
        </div>
    );
}

export default CopyInput;
