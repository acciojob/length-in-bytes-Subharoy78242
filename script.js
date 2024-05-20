const byteSize = (str) => {
  return new Blob([str]).size;
};

// Example usage:
const str = prompt("Enter some string.");
alert(byteSize(str));
