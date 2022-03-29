<template>
  <div class="nav-bar">
      <nav class="navbar navbar-expand-lg navbar-light bg-white nav-1">
          <div class="container mw-0 px-3">
              <button class="navbar-toggler" type="button">
                  <span class="navbar-nav mr-auto"></span>
              </button>
              <div class="collapse navbar-collapse">
                  <ul class="collapse navbar-collapse" id="">
                      <li class="nav-item">
                          <router-link :to="{name: posts}" exact>Posts</router-link>
                      </li>
                  </ul>
              </div>

          </div>
      </nav>
  </div>
</template>

<script>
export default {
    name: 'NavbarView'
}
</script>

<style>

</style>