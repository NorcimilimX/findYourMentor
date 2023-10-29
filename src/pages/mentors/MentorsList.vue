<template>
  <section>
    <h1>Mentors List <span>, Filter it</span></h1>
  </section>
  <section>
    <div class="controls">
      <button>Refresh</button>
      <router-link to="/register">Register as a Mentor</router-link>
    </div>
    <ul v-if="hasMentors">
      <mentor-item
          v-for="mentor in filteredMentors"
          :id="mentor.id"
          :key="mentor.id"
          :first-name="mentor.firstName"
          :last-name="mentor.lastName"
          :rate="mentor.hourlyRate"
          :areas="mentor.areas"
      ></mentor-item>
    </ul>
    <h3 v-else>No mentors found.</h3>
  </section>
</template>
<script>
import MentorItem from "../../components/mentors/MentorItem.vue";

export default  {
  components: {
    MentorItem
  },
  computed: {
    filteredMentors() {
      return this.$store.getters['mentors/mentors'];
    },
    hasMentors() {
      return this.$store.getters['mentors/hasMentors']
    }
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>