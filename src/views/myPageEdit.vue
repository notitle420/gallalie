<template>
  <div>
    <v-container fluid>
      <v-layout wrap>
        <v-flex row>
          <v-img
            width="50px"
            height="100px"
            class="ml-8 mt-4">
            画像をいれるああ<br>あ<br>あ
          </v-img>
          <v-flex column class="ml-12">
              <v-btn outlined x-small width="100px">更新を完了する</v-btn>
            <p class="mt-4">mitsuhashi tomiko</p>
            <p>@油絵ペインター</p>
            <v-flex row>
              <p class="ml-4 body-2 font-weight-light">Like:2200</p>
              <p class="ml-4 mr-4 body-2 font-weight-light">View:220</p>
            </v-flex>
          </v-flex>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container fluid>
      <v-layout wrap>
        <v-text-field v-model.number="old" label="年齢" full-width clearable/>
        <v-text-field v-model="introduce" label="自己紹介" full-width clearable class="caption"/>
        <v-text-field v-model="concept" label="好きなコンセプト" full-width clearable/>
        <v-text-field v-model="career" label="経歴" full-width clearable class="caption"/>
        <v-text-field v-model="sns" label="SNS/連絡先" full-width clearable/>
        <v-text-field v-model.number="number_of_works" label="作品数" full-width clearable/>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
export default {
  name: 'myPageEdit',
  data() {
    return {
      old: 20,
      introduce: '京都に住んでいます,油絵が得意です。',
      concept: '炭の感じにこだわりました',
      career: '二年間の浪人生活を経て、東京芸術大学に入学し、先日卒業しました。',
      sns: '@oceans/000-0000-0000',
      number_of_works: 29
    }
  }
}
</script>