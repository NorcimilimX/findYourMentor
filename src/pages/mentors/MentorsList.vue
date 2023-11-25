<template>
  <section>
    <mentor-filter @change-filter="setFilters"></mentor-filter>
  </section>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline">Refresh</base-button>
        <base-button link to="/register">Register as a Mentor</base-button>
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
    </base-card>
  </section>
</template>
<script>
import MentorItem from "../../components/mentors/MentorItem.vue";
import BaseCard from "../../components/ui/BaseCard.vue";
import BaseButton from "../../components/ui/BaseButton.vue";
import MentorFilter from "../../components/mentors/MentorFilter.vue";

export default  {
  components: {
    BaseButton,
    BaseCard,
    MentorItem,
    MentorFilter
  },
  data() {
    return {
      activeFilters: {
        frontend: true,
        backend: true,
        career: true,
        devops: true,
        marketing: true,
        pm: true
      }
    }
  },
  computed: {
    filteredMentors() {
      const mentors = this.$store.getters['mentors/mentors'];
      return mentors.filter(mentor => {
        if (this.activeFilters.frontend && mentor.areas.includes('frontend')) {
          return true
        }
        if (this.activeFilters.backend && mentor.areas.includes('backend')) {
          return true
        }
        if (this.activeFilters.career && mentor.areas.includes('career')) {
          return true
        }
        if (this.activeFilters.devops && mentor.areas.includes('devops')) {
          return true
        }
        if (this.activeFilters.marketing && mentor.areas.includes('marketing')) {
          return true
        }
        if (this.activeFilters.pm && mentor.areas.includes('pm')) {
          return true
        }
        return false
      })
    },
    hasMentors() {
      return this.$store.getters['mentors/hasMentors']
    }
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters
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