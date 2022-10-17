import { projects as myProjects} from "/temp/projects.js";
const content = document.querySelectorAll('.content');
// const container = document.querySelector('.btn-container')
// const btns = document.querySelectorAll('.topic-btn')

window.addEventListener('DOMContentLoaded', () => {
    showProjects(myProjects)
    // showCategory(myProjects)
})

function showProjects(projects) {
    const projectList = projects.map(project =>{
        return `
        <div class='project'>
            <h4>${project.name}</h4>
            <p>${project.description}</p>
        </div>
        `;
    }).join('<br>')
    content.forEach((projects) =>{
        projects.innerHTML = projectList
    })
}

// function showCategory(projects) {
//     const categories = projects.reduce((values, item) => {
//         if(!values.includes(item.category)) {
//             values.push(item.category)
//         }
//         return values
//     },['all'])

//     const categoryBtns = categories.map((category) => {
//         return `
//         <button class="topicBtn" data-id="${category}">
//         ${category}</button>`
//     }).join('')

//     container.innerHTML = categoryBtns
//     const btns = container.querySelectorAll('.topicBtn')

//     btns.forEach((btn) =>{
//         btn.addEventListener('click', (e) =>{
//             const category = e.currentTarget.dataset.id
//             if(category) {
//                 const projectCategory = projects.filter((project) => {
//                     if(project.category === category) {
//                         return project
//                     }
//                 })
//                 if (category === 'All') {
//                     showProjects(projects)
//                 } else {
//                     showProjects(projectCategory)
//                 } 
//             }
//         })
//     })
// }