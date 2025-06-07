<template>
  <div>
    <input type="file" @change="onFileChange">
    <button @click="submit">Upload</button>
    <p>{{ status }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'FileUpload',
  data() {
    return {
      file: null,
      status: '',
    };
  },
  methods: {
    onFileChange(e) {
      [this.file] = e.target.files;
    },
    submit() {
      if (!this.file) {
        this.status = 'Please select a file';
        return;
      }
      const formData = new FormData();
      formData.append('file', this.file);
      axios.post('http://localhost:5000/upload', formData)
        .then(() => {
          this.status = 'Upload successful';
        })
        .catch(() => {
          this.status = 'Upload failed';
        });
    },
  },
};
</script>
