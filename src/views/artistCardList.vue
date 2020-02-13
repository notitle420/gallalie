<template>
  <v-container>
    <v-layout wrap>
      <v-flex column>
        <p class="body-2">キーワードで探す</p>
        <v-flex row>
          <v-text-field class="ml-2" outlined/>
          <v-btn class="mt-3 ml-2" small>検索</v-btn>
        </v-flex>
        <p class="caption">検索結果：150件</p>
        <v-flex row>
          <v-btn outlined width="150px" height="30px" class="ml-8" x-small>書くアート</v-btn>
          <v-btn outlined width="150px" height="30px" class="ml-8" x-small>作品数</v-btn>
        </v-flex>
      </v-flex>
    </v-layout>
    <v-layout>
      <artistCard/>
    </v-layout>
  </v-container>
</template>
<script>
import artistCard from '@/components/artistCard.vue';
export default {
  components: {
    artistCard
  }
}
</script>