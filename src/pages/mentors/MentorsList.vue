<template>
  <div>
    <base-dialog :show="!!error" title="An Error was occurred!" @close="errorHandler"> <!--for bool returns-->
      <p>{{ error }}</p>
    </base-dialog>
    <section>
      <mentor-filter @change-filter="setFilters"></mentor-filter>
    </section>
    <section>
      <base-card>
        <div class="controls">
          <base-button mode="outline" @click="loadMentors(true)">Refresh</base-button>
          <base-button v-if="!isLoggedIn" link to="/auth?redirect=register">Login to Register as a Mentor</base-button>
          <base-button v-if="isLoggedIn && !isMentor && !isLoading" link to="/register">Register as a Mentor</base-button>
        </div>
        <div v-if="isLoading">
          <base-spinner></base-spinner>
        </div>
        <ul v-else-if="hasMentors">
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
  </div>
</template>
<script>
import MentorItem from "../../components/mentors/MentorItem.vue";
import BaseCard from "../../components/ui/BaseCard.vue";
import BaseButton from "../../components/ui/BaseButton.vue";
import MentorFilter from "../../components/mentors/MentorFilter.vue";
import BaseSpinner from "../../components/ui/BaseSpinner.vue";
import BaseDialog from "../../components/ui/BaseDialog.vue";

export default {
  components: {
    BaseDialog,
    BaseSpinner,
    BaseButton,
    BaseCard,
    MentorItem,
    MentorFilter
  },
  data() {
    return {
      isLoading: false,
      error: null,
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
    isLoggedIn() {
      return this.$store.getters.isAuthenticated
    },
    isMentor() {
      return this.$store.getters['mentors/isMentor']
    },
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
      return !this.isLoading && this.$store.getters['mentors/hasMentors']
    }
  },
  created() {
    this.loadMentors()
  },
  methods: {
    errorHandler() {
      this.error = null
    },
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters
    },
    async loadMentors(refresh = false) {
      this.isLoading = true
      try {
        await this.$store.dispatch('mentors/loadMentors', {forceRefresh: refresh})
      } catch (error) {
        this.error = error.message || 'Something went wrong'
      }
      this.isLoading = false
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