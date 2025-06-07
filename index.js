const tea = require('tea-js'); // Import the Tea Sepolia testnet library

// Set up project configuration and metadata
const projectId = 'codeflowx-portfolio';
const projectName = 'CodeFlowX Portfolio';
const projectDescription = 'A dedicated webpage to showcase my recent projects';

// Define a function to retrieve data from the testnet
async function getData() {
  try {
    // Retrieve data from the testnet
    const data = await tea.getData(projectId);
    console.log(`Data retrieved: ${data}`);
  } catch (error) {
    console.error(`Error retrieving data: ${error.message}`);
  }
}

// Define a function to update data on the testnet
async function updateData() {
  try {
    // Update data on the testnet
    const data = {
      name: 'CodeFlowX Portfolio',
      description: 'A dedicated webpage to showcase my recent projects',
      tags: ['portfolio', 'projects', 'web development'],
      repository: 'https://github.com/CodeFlowX/codeflowx-portfolio'
    };
    await tea.updateData(projectId, data);
    console.log(`Data updated: ${data}`);
  } catch (error) {
    console.error(`Error updating data: ${error.message}`);
  }
}

// Call the getData function
getData();

// Call the updateData function
updateData();