<template>
  <div class="home">
    <div class="upload-card">
      <img alt="Vue logo" src="../assets/logo.png">
      <HelloWorld msg="DigiBits Document Submission"/>
      <FileUpload />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import FileUpload from '@/components/FileUpload.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    FileUpload,
  },
};
</script>
