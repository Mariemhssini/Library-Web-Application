var selectdRow = null;
//show alerts
function showAlert(message,className){
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;

    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const main = document.querySelector(".main");
    container.insertBefore(div,main);

    setTimeout(()=>document.querySelector(".alert").remove(),3000);


}

//delete data
document.querySelector("categorie-list").addEventListener("click",(e)=>{
    target = e.target;
    if(target.classList.containes("delete")){
        target.parentElement.parentElement.remove();
        showAlert("categorie deleted");
    }
});