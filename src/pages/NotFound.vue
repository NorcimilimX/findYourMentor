<template>
  <section>
    <base-card>
      <h2>404 Page not found</h2>
      <p>This page couldn't be found - check out to all
        <router-link to="/mentors">mentors.</router-link></p>
    </base-card>
  </section>
</template>
<script setup>
import BaseCard from "../components/ui/BaseCard.vue";
</script>