# archive_slack_channels
Scripts to archive Slack channels

These scripts read Slack channel IDs from a CSV file to then archive the respective channels using the 
[admin.conversations.archive](https://api.slack.com/methods/admin.conversations.archive) Slack API.

A Slack user token with the [admin.conversations:write](https://api.slack.com/scopes/admin.conversations:write) scope is required to run the scripts. 
