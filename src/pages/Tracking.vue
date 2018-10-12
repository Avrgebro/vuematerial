<template>
  <div class="tracking">
    <div class="md-layout">
      <md-card>
        <md-card-header data-background-color="blue">
          <h2>Tracking de Parcelas</h2>
          <p>
            {{ this.$store.state.testuser.user}}
          </p>
        </md-card-header>
        <md-card-content>
          <div class="md-layout md-size-33">
            <div class="md-layout-item md-size-25">
              <div class="md-layout">
                <md-field class="md-size-33 md-layout-item">
                  <label>Numero de tracking</label>
                  <md-input v-model="tracking" placeholder="Ingrese numero de tracking"></md-input>
                </md-field>
                <md-button v-if="!buscando" v-on:click="buscar()" class="md-layout-item">
                  <md-progress-spinner md-mode="indeterminate"></md-progress-spinner>
                </md-button>
              </div>
            </div>
          </div>
          <div class="md-layout">
            <div class="md-layout-item">
              <md-field>
                <label>Detalle de parcela</label>
                <md-textarea v-model="detalle"></md-textarea>
              </md-field>
            </div>
          </div>
        </md-card-content>
      </md-card>
    </div>
  </div>
</template>
<script>
export default{
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
<style>
</style>
