import { projects } from "./projects.js";

const stackProjects = [];

projects.forEach((project, count = 2, stack = {}) => {
    console.log(project.title);
    if (count % 3 === 0) {
        console.log(`${count} / 3 no hay residuo`);
    } else {
        console.log(`${count} / 3 residuo = ${count % 3}`);
    }
})