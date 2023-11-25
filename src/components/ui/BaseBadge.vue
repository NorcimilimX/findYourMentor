<template>
  <span class="badge" :class="type">
    {{ text }}
  </span>
</template>

<script>
export  default {
  props: ['type'],
  computed: {
    text() {
      return this.type.toUpperCase();
    }
  }
}
</script>

<style scoped>
.badge {
  background-color: #ccc;
  color: #252525;
  border-radius: 30px;
  padding: 0.5rem 0.5rem;
  display: inline-block;
  margin-right: 1rem;
}

.frontend {
  background-color: #3d008d;
  color: white;
}

.backend {
  background-color: #71008d;
  color: white;
}

.career {
  background-color: #8d006e;
  color: white;
}

.pm {
  background-color: #ea29bf;
  color: white;
}

.marketing {
  background-color: #ffa9e9;
  color: white;
}

.devops {
  background-color: #281122;
  color: white;
}
</style>