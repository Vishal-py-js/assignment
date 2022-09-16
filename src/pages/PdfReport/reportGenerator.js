import jsPDF from "jspdf";
import "jspdf-autotable";


const generatePDF = (projects) => {
    const doc = new jsPDF();
    // define the titles
    const tableColumn = ["Project ID", "Project Name", "Budget(in crores)", "address", "status"];
    // define an empty array of rows
    const tableRows = [];

    // for each project pass all its data into an array
    projects.forEach(project => {
        const projectData = [
            project.projectId,
            project.projectName,
            project.budget,
            project.siteAddress,
            project.projectStatus
        ];
        tableRows.push(projectData);
    });


  // startY is basically margin-top
    doc.autoTable(tableColumn, tableRows, { startY: 20 });


    doc.text("Project Details", 84, 15);
    // we define the name of our PDF file.
    doc.save(`report.pdf`);
};

export default generatePDF;