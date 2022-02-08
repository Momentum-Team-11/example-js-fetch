const url = 'https://api.github.com/orgs/momentum-team-11'

console.log('Calling fetch....')
// fetch(url)
//   .then(function (response) {
//     // console.log(response)
//     return response.json()
//   })
//   .then(function (data) {
//     // console.log(data)
//     document.querySelector('#user-name').innerHTML = `<h2>${data.name}</h2>`
//     //do whatever we want with that data, now in json format
//   })

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    document.querySelector('#user-name').innerHTML = `<h2>${data.name}</h2>`
    console.log(data.repos_url)
    return data.repos_url // returning this so I can make another request in the next step
  })
  .then((reposUrl) => fetch(reposUrl))
  .then((res) => res.json())
  .then((data) => {
    // can do stuff here with repos data
    console.log(data)

    // here I'm just taking ONE repo so that I can manage it more easily,
    // but I will want to do this in a loop for ALL of the repos.
    // const justOneRepo = data[0]
    // document.querySelector(
    //   '#org-data'
    // ).innerHTML = `<a href=${justOneRepo.url}>${justOneRepo.name}</a>`

    // Here it is with a loop
    for (let repo of data) {
      document.querySelector(
        '#org-data'
      ).innerHTML += `<p><a href=${repo.url}>${repo.name}</a></p>`
    }
  })
