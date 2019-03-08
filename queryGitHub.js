const fetch = require('node-fetch');

const TEAM_IDS = {
  "contributor": "3043587",
  "backend": "3084665",
  "frontend": "3084675",
}

async function getGitHubTeamMembers(teamID) {
  const response = await fetch(`https://api.github.com/teams/${teamID}/members`, {
    method: "GET",
    headers: {
        Accept: 'application/vnd.github.v3+json',
        Authorization: `token ${process.env.GH_TOKEN}`,
      },
    });
  const body = await response.json();
  return body.map(user => user.login);
}

async function getGitHubTeamMembersBackend() {
  return await getGitHubTeamMembers(TEAM_IDS.backend);
}
async function getGitHubTeamMembersContributors() {
  return await getGitHubTeamMembers(TEAM_IDS.contributor);
}
async function getGitHubTeamMembersFrontend() {
  return await getGitHubTeamMembers(TEAM_IDS.frontend);
}

module.exports = {
  getGitHubTeamMembers,
  getGitHubTeamMembersBackend,
  getGitHubTeamMembersContributors,
  getGitHubTeamMembersFrontend,
}
