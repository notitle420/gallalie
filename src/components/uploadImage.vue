<template>
  <div class="avator">
    <v-container>
      <input
        ref="uploadInput"
        type="file"
        class="avator_input"
        id="avator-input"
        accept="image/png,image/jpeg,image/gif"
        @change="previewImage"/>
      <v-layout justify-center class="mt-12">
        <!-- 画像が選択されていない時はカメラの画像が出る -->
        <template>
          <!-- クリックしたら画像ファイルを選択する -->
          <v-btn
            class="avator_botton"
            @click="selectAvator"
            text
          >
          <v-img
            src="../../public/images/camera.svg"
            width="100px"
            class="ml-12"
          />
          </v-btn>
        </template>
      </v-layout>
    </v-container>
    <v-container>
      <v-layout justify-center>
        <!-- 画像が選択されるとuploadボタンが出る -->
        <template v-if="imageData !== null">
          <!-- 選択された画像を表示する -->
          <v-img class="avator_icon" :src="avatorUrl"></v-img>
          <v-btn @click="onUpload" class="mt-12 ml-12">Upload</v-btn>
        </template>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
import firebase from 'firebase';
export default {
  name: 'uploadImage',
  data() {
    return {
      imageData: null,
      avatorUrl: null,
      uploadValue: 0
    }
  },
  methods: {
    selectAvator() {
      const input = document.querySelector('#avator-input');
      input.click();
    },
    previewImage(event) {
      this.uploadValue=0;
      this.avatorUrl = null;
      this.imageData = event.target.files[0]
    },
    onUpload(){
      this.avatorUrl = null;
      const storageRef=firebase.storage().ref(`${this.imageData.name}`).put(this.imageData);
      storageRef.on(`state_changed`,snapshot=>{
        this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
      }, error=>{console.log(error.message)},
      ()=>{this.uploadValue=100;
        storageRef.snapshot.ref.getDownloadURL().then((url)=>{
          this.avatorUrl =url;
        });
      }
      );
    }
  }
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