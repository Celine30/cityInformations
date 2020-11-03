
let inscription = false
let users;

document.getElementById('boutonInscription').onclick= function(event){
    event.preventDefault();
    if(inscription == false) {
        document.getElementById('formInscription').classList.remove("noVisible");
        inscription = true;
    }else{
        document.getElementById('formInscription').classList.add("noVisible");
        inscription = false;

    }
    getActorsToServer()
    console.log(users)
    // fetch_new_user()
}

// function getActorsToServer(){
//     fetch('https://nilsaden.firebaseio.com/.json')
//     .then(response => {
//         return response.json()
//     })
//     .then(json => {
//         fetch_new_user(json)
//     })
// }



// function fetch_new_user(user){
//     fetch('https://nilsaden.firebaseio.com/.json', user )
//     .then(response => {
//         console.log(user)
//         console.log('je suis la')
//         return response.json()
//     })
//     .then(json => {
//         console.log(json)
      
//     })
}
