<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>Please use the form below to upload your documents.</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello h1 {
  margin-bottom: 1rem;
  color: #42b983;
}
</style>
