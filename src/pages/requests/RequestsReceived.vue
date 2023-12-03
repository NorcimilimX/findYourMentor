<template>
  <div>
    <base-dialog :show="!!error" title="An Error was occurred!" @close="errorHandler"> <!--for bool returns-->
      <p>{{ error }}</p>
    </base-dialog>
    <section>
      <base-card>
        <header>
          <h2>Requests Received</h2>
        </header>
        <base-spinner v-if="isLoading"></base-spinner>
        <ul v-else-if="hasRequests && !isLoading">
          <request-item
              v-for="request in receivedRequests"
              :key="request.id"
              :email="request.userEmail"
              :message="request.message"
          ></request-item>
        </ul>
        <h3 v-else>You haven't received any requests yet!</h3>
      </base-card>
    </section>
  </div>
</template>
<script>
import RequestItem from "../../components/requests/RequestItem.vue";
import BaseDialog from "../../components/ui/BaseDialog.vue";
import BaseSpinner from "../../components/ui/BaseSpinner.vue";

export default {
  components: {
    BaseSpinner,
    BaseDialog,
    RequestItem
  },
  data() {
    return {
      isLoading: false,
      error: null
    }
  },
  computed: {
    receivedRequests() {
      return this.$store.getters['requests/requests']
    },
    hasRequests() {
      return this.$store.getters['requests/hasRequests']
    }
  },
  created() {
    this.loadRequests()
  },
  methods: {
    async loadRequests() {
      this.isLoading = true
      try {
        await this.$store.dispatch('requests/fetchRequests')
      } catch (error) {
        this.error = error.message || 'Something went wrong'
      }
      this.isLoading = false
    },
    errorHandler() {

    }
  }
}
</script>
<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>