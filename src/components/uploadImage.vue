<template>
  <div class="avator">
    <v-img
      class="avator_icon"
      :src="avatorUrl"/>
      <input
        type="file"
        class="avator_input"
        id="avator-input"
        accept="image/png,image/jpeg,image/gif"
        @change="uploadAvator"/>
        <v-layout justify-center class="mt-12">
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
        </v-layout>
  </div>
</template>
<script>
export default {
  name: 'uploadImage',
  data: () => ({
    avatorUrl: '/profile.svg',
  }),
  methods: {
    selectAvator() {
      const input = document.querySelector('#avator-input');
      input.click();
    },
    uploadAvator(e) {
      e.preventDefault();
      //からだったら何もしない
      if (e.target.files.length === 0) {
        return null;
      }
      const avatorfile =e.target.files[0];
      //eslint-disable-next-line
      console.log(avatorfile);
      //imageurlにtimestamp付与
      this.avatorUrl = `${this.avatorUrl}?timestamp=${Date.now()}`
    },
  },
}
</script>
<style scoped>
.avator {
  width: 300px;
  height: 300px;
}
</style>