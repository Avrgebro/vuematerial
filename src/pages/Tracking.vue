<template>
  <div class="Tracking">
    <md-content class="wrapper-full-page wrapper md-accent">
      <div class="md-layout container">
        <md-card class="md-layout-item md-size-100">

          <md-card-content>

            <h2 class="md-layout">Tracking de parcelas</h2>
            <hr />

            <div class="md-layout">
              <div class="md-layout-item md-size-25">
                <md-field>
                  <label>Tracking</label>
                  <md-input></md-input>
                </md-field>
              </div>
              <md-button class="md-primary md-simple">Buscar</md-button>
            </div>

            <div class="md-layout">
              <div class="md-layout-item bordered">
                <md-field>
                  <label>Detalle</label>
                  <md-textarea></md-textarea>
                </md-field>
              </div>
            </div>

          </md-card-content>
        </md-card>
      </div>
    </md-content>
  </div>
</template>
<script>
export default{
  name: 'Tracking',
  data () {
    return {
      tracking: '',
      detalle: '',
      buscando: false
    }
  },
  methods: {
    buscar () {
      this.buscando = true
      alert(this.buscando)
    }
  }
}
</script>
<style lang="scss">
.bordered {
  border: 1px solid grey;
  border-radius: 5px;
}
</style>
