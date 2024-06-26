

function fetchData(callback) {
    setTimeout(() => {
      const data = { name: "John", age: 30 };
      callback(null, data);
    }, 1000);
  }
  
  function processData(data, callback) {
    setTimeout(() => {
      if (data.age < 18) {
        callback(new Error("Age must be 18 or older"));
      } else {
        data.processed = true;
        callback(null, data);
      }
    }, 1000);
  }
  
  function displayData(data, callback) {
    setTimeout(() => {
      console.log("Displaying data:", data);
      callback(null);
    }, 500);
  }
  
  fetchData((err, data) => {
    if (err) {
      console.error("Error fetching data:", err);
    } else {
      processData(data, (err, processedData) => {
        if (err) {
          console.error("Error processing data:", err);
        } else {
          displayData(processedData, (err) => {
            if (err) {
              console.error("Error displaying data:", err);
            } else {
              console.log("All operations completed successfully.");
            }
          });
        }
      });
    }
  });
  