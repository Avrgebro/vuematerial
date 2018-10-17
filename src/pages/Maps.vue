<template>
  <div class="md-layout">
    <div class="md-layout-item md-size-25">
      <md-card>
        <md-card-content>
          <md-switch v-model="airp">Mostrar aeropuertos</md-switch>
        </md-card-content>
      </md-card>
    </div>
    <div id="map" class="md-layout-item"></div>
  </div>
</template>

<script>
import GoogleMapsLoader from 'google-maps'
import Aeropuertos from './Data/Aeropuertos'
export default {
  data () {
    return {
      airp: true,
      map: null,
      markers: []
    }
  },
  methods: {
    initMap (google) {
      var center = new google.maps.LatLng(32.370683, -4.793359)
      var mapOptions = {
        zoom: 3,
        center: center,
        scrollwheel: false // we disable de scroll over the map, it is a really annoing when you scroll through page
      }
      this.map = new google.maps.Map(document.getElementById('map'), mapOptions)
      var i
      for (i = 0; i < Aeropuertos.data.length; i++) {
        var myLatlng = new google.maps.LatLng(Aeropuertos.data[i].lat, Aeropuertos.data[i].long)

        var marker = new google.maps.Marker({
          position: myLatlng,
          title: Aeropuertos.data[i].codigo
        })

        marker.setMap(this.map)
        this.markers.push(marker)
      }
    },
    setairports () {
      var arg = this.airp ? this.map : null

      var i
      for (i = 0; i < this.markers.length; i++) {
        this.markers[i].setMap(arg)
      }
    }
  },
  mounted () {
    GoogleMapsLoader.KEY = 'AIzaSyD00-oQmNwRlAnOOsz1kwRkHi594ymoRBg'
    GoogleMapsLoader.load((google) => {
      this.initMap(google)
    })
  },
  watch: {
    airp: function () {
      this.setairports()
    }
  }
}

</script>
