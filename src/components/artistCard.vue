<template>
  <v-container>
    <v-layout>
      <v-card width="400px" height="500px" class="mx-2 mb-4">
        <v-flex row>
          <v-img class="ml-4" width="20px" height="100px">
            画像入れる<br>あ<br>あ<br>あ
          </v-img>
          <v-card-title>
            <v-flex column>
              <p>{{ artist.name }}</p>
              <p class="caption">{{ artist.major }}</p>
            </v-flex>
          </v-card-title>
        </v-flex>
        <v-divider/>
        <v-card-subtitle>
        <p>年齢： {{ artist.old }}</p>
        </v-card-subtitle>
        <v-divider/>
        <v-card-text>
          <p>あああああああああああああああああああああああああ</p>
        </v-card-text>
        <v-divider/>
        <v-card-text>
          <p>好きなコンセプト： {{ artist.concept }}</p>
        </v-card-text>
        <v-divider/>
        <v-card-text>
          <v-flex row>
            <p class="ml-4">Like: {{ artist.like }}</p>
            <p class="ml-4">Views: {{ artist.view }}</p>
          </v-flex>
        </v-card-text>
        <v-divider/>
        <v-card-text>
          <p>作品数： {{ artist.numberofworks }}</p>
        </v-card-text>
      </v-card>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  name: 'artistCard',
  props: {
    artist: {
      type: Object,
      required: true
    }
  }
}
</script>