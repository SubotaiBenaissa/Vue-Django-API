<template>
    <div class="posts">
    <NavbarComponent /> 
      <div class="album py-5 bg-light">
          <div class="container">
            <div class="row">
              <div v-for="posts in APIData" :key="posts.id" class="col-md-4">
                <div class="card mb-4 box-shadow">
                  <img class="card-img-top" src="https://via.placeholder.com/150x100" alt="Card image cap">
                  <div class="card-body">
                      <h4 class=""><a class="text-secondary" href="">{{posts.title}}</a></h4>
                      <p class="card-text">{{posts.content}}</p>
                      <div class="d-flex justify-content-between align-items-center">
                      <small class="text-muted">:D</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
  </div>
</template>

<script>

import NavbarComponent from '../components/NavbarComponent.vue'
import getApi from '@/axios-api'

export default {

  name: 'PostsView',

  data() {

    return {
      APIData: [],
      title: '',
      content: '',
    }

  },

  components: {
    NavbarComponent
  },

  created() {
    getApi.get('/posts/',)
    .then(Response => {
      console.log('Api post recibe dato')
      this.APIData = Response.data
    })
    .catch(err => {
      console.log(err)
    })
  },

}

</script>

<style>

</style>