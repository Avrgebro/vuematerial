<template>
  <div class="Tracking">
    <md-content class="wrapper-full-page wrapper md-accent" style="margin-top: 20px">
      <div class="md-layout container">
        <md-card class="md-layout-item md-size-100">

          <md-card-header class="md-size-50" data-background-color="green">
            <h4 class="title">Tracking</h4>
            <p class="category">Consultar estado de parcelas</p>
          </md-card-header>

          <md-card-content>
            <hr />

            <div class="md-layout">
              <div class="md-layout-item md-size-25">
                <md-field :class="messageClass">
                  <label>Tracking</label>
                  <md-input required v-model="tracking" md-invalid="isinvalid"></md-input>
                  <span class="md-error">Campo obligatorio</span>
                </md-field>
              </div>
              <md-button class="md-primary md-simple" v-on:click="buscar">Buscar</md-button>
            </div>

            <div class="md-layout">
              <div class="md-layout-item bordered">
                <md-field>
                  <label>Detalle</label>
                  <md-textarea disabled></md-textarea>
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
      buscando: false,
      isinvalid: false
    }
  },
  methods: {
    buscar () {
      if (this.tracking === '') {
        this.isinvalid = true
        return
      }
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
