//selecting elements and params
const _id=new URLSearchParams(location.search).get('id')
const formId=document.querySelector('.back')
const formName=document.querySelector('input')
const formTxt=document.querySelector('textarea')
const formDOM=document.querySelector('form')
const formBtn=document.querySelector('button')
const show=document.querySelector('.show')
const inputCheck=document.querySelector('#check')

//This function get a single item from the database
const getSingleTask=async ()=>{
    try {
        let task=await axios.get(`/api/${_id}`)
        const {data:{p}}=task
        //inserting items
        formId.innerHTML=p._id
        formName.value=p.name
        formTxt.value=p.desc
        inputCheck.value=p.done
        if(p.done){
            inputCheck.checked=true
        }
        else{
            inputCheck.checked=false
        }
    } catch (error) {
        console.log(error)
    }
}
//checking form
const formCheck=()=>{
    if(formName.value.trim()===""){
        formBtn.disabled=true
        show.style.display='flex'
    }
    else{
        formBtn.disabled=false
        show.style.display='none'
    }
}
getSingleTask()

formDOM.addEventListener('submit',async (e)=>{
    e.preventDefault()
        const name=formName.value
        const desc=formTxt.value
        const done=inputCheck.value
        try{
        let edited=await axios.patch(`/api/${_id}`,{name,desc,done})
        alert('edited')
        }
        catch(err){
            console.log(err)
        }
})

//disable or enable the button accordingly
formBtn.addEventListener('click',formCheck)
formName.addEventListener('keypress', formCheck)

inputCheck.addEventListener('click',()=>{
    inputCheck.value=inputCheck.checked
})