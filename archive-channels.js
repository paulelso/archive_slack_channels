require('dotenv').config()
const { WebClient } = require('@slack/web-api')
const fs = require('fs')

const botToken = process.env.botToken;
const userToken = process.env.userToken;

const web = new WebClient(userToken);
const fileData = fs.readFileSync('./input_files/channelIDsToArchive.csv', 'utf8');
channelIDs = fileData.split("\r\n");

(async () => {
    for (let i = 1; i < channelIDs.length; i++) {
        console.log("Archiving channel: ", channelIDs[i]);
        try {
            await web.admin.conversations.archive({
                'channel_id': channelIDs[i]                
            });
        } catch (error) {
            console.log("------please check archving_errors.csv ------", error);
            //fs file write channel id that wasn't shared
            fs.appendFileSync('./logs/archiving_errors.csv', channelIDs[i] + "\n")
        }
        console.log("3 second wait");
      //required for the 20+ per minute rate limit
      await new Promise(resolve => setTimeout(resolve, 3000));
    }
})();
