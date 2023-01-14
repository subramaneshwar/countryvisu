document.getElementById("totalcounreies").innerHTML = `Total Number of countries: ${countries.length}`
const start = document.getElementById("start")
const input = document.getElementById("input")
var countriesName = []
const count = document.getElementById("count")
const text = document.getElementById("text")

var flag=true
wordformat()
function wordformat(){
    if(flag){
        countriesName = []
        console.log("lower")

        countries.map(ele => {
            countriesName.push(ele.toLowerCase())
        })
        flag=false
        startingSearch()
        wordsearch()
        console.log(countriesName)
    }   
    else{
        countriesName = []
        console.log("uppercse")
        console.log(flag)
        countries.map(ele => {
            countriesName.push(ele.toUpperCase())
        })
        flag=true
        startingSearch()
        wordsearch()
        console.log(countriesName)
    }
}

console.log(countriesName)
startingSearch()
function startingSearch() {
    bottom.innerHTML = ""
    input.setAttribute("onkeyup", "startingSearch()")
    let inpLower=""
    if(flag==false){
        console.log("lower "+flag)
        inpLower = input.value.toLowerCase()
    }
    else{
        console.log("uppercase "+flag)
        inpLower = input.value.toUpperCase()

    }
    console.log(inpLower)
    let searched_countries = []
    countriesName.map(ele => {
        const name = ele.startsWith(inpLower)
        if (input.value == "") {
            count.innerHTML=""
            searched_countries.push(ele)
            bottom.innerHTML += `<div id="card"><p id="para">${ele}</p></div>`
        }
        else{

            if (name) {
                searched_countries.push(ele)
                bottom.innerHTML += `<div id="card"><p id="para">${ele}</p></div>`
                count.innerHTML=`countires start with "${input.value}" are ${searched_countries.length}`
            }
        }
    })
}

function wordsearch() {
    bottom.innerHTML = ""
    input.setAttribute("onkeyup", "wordsearch()")
    // let inpLower = input.value.toLowerCase()
    let inpLower=""
    if(flag==false){
        console.log("lower "+flag)
        inpLower = input.value.toLowerCase()
    }
    else{
        console.log("uppercase "+flag)
        inpLower = input.value.toUpperCase()

    }
    let searched_countries = []
    countriesName.map(ele => {
        const name = ele.includes(inpLower)
        if (input.value == "") {
            console.log("enter")
            count.innerHTML=""
            searched_countries.push(ele)
            bottom.innerHTML += `<div id="card"><p id="para">${ele}</p></div>`
        }
        else{

            if (name) {
                searched_countries.push(ele)
                bottom.innerHTML += `<div id="card"><p id="para">"${ele}</p></div>`
                count.innerHTML=`countires start with "${input.value}" are ${searched_countries.length}`
            }
        }
        console.log(searched_countries)
    })
}


