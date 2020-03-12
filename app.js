console.log('hello!')


let source =`https://spreadsheets.google.com/feeds/list/1WBpqh72EFYlK5pVZ2rXCjlribtDEV5x-vkl914I2gy8/od6/public/values?alt=json`
/*let source = 'https://docs.google.com/spreadsheets/d/1WBpqh72EFYlK5pVZ2rXCjlribtDEV5x-vkl914I2gy8/edit#gid=0'*/

let id= '1WBpqh72EFYlK5pVZ2rXCjlribtDEV5x-vkl914I2gy8'

let projects = ['The Best Chocolate Chip Cookies','Fashion Blog','Random Imager','Curiosity']

fetch(source)
  .then( response => response.json() ) // this parses the data from string back into an object
  .then( data =>  {
      console.log('data', data)

  let projects = data.feed.entry.map( project => {
    return {
        title: project.gsx$title.$t,
        image: project.gsx$image.$t,
        description: project.gsx$description.$t,
        url: project.gsx$url.$t
      }
    })
    createMyProjects(projects)
}) 
.catch( err => console.log('err', err))
function createMyProjects(projects){
    projects.forEach(project => {
        let $card = $(`
        <div class="col mb-4">
      <div class="card">
        <img src="${project.image}" class="card-img-top" alt="">
        <div class="card-body">
          <h5 class="card-title">${project.title}</h5>
          <p class="card-text">${project.description}</p>
          <a href="${project.url} class="btn btn-primary">Button</a>
        </div>
      </div>
    </div>`)
    console.log(project.title)

        $('.cards').append($card)
})}

