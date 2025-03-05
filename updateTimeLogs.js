
// updateTimeLogs.js

// updateTimeLogs.js
function updateDailyTimeLogsAndTeamData(filteredWorklogs, dailyTimeLogs) {
    let totalTimeSpentForSprint = 0;
  
    filteredWorklogs.map(log => {
      const assigneeName = log.author.displayName || "Unassigned"; // Get the assignee for the specific log
      const date = new Date(log.started).toISOString().split('T')[0]; // Extract the date
      const timeSpentHours = log.timeSpentSeconds / 3600; // Convert seconds to hours
  
      totalTimeSpentForSprint += timeSpentHours;
  
      // Ensuring dailyTimeLogs has an entry for the specific date.
      dailyTimeLogs[date] = dailyTimeLogs[date] || {};
  
      // Ensuring the specific assignee has an entry for the date.
      dailyTimeLogs[date][assigneeName] = (dailyTimeLogs[date][assigneeName] || 0) + timeSpentHours;
  
    //   // Creating an entry for the assignee in teamData if it doesn't exist.
    //   teamData[assigneeName] = teamData[assigneeName] || {
    //     name: assigneeName,
    //     storyPoints: 0,
    //     completedStoryPoints: 0,
    //     timeSpent: 0,
    //     blockedTickets: 0,
    //     carryForwardTickets: 0,
    //     prs: 0,
    //     yetToStart: 0,
    //     completed: 0,
    //     epics: []
    //   };
  
    //   teamData[assigneeName].timeSpent += timeSpentHours;
    });
  
    return totalTimeSpentForSprint;
  }
  
// Filtering

// function updateDailyTimeLogsAndTeamData(filteredWorklogs, dailyTimeLogs, teamData) {
//     let totalTimeSpentForSprint = 0;
  
//     filteredWorklogs.forEach(log => {
//       const assigneeName = log.author.displayName || "Unassigned"; // Get the assignee for the specific log
//       const date = new Date(log.started).toISOString().split('T')[0]; // Extract the date
//       const timeSpentHours = log.timeSpentSeconds / 3600; // Convert seconds to hours
  
//       totalTimeSpentForSprint += timeSpentHours;
  
//       // Ensuring dailyTimeLogs has an entry for the specific date.
//       if (!dailyTimeLogs[date]) {
//         dailyTimeLogs[date] = {};
//       }
  
//       // Ensuring the specific assignee has an entry for the date.
//       if (!dailyTimeLogs[date][assigneeName]) {
//         dailyTimeLogs[date][assigneeName] = 0;
//       }
  
//       // Add time spent to the specific assignee's log for the given date
//       dailyTimeLogs[date][assigneeName] += timeSpentHours;
  
//       // Creating an entry for the assignee in teamData if it doesn't exist.
//       if (!teamData[assigneeName]) {
//         teamData[assigneeName] = {
//           name: assigneeName,
//           storyPoints: 0,
//           completedStoryPoints: 0,
//           timeSpent: 0,
//           blockedTickets: 0,
//           carryForwardTickets: 0,
//           prs: 0,
//           yetToStart: 0,
//           completed: 0,
//           epics: []
//         };
//       }
  
//       teamData[assigneeName].timeSpent += timeSpentHours;
//     });
  
//     return totalTimeSpentForSprint;
//   }
  