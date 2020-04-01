<template>
  <div class='avator'>
    <v-btn
      @click.native='selectFile'
      v-if='!uploadEnd && uploading'>
    </v-btn>
    <template v-if='!uploadEnd'>
      <v-img src='../../public/images/camera.svg' @click.native='selectFile'/>
      <form ref='form'>
        <input
          type='file'
          id='files'
          name='file'
          ref='uploadInput'
          accept='image/*'
          :multiple='false'
          @change='detectFiles($event)'/>
      </form>
    </template>
    <v-progress-circular
      v-if='uploading && !uploadEnd'
      :size='100'
      :width='15'
      :rotate='360'
      :value='progressUpload'
      color='primary'>
      %
    </v-progress-circular>
    <v-img
      v-if='uploadEnd'
      :src='downloadURL'
      width='100%'
    />
    <div v-if='uploadEnd'>
      <v-btn
        class='ma-0'
        dark
        small
        color='error'
        @click='deleteImage()'
      >
        Delete
      </v-btn>
    </div>
  </div>
</template>
<script>
import { firestorage } from '@/firebase/fireStorage.js'
export default {
  name: 'uploadImage',
  data () {
    return {
      progressUpload: 0,
      fileName: '',
      uploadTask: '',
      uploading: false,
      uploadEnd: false,
      downloadURL: ''
    }
  },
  methods: {
    selectFile () {
      this.$refs.uploadInput.click()
    },
    detectFiles (e) {
      let fileList = e.target.files || e.dataTransfer.files
      Array.from(Array(fileList.length).keys()).map(x => {
        this.upload(fileList[x])
      })
    },
    upload (file) {
      this.fileName = file.name
      this.uploading = true
      this.uploadTask = firestorage.ref('images/' + file.name).put(file)
    },
    deleteImage () {
      firestorage
        .ref('images/' + this.fileName)
        .delete()
        .then(() => {
          this.uploading = false
          this.uploadEnd = false
          this.downloadURL = ''
        })
        .catch((error) => {
          console.error(`file delete error occured: ${error}`)
        })
      this.$refs.form.reset()
    }
  },
  watch: {
    uploadTask: function () {
      this.uploadTask.on('state_changed', sp => {
        this.progressUpload = Math.floor(sp.bytesTransferred / sp.totalBytes * 100)
      },
      null,
      () => {
        this.uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
          this.uploadEnd = true
          this.downloadURL = downloadURL
          this.$emit('downloadURL', downloadURL)
        })
      })
    }
  }
  // data() {
  //   return {
  //     imageData: null,
  //     avatorUrl: null,
  //     uploadValue: 0
  //   }
  // },
  // methods: {
  //   selectAvator() {
  //     const input = document.querySelector('#avator-input');
  //     input.click();
  //   },
  //   previewImage(event) {
  //     this.uploadValue=0;
  //     this.avatorUrl = null;
  //     this.imageData = event.target.files[0]
  //   },
  //   onUpload(){
  //     this.avatorUrl = null;
  //     const storageRef=firebase.storage().ref(`${this.imageData.name}`).put(this.imageData);
  //     storageRef.on(`state_changed`,snapshot=>{
  //       this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
  //     }, error=>{console.log(error.message)},
  //     ()=>{this.uploadValue=100;
  //       storageRef.snapshot.ref.getDownloadURL().then((url)=>{
  //         this.avatorUrl =url;
  //       });
  //     }
  //     );
  //   }
  // }
}
</script>
<style scoped>
.avator {
  width: 300px;
  height: 300px;
}
.avator_icon {
  width: 200px
}
</style>