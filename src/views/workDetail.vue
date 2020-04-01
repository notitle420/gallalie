<template>
  <div>
    <v-container>
      <v-layout justify-center wrap>
        <div class='avator'>
          <v-img
           width='300px'
           height='300px'>
           画像をいれるああああああああああああ<br>あ<br>あ<br>あ<br>あ<br>あ<br>あ<br>あ<br>あ<br>あ<br>あ<br>あ
        </v-img>
        </div>
        <v-layout wrap>
          <v-flex column>
            <v-flex row >
              <p class='ml-4 body-2 font-weight-light'>Like:2200</p>
              <p class='ml-4 mr-4 body-2 font-weight-light'>View:220</p>
              <v-btn class='ml-12' to='' outlined small width='150px'>メッセージを送る</v-btn>
            </v-flex>
            <div>
              <v-text-field class='my-4' disabled label='タイトル' :value='this.title'/>
              <v-text-field class='my-4' disabled label='テーマ' :value='this.theme'/>
              <v-text-field class='my-4' disabled label='説明' :value='this.discription'/>
              <v-text-field class='my-4' disabled label='Price' :value='this.price'/>
            </div>
          </v-flex>
        </v-layout>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
export default {
  data: () => ({
    title: 'あさごはん',
    theme: '朝食風景',
    discription: '朝の様子です',
    price: '2,000'
  })
}
</script>