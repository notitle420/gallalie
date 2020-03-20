<template>
  <div>
    <v-container>
      <!-- 画像のアップロード部分をコンポーネントにして分離 -->
      <uploadImage/>
      <v-form ref='submit' @submit.prevent='addWork'>
        <v-layout justify-center wrap class='mt-12'>
          <v-text-field v-model="title" full-width placeholder='タイトル' :rules='titleRules' required></v-text-field>
          <v-text-field v-model="theme" full-width placeholder='テーマ' :rules='themeRules' required></v-text-field>
          <v-text-field v-model="description" full-width placeholder='説明' :rules='descriptionRules' required></v-text-field>
          <v-text-field v-model.number="price" full-width placeholder='Price' :rules='priceRules' required></v-text-field>
        </v-layout>
      </v-form>
    </v-container>
      <v-layout justify-center class='mt-10'>
        <v-btn outlined @click='addWork'>作品を追加</v-btn>
      </v-layout>
  </div>
</template>
<script>
import { firestore } from '@/firebase/fireStore.js';
import uploadImage from '@/components/uploadImage.vue';
export default {
  components: {
    uploadImage
  },
  data: () => ({
    title: '',
    theme: '',
    description: '',
    price: 0,
    titleRules: [
      v => !!v || 'タイトルを入力してください',
    ],
    themeRules: [
      v => !!v || 'テーマを入力してください',
    ],
    descriptionRules: [
      v => !!v || '説明を入力してください',
    ],
    priceRules: [
      v => !!v || 'Priceを入力してください',
    ],
  }),
  methods: {
    addWork() {
      firestore.collection('works').add({
        title: this.title,
        theme: this.theme,
        description: this.description,
        price: this.price
      })
    }
  }
}
</script>