const buttons = document.querySelectorAll('button');
const myh1 = document.getElementById('h1')
const allclearbtn = document.getElementById('allclear');
const equalbtn = document.getElementById('equal');


equalbtn.addEventListener('click',function()
{
    //logic to basic calculate the result
    myh1.innerText = eval(myh1.innerText) 
})

// console.log(buttons)

function getData(data)
{
    if(myh1.innerText === '0')
    {
        myh1.innerText = data
    }else
    {
        myh1.innerText = myh1.innerText + data
    }
}

function addDecimal()
{
    //Logic to decimal should be added 1st time only, there is no decimal present in display
    if(!myh1.innerText.includes('.'))
    {
        myh1.innerText =`${myh1.innerText}.`
    }
}

buttons.forEach(function(btn){
    if(btn.classList.length == 0)
    {
       
        btn.addEventListener('click',function()
        {
            getData(btn.innerText)
        })
    }
    else if(btn.classList.contains('operator'))
    {
        btn.addEventListener('click',function()
        {
            getData(btn.innerText)
        })
    }
    else if(btn.classList.contains('decimal'))
    {
        btn.addEventListener('click',function()
        {
            addDecimal()
        })
    }
})

allclearbtn.addEventListener('click',function()
{
    //Logic to clear all data
    myh1.innerText = '0'
    // console.log(myh1.innerText.length)

    // if(!myh1.innerText == '0')
    // {
    //     console.log(myh1.innerText)
       

    // }
})
//ASSIGNMENT

const Clear = document.getElementById("clear")
Clear.addEventListener("click", function()
{
    myH1.innerText = myH1.innerText.slice(0, -1)
})