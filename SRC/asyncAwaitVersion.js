

function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = { name: "John", age: 30 };
        resolve(data);
      }, 1000);
    });
  }
  
  function processData(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (data.age < 18) {
          reject(new Error("Age must be 18 or older"));
        } else {
          data.processed = true;
          resolve(data);
        }
      }, 1000);
    });
  }
  
  function displayData(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Displaying data:", data);
        resolve();
      }, 500);
    });
  }
  
  async function main() {
    try {
      const data = await fetchData();
      const processedData = await processData(data);
      await displayData(processedData);
      console.log("All operations completed successfully.");
    } catch (err) {
      console.error("Error:", err);
    }
  }
  
  main();
  