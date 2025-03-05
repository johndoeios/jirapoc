
// Function to handle the sprint filtering logic

function getFilteredWorklogs(sprintField, worklogs, targetSprintName) {
    let filteredWorklogs = [];

    if (Array.isArray(sprintField) && sprintField.length > 0) {
      console.log("Available sprints in sprintField:", sprintField);

      const targetSprint = sprintField.find(sprint => {
        console.log("Inspecting sprint entry:", sprint);
        const nameMatch = sprint.match(/name=([^,]+)/);
        const sprintName = nameMatch ? nameMatch[1] : null;

        console.log("Parsed Sprint Name:", sprintName);
        return sprintName === targetSprintName;
      });

      if (targetSprint) {
        console.log("Matched Target Sprint:", targetSprint);

        const startDateMatch = targetSprint.match(/startDate=([\d\-T:.]+)/);
        const endDateMatch = targetSprint.match(/endDate=([\d\-T:.]+)/);

        const sprintStartDate = startDateMatch ? new Date(startDateMatch[1]) : null;
        const sprintEndDate = endDateMatch ? new Date(endDateMatch[1]) : null;

        console.log("Target Sprint Start Date:", sprintStartDate);
        console.log("Target Sprint End Date:", sprintEndDate);

        filteredWorklogs = worklogs.filter(log => {
          const logDate = new Date(log.started);
          return (
            sprintStartDate &&
            sprintEndDate &&
            logDate >= sprintStartDate &&
            logDate <= sprintEndDate
          );
        });
      } else {
        console.warn(`Sprint with name "${targetSprintName}" not found in sprintField.`);
      }
    } else {
      console.warn("Sprint Field is empty, undefined, or not an array:", sprintField);
    }

    return filteredWorklogs;
  }