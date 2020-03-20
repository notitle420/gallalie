<template>
  <div>
    <v-container fluid>
      <v-layout wrap>
        <v-flex row>
          <v-img
            width='50px'
            height='100px'
            class='ml-8 mt-4'>
            画像をいれるああ<br>あ<br>あ
          </v-img>
          <v-flex column class='ml-12'>
              <v-btn outlined x-small width='100px' @click='updateUser'>更新を完了する</v-btn>
            <p class='mt-4'>mitsuhashi tomiko</p>
            <p>@油絵ペインター</p>
            <v-flex row>
              <p class='ml-4 body-2 font-weight-light'>Like:2200</p>
              <p class='ml-4 mr-4 body-2 font-weight-light'>View:220</p>
            </v-flex>
          </v-flex>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container fluid>
      <v-form ref='submit' @submit.prevent='updateUser'>
        <v-layout wrap>
          <v-text-field v-model.number='user.age' filled label='年齢' :value='user.age' clearable/>
          <v-text-field v-model='user.introduce' filled label='自己紹介' :value='user.introduce' clearable class='caption'/>
          <v-text-field v-model='user.concept' filled label='好きなコンセプト' :value='user.concept' clearable/>
          <v-text-field v-model='user.career' filled label='経歴' :value='user.career' clearable class='caption'/>
          <v-text-field v-model='user.sns' filled label='SNS/連絡先' :value='user.sns' clearable/>
          <v-text-field v-model.number='user.number_of_works' filled label='作品数' :value='user.number_of_works' clearable/>
        </v-layout>
      </v-form>
    </v-container>
  </div>
</template>
<script>
import { firestore } from '@/firebase/fireStore.js';
export default {
  name: 'myPageEdit',
  data:() => ({
    user: {
      age: 0,
      introduce: '',
      concept: '',
      career: '',
      sns: '',
      number_of_works: 0
    },
  }),
  created() {
    firestore.collection('users').doc('SfbGtP2sDDVaR9zUACM1').get().then((doc) => {
      this.user.age = doc.data().age
      this.user.introduce = doc.data().introduce
      this.user.concept = doc.data().concept
      this.user.career = doc.data().career
      this.user.sns = doc.data().sns
      this.user.number_of_works = doc.data().number_of_works
    })
  },
  methods: {
    updateUser() {
      firestore.collection('users').doc('SfbGtP2sDDVaR9zUACM1').update({
        age: this.user.age,
        introduce: this.user.introduce,
        concept: this.user.concept,
        career: this.user.career,
        sns: this.user.sns,
        number_of_works: this.user.number_of_works,
      })
      .then(() => {
        this.$router.push('/my-page');
      })
    }
  }
}
</script>