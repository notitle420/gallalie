<template>
  <div>
    <v-container>
      <v-layout justify-center wrap>
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
              />
            </v-btn>
          </v-layout>
        </div>
        <v-text-field full-width placeholder="タイトル" :rules="titleRules" required></v-text-field>
        <v-text-field full-width placeholder="テーマ" :rules="themeRules" required></v-text-field>
        <v-text-field full-width placeholder="説明" :rules="discriptionRules" required></v-text-field>
        <v-text-field full-width placeholder="Price" :rules="priceRules" required></v-text-field>
      </v-layout>
    </v-container>
      <v-layout justify-center class="mt-10">
        <v-btn to="/" outlined>作品を追加</v-btn>
      </v-layout>
  </div>
</template>
<script>
export default {
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
  data: () => ({
    avatorUrl: '/profile.svg',
    title: '',
    titleRules: [
      v => !!v || 'タイトルを入力してください',
    ],
    theme: '',
    themeRules: [
      v => !!v || 'テーマを入力してください',
    ],
    discription: '',
    discriptionRules: [
      v => !!v || '説明を入力してください',

    ],
    price: '',
    priceRules: [
      v => !!v || 'Priceを入力してください',
    ],
  })
};
</script>
<style scoped>
.avator {
  width: 300px;
  height: 300px;
}
</style>