
let inscription = false

document.getElementById('boutonInscription').onclick= function(event){
    event.preventDefault();
    if(inscription == false) {
        document.getElementById('formInscription').classList.remove("noVisible");
        inscription = true;
    }else{
        document.getElementById('formInscription').classList.add("noVisible");
        inscription = false;

    }
    

}


