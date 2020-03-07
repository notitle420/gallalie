<template>
  <div>
    <v-container fluid>
      <v-layout wrap>
        <v-flex row>
          <v-img
            width="100px"
            height="150px"
            class="ml-8 mt-4">
            画像をいれるあ<br>あ<br>あ<br>あ<br>あ
          </v-img>
          <v-flex column class="ml-12">
            <p class="mt-4">mitsuhashi tomiko</p>
            <p>@油絵ペインター</p>
            <v-flex row>
              <p class="ml-4 body-2 font-weight-light">Like:2200</p>
              <p class="ml-4 mr-4 body-2 font-weight-light">View:220</p>
            </v-flex>
            <v-btn outlined x-small width="150px">メッセージを送る</v-btn>
          </v-flex>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container fluid>
      <v-layout wrap>
        <v-text-field disabled label="年齢" full-width/>
        <v-text-field disabled label="自己紹介" full-width/>
        <v-text-field disabled label="好きなコンセプト" full-width/>
        <v-text-field disabled label="経歴" full-width/>
        <v-text-field disabled label="SNS/連絡先" full-width/>
        <v-text-field disabled label="作品数" full-width/>
      </v-layout>
    </v-container>
    <v-container>
      <v-layout wrap>
        <v-flex sm12 md6 xs6 v-for="(work, i) in works" :key="i" name>
          <v-card width="180" height="500" class="mx-2 mb-4">
            <v-img width="180" height="150">画像入れる</v-img>
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
export default {
  name: 'artistShow',
  computed: {
    works() {
      return this.$store.getters.works
    }
  }
}
</script>