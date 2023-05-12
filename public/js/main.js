//selecting items
const form=document.querySelector('form')
const formInput=document.querySelector('input')
const btn=document.querySelector('button')
const msgIncorrect=document.querySelector('.show')
const taskContainer=document.querySelector("#tasks")
const formTxt=document.querySelector('textarea')

//This function is used to get All Data from the Server
const getAllData=async ()=>{
    try {
        const {data:task}=await axios.get('/api')
        taskContainer.innerHTML=''
        task.map((tasks)=>{
            //inserting an element 
            taskContainer.innerHTML+= `
            <div class="task" data-id="${tasks._id}">
                <i class="fa-solid fa-badge-check ${tasks.done}"></i>
                <a href="/task?id=${tasks._id}">
                <p class="name">${tasks.name}</p> 
                </a>
                <i class="fa-solid fa-trash-can-xmark"></i>
            </div>`
        let deleteItem=document.querySelectorAll('.fa-trash-can-xmark')
        deleteItem.forEach((item)=>{
            item.addEventListener('click',async ()=>{
                let _id=item.parentElement.dataset.id
                try{
                await axios.delete(`/api/${_id}`)
                getAllData()
                alert('deleted')
                }catch(error){
                    console.log(error)
                }
            })
        })
        })
    } catch (error) {
        console.log(error)
    }
}

//This function is used to chcek if the required fields are empty or not
const formCheck=()=>{
    if(formInput.value.trim()===""){
        btn.disabled=true
        msgIncorrect.style.display='flex'
    }
    else{
        btn.disabled=false
        msgIncorrect.style.display='none'
    }
}

getAllData()

//This below event listener is used to prevent the window from chanigng location
form.addEventListener('submit',async (e)=>{
    e.preventDefault()
    const name=formInput.value
    const desc=formTxt.value
    try{
        let task=await axios.post("/api", {name, desc})
        getAllData()
        console.log(task)
        alert("success")
    }
    catch(err){
        console.log(err)
    }
})


//disable or enable the button accordingly
btn.addEventListener('click',formCheck)
formInput.addEventListener('keypress', formCheck)

