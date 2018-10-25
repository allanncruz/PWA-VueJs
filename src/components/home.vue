<template>

        <b-jumbotron>
            <div class="row justify-content-center">
                <div class="col-md-8">
                 <h1>PWA-VUe.Js</h1>
                 <p class="lead">Using Vue.js to access the native features of the mobile or desktop device from the Native Behavior, Camera and Microphone categories</p>
                  <p class="font-italic">By: Allan Cruz</p>
                 <b-btn target="_blank" variant="success" href="https://github.com/allanncruz/PWA-VueJs">GIthub</b-btn>
                </div>
            </div>
        </b-jumbotron>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
