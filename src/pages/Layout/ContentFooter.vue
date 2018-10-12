<template>
  <footer class="footer">
    <div class="container">
        <nav>
            <ul>
              <li>
                <router-link :to="{path:'/tracking'}">Home</router-link>
              </li>
            </ul>
        </nav>
        <div class="copyright text-center">
          &copy; {{ new Date().getFullYear() }} <a target="_blank"> RedEx</a>
        </div>
    </div>
  </footer>

</template>
<script>
export default {}

</script>
<style>

</style>
