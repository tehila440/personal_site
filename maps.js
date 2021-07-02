// List cities
const locs = [
  {
    city: 'nola',
    coordinates: {lat: 29.977995, lng: -90.067996 }
  },
  {
    city: 'norway',
    coordinates: {lat: 58.975010, lng: 5.731834}
  },
  {
    city: 'england',
    coordinates: {lat: 51.220082, lng: -0.464828}
  },
  {
    city: 'austin',
    coordinates: {lat: 30.285472, lng: -97.734946}
  },
  {
    city: 'boulder',
    coordinates: {lat: 40.007721, lng: -105.266092}
  },
  {
    city: 'phoenix',
    coordinates: {lat: 33.541154, lng: -112.056246}
  },
  {
    city: 'san francisco',
    coordinates: {lat: 37.629282, lng: -122.418891}
  },
  {
    city: 'jerusalem',
    coordinates: {lat: 31.768209, lng: 35.224023}
  },
]

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentlySelected = 0;

prevBtn.addEventListener('click', function() {
  previous()
});

nextBtn.addEventListener('click', function() {
  next()
});

function previous() {
    currentlySelected--;
    nextBtn.disabled =false;
    if (currentlySelected ===0) {
      prevBtn.disabled = true;
    }
    initMap();
};

function next() {
   currentlySelected++;
   prevBtn.disabled =false;
   if (currentlySelected === locs.length-1) {
     nextBtn.disabled = true;
   }
   initMap();
}

function initMap() {
  let citySelected = locs[currentlySelected].coordinates;
  let cityName = locs[currentlySelected].city;
  console.log('name',cityName);
    let map = new google.maps.Map(document.getElementById("map"), {
     zoom: 7,
     center: citySelected
    });
     let marker = new google.maps.Marker({
      position: citySelected,
      map: map
    });
}
