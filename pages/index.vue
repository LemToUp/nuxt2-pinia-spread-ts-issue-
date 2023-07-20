<template>
  <div>
    <p>Index page</p>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'IndexPage',

  head() {
    return {
      title: 'Home page',
    };
  },
});
</script>
