const fs = require("fs");
const axios = require("axios");

const FILE_PATH = "profile-views.json";
const IP_API = "https://api64.ipify.org?format=json";

async function updateViews() {
  try {
    const response = await axios.get(IP_API);
    const userIP = response.data.ip;

    let data = JSON.parse(fs.readFileSync(FILE_PATH, "utf8"));

    if (!data.uniqueVisitors.includes(userIP)) {
      data.uniqueVisitors.push(userIP);
      data.views += 1;
    }

    fs.writeFileSync(FILE_PATH, JSON.stringify(data, null, 2));

    console.log("Profile views updated:", data.views);
  } catch (error) {
    console.error("Error updating views:", error);
  }
}

updateViews();
