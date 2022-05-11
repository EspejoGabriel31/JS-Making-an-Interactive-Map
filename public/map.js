

// map object
const myMap ={
    coordinates: [],
    map:{},
    businesses: [],
    markers: {},
    
    buildMap(){
        this.map = L.map('map',{
            center: this.coordinates,
            zoom: 5
        })

        L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        minZoom: '15',
        }).addTo(this.map)

        const marker = L.marker(this.coordinates)
        marker.addTo(this.map).bindPopup('<p1><b>You are here</b></p1>').openPopup()
    }
}
 
// get coordinates via geolocation api
// Get the user's coordinates:                                                              
async function getCoords(){
    pos = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    })
    return[pos.coords.latitude, pos.coords.longitude]
}  
// get foursquare businesses

// process foursquare array

// event handlers
// window load
window.onload = async () =>{
    const coords = await getCoords()
    myMap.coordinates = coords
    myMap.buildMap()
}
// business submit button


let select = document.getElementById('buisness');
console.log(select)
// select.addEventListener('change', () =>{
//     console.log(select)
// })
//let value = select.options[select.selectedIndex].value
let button = document.querySelector('#submit')

button.addEventListener('click', async (e) => {
    e.preventDefault()
    let buisness = document.querySelector('#buisness').ariaValueMax

   console.log(buisness)
})

