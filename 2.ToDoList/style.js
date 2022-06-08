
let btnDom = document.querySelector("#liveToastBtn");
let listDom = document.querySelector("#list");
let taskDom=document.querySelector("#task");

let ullength = document.getElementsByTagName("li");



for(let i=0; i < ullength.length;i++){ 
    let closeButton = document.createElement("span");
    closeButton.textContent = "\u00D7";
    closeButton.classList.add("close");
    closeButton.onclick = removeButton;
    ullength[i].append(closeButton); 
    ullength[i].onclick = check;
}

btnDom.addEventListener('click', toDoEkle);

function check(){
    this.classList.toggle("checked"); 
  }
  
  function removeButton(){
    this.parentElement.remove(); 
  }
  


  function toDoEkle() {  // listeye ekleme yapma

    //taskDom.value=taskDom.value.trim()
    if(taskDom.value=="")
    {
        $('.error').toast('show');
    }

    else{
        let lidom = document.createElement('li');
        lidom.innerHTML=taskDom.value;
        listDom.appendChild(lidom); 
        $('.success').toast('show');
        localStorage.setItem('text',taskDom.value)    
        taskDom.value=""



        lidom.onclick = check;
        
        let closeButton = document.createElement("span");
        closeButton.textContent = "\u00D7";
        closeButton.classList.add("close");
        closeButton.onclick = removeButton;
        
        lidom.append(closeButton);
        lidom.append(lidom);
        inputElement.value = ("");
    }
   
}





