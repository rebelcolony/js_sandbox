// Task. We need a simple way to look at a users's badge count and JavaScript points
// Solution: Use Node.js to connect to Treehouse's API to get profile information to print out.

// Require https module
const https = require('https');

// Print Error Messages
function printError(error) {
  console.log(error.message)
}

// Function to print message to console
function printMessage(username, badgeCount, points) {
  const message = `${username} has ${badgeCount} total badges(s) and ${points} in JavaScript`;
  console.log(message);
}

function getProfile(username) {
  try {
    // Connect to the API URL (https://teamtreehouse.com/username.json)
    const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
      if (response.statusCode == 200) {
        let body = "";

        // Read the data
        response.on('data', data => {
          body += data.toString();
        });

        response.on('end', () => {
          try {
            // Parse the data
            const profile = JSON.parse(body);
            printMessage(username, profile.badges.length, profile.points.JavaScript)
          } catch (error) {
            printError(error);
          }
        });
        // Print the data
      } else {
        const message = `There was an error getting the profile for ${username}' (${response.statusCode})`;
        const statusCodeError = new Error(message);
      }
    });

    request.on('error', error => console.error(`Problem with request: ${error.message}`));
  } catch (error) {
    printError(error);
  }
}

const users = ["chalkers", "kevinbett", "davemcfarland"];

users.forEach(username => {
  getProfile(username);
}); // this can be refactored to this:

users.forEach(getProfile);

const usersFromProcess = process.argv.slice(2);
usersFromProcess.forEach(getProfile);
