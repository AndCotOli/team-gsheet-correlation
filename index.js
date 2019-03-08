const {
  getGitHubTeamMembersBackend,
  getGitHubTeamMembersContributors,
  getGitHubTeamMembersFrontend,
} = require("./queryGitHub");

const gitHubBackendTeam = getGitHubTeamMembersBackend();
const gitHubContributorTeam = getGitHubTeamMembersContributors();
const gitHubFrontendTeam = getGitHubTeamMembersFrontend();

