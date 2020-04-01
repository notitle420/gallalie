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
              <v-btn outlined x-small width='100px' to='/my-page'>更新を完了する</v-btn>
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
      <v-layout wrap v-for='(user, i) in users' :key='i'>
        <v-text-field v-model.number='user.age' label='年齢' :value='user.age' clearable/>
        <v-text-field v-model='user.introduce' label='自己紹介' :value='user.introduce' clearable class='caption'/>
        <v-text-field v-model='user.concept' label='好きなコンセプト' :value='user.concept' clearable/>
        <v-text-field v-model='user.career' label='経歴' :value='user.career' clearable class='caption'/>
        <v-text-field v-model='user.sns' label='SNS/連絡先' :value='user.sns' clearable/>
        <v-text-field v-model.number='user.number_of_works' label='作品数' :value='user.number_of_works' clearable/>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
import { firestore } from '@/firebase/fireStore.js';
export default {
  name: 'myPageEdit',
  data:() => ({
    users: [],
  }),
  created() {
    firestore.collection('users').get().then((querySnapshot) => {
      const array = [];
      querySnapshot.forEach((doc) => {
        array.push(doc.data())
      })
      this.users = array
    });
  }
}
</script>