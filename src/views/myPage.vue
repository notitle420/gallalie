<template>
  <div>
    <v-container fluid>
      <v-layout wrap>
        <v-flex row>
          <v-img
            width='100px'
            height='150px'
            class='ml-8 mt-4'>
            画像をいれるああ<br>あ<br>あ
          </v-img>
          <v-flex column class='ml-12'>
            <v-flex row>
              <v-btn outlined x-small width='100px' to='/my-page-edit'>プロフィールを編集</v-btn>
              <v-btn outlined x-small width='60px' class='ml-2' to='/work-add'>作品を追加</v-btn>
            </v-flex>
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
        <v-text-field filled readonly label='年齢' :value='user.age'/>
        <v-text-field filled readonly label='自己紹介' :value='user.introduce'/>
        <v-text-field filled readonly label='好きなコンセプト' :value='user.concept'/>
        <v-text-field filled readonly label='経歴' :value='user.career'/>
        <v-text-field filled readonly label='SNS/連絡先' :value='user.sns'/>
        <v-text-field filled readonly label='作品数' :value='user.number_of_works'/>
      </v-layout>
    </v-container>
    <v-container>
      <v-layout wrap>
        <v-flex sm12 md6 xs6 v-for='(work, i) in works' :key='i' name>
          <v-card width='180' height='500' class='mx-2 mb-4'>
            <v-img width='180' height='150'>画像入れる</v-img>
            <v-card-title>{{ work.title }}</v-card-title>
            <v-divider/>
            <v-card-subtitle>朝ごはん</v-card-subtitle>
            <v-divider/>
            <v-card-text>あああああああああああああああああああああああああ</v-card-text>
            <v-divider/>
            <v-card-text>Like:200  View:200</v-card-text>
            <v-divider/>
            <v-card-text>油絵</v-card-text>
            <v-divider/>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
import { firestore } from '@/firebase/fireStore.js';
export default {
  name: 'myPage',
  data: () => ({
    users: [],
    works: []
  }),
  created() {
    firestore.collection('users').get().then((querySnapshot) => {
      const array = [];
      querySnapshot.forEach((doc) => {
        array.push(doc.data())
      })
      this.users = array
    });
    firestore.collection('works').get().then((querySnapshot) => {
      const array = [];
      querySnapshot.forEach((doc) => {
        array.push(doc.data())
      });
      this.works = array
    });
  }
}
</script>