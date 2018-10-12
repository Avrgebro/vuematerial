<template>
    <div class="centered-container" >
      <md-toolbar class="md-transparent md-toolbar">
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <h3 class="md-title">LOGIN</h3>
          </div>
          <div class="md-toolbar-section-end">
            <md-button class="md-simple md-theme-default" style="">LOGIN</md-button>
            <md-button class="md-simple md-theme-default">REGISTRO</md-button>
          </div>
        </div>
      </md-toolbar>
      <div class="wrapper wrapper-full-page">
        <div class="page-header md-card-header-flex login-page">
          <div>
            <div class="md-layout text-center">
              <div class="md-layout-item md-size-33 md-medium-size-50 md-small-size-70 md-xsmall-size-100">
                <md-card class="md-card-login md-theme-default">
                  <md-card-header data-background-color="green">
                    <div class="md-layout md-layout-item md-alignment-center-center">
                      <h3 class="md-title md-layout-item">RedEx</h3>
                    </div>
                  </md-card-header>
                  <md-card-content>
                    <form>
                      <div class="md-small-size-100 md-size-33">
                        <md-field>
                          <label>e-mail</label>
                          <md-input type="email" v-model="input.user"></md-input>
                        </md-field>
                      </div>
                      <div class="md-small-size-100 md-size-33">
                        <md-field>
                          <label>contraseña</label>
                          <md-input type="password" v-model="input.password"></md-input>
                        </md-field>
                      </div>
                    </form>
                  </md-card-content>
                  <md-card-actions>
                    <md-button class="md-simple md-theme-default md-success md-lg" :md-ripple="true" v-on:click="login()">Log in</md-button>
                  </md-card-actions>
                </md-card>
              </div>
            </div>
          </div>
          <footer>
            <p style="float: right;">Grupo 5, Desarrollo de Programas 1, 2018-2</p>
          </footer>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      input: {
        user: '',
        password: ''
      },
      notifications: {
        topCenter: false
      }
    }
  },
  methods: {
    login () {
      if (this.input.user !== '' && this.input.password !== '') {
        if (this.input.user === this.$store.state.testuser.user && this.input.password === this.$store.state.testuser.password) {
          this.$store.state.authenticated = true
          this.$router.replace({ name: 'Tracking' })
        } else {
          this.notifyVue('The username and / or password is incorrect')
        }
      } else {
        this.notifyVue('A username and password must be present')
      }
    },
    notifyVue (tmessage) {
      this.$notify(
        {
          message: tmessage,
          icon: 'add_alert',
          horizontalAlign: 'top',
          verticalAlign: 'center',
          type: 'danger'
        })
    }
  }
}
</script>
<style>
  .md-toolbar-row {
    margin-left: 20%;
    margin-right: 20%;
  }
  .page {
    background-image: linear-gradient( rgba(60,155,46,.5), rgba(0,0,0,.5) );
    background-size: cover;
    background-repeat: no-repeat;
    align-items: center;
  }
</style>
