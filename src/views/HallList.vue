<template>
  <div class="container">
    <!-- v-forでカードのコンポーネントを繰り返し使う　カードはどうやって用意する？-->
    <hall-card> </hall-card>
  </div>
</template>

<script src="https://unpkg.com/magic-grid/dist/magic-grid.min.js"></script>
<script>
import HallCard from "../components/HallCard.vue";

export default {
  components: {
    HallCard
  }
};

//レイアウト用のマジックグリッドはここに記述？
let magicGrid = new MagicGrid({
  container: ".container",
  animate: true,
  gutter: 30,
  static: true,
  useMin: true
});
magicGrid.listen();
</script>
