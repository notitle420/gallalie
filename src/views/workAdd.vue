<template>
  <div>
    <v-container>
      <uploadImage/>
      <!-- 画像のアップロード部分をコンポーネントにして分離 -->
      <v-layout justify-center wrap class='mt-12'>
        <v-text-field full-width placeholder='タイトル' :rules='titleRules' required></v-text-field>
        <v-text-field full-width placeholder='テーマ' :rules='themeRules' required></v-text-field>
        <v-text-field full-width placeholder='説明' :rules='discriptionRules' required></v-text-field>
        <v-text-field full-width placeholder='Price' :rules='priceRules' required></v-text-field>
      </v-layout>
    </v-container>
      <v-layout justify-center class='mt-10'>
        <v-btn to='/' outlined>作品を追加</v-btn>
      </v-layout>
  </div>
</template>
<script>
import uploadImage from '@/components/uploadImage.vue';
export default {
  components: {
    uploadImage
  },
  data: () => ({
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