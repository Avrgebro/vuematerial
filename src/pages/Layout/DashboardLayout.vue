<template>
  <div class="wrapper" :class="{'nav-open': $sidebar.showSidebar}">
    <side-bar>
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/tracking">
        <md-icon>dashboard</md-icon>
        <p>Tracking</p>
      </sidebar-link>
      <sidebar-link to="/user">
        <md-icon>person</md-icon>
        <p>Perfil</p>
      </sidebar-link>
      <sidebar-link to="/maps">
        <md-icon>location_on</md-icon>
        <p>Mapas</p>
      </sidebar-link>
      <sidebar-link to="/login" class="active-pro">
        <md-icon>unarchive</md-icon>
        <p>Logout</p>
      </sidebar-link>
    </side-bar>

    <div class="main-panel">

      <dashboard-content>

      </dashboard-content>

      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>
<style lang="scss">

</style>
<script>
import TopNavbar from './TopNavbar.vue'
import ContentFooter from './ContentFooter.vue'
import DashboardContent from './Content.vue'
import MobileMenu from '@/pages/Layout/MobileMenu.vue'

export default {
  components: {
    TopNavbar,
    DashboardContent,
    ContentFooter,
    MobileMenu
  }
}
</script>
