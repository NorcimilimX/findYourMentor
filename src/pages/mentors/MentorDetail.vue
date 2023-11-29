<template>
  <section>
    <base-card>
      <h2>{{ fullName }}</h2>
      <h3>{{ rate }}/hour</h3>
    </base-card>
  </section>

  <section>
    <base-card>
      <header>
        <h2>
          Contact <strong>Mentor</strong> if you are interested.
          <br>Reach out <strong>now</strong>!
        </h2>
        <base-button link :to="contactLink">Contact</base-button>
      </header>
      <router-view></router-view>
    </base-card>
  </section>

  <section>
    <base-card>
      <base-badge v-for="area in areas" :key="area" :type="area"></base-badge>
      <p>{{ description }}</p>
    </base-card>
  </section>
</template>

<script>

export default {
  // components: {BaseBadge},
  props: ['id'],
  data() {
    return {
      selectedMentor: null
    }
  },
  computed: {
    fullName() {
      return this.selectedMentor.firstName + ' ' + this.selectedMentor.lastName
    },
    areas() {
      return this.selectedMentor.areas
    },
    rate() {
      return this.selectedMentor.hourlyRate
    },
    contactLink() {
      return this.$route.path + '/contact';
    },
    description() {
      return this.selectedMentor.description
    }
  },
  created() {
    this.selectedMentor = this.$store.getters['mentors/mentors'].find(
        (mentor) => mentor.id === this.id
    );
  },
}
</script>