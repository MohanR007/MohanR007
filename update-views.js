import fs from 'fs';

async function updateViews() {
    const username = "MohanR007"; // Change to your GitHub username
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    
    let views = 0;
    if (fs.existsSync("profile-views.json")) {
        const fileData = JSON.parse(fs.readFileSync("profile-views.json", "utf-8"));
        views = fileData.views || 0;
    }

    views += 1;
    fs.writeFileSync("profile-views.json", JSON.stringify({ views }, null, 2));
    console.log(`Updated profile views: ${views}`);
}

updateViews().catch(console.error);
