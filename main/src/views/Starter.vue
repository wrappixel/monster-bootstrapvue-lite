<template>
  <div>
    <!-- ----------------------------------------------- -->
    <!-- top cards -->
    <!-- ----------------------------------------------- -->
    <TopCards />
    <!-- ----------------------------------------------- -->
    <!-- end top cards -->
    <!-- ----------------------------------------------- -->
    <b-row>
      <b-col cols="12" lg="8" class="d-flex align-items-stretch">
        <b-card class="mb-4 w-100">
          <h4 class="card-title">Revenue Statistics</h4>
          <RevenueStatistics />
        </b-card>
      </b-col>
      <b-col cols="12" lg="4" class="d-flex align-items-stretch">
        <b-card class="mb-4 w-100">
          <h4 class="card-title">Feeds</h4>
          <Feeds />
        </b-card>
      </b-col>
    </b-row>
    <!-- ----------------------------------------------- -->
    <!-- top selling products -->
    <!-- ----------------------------------------------- -->
    <b-card class="mb-4" no-body>
      <b-card-body>
        <h4 class="card-title">Top Selling Products</h4>
        <h6 class="card-subtitle font-weight-normal text-muted">
          Overview of Latest Month
        </h6>
      </b-card-body>
      <SellingProduct />
    </b-card>
    <!-- ----------------------------------------------- -->
    <!-- end top selling products -->
    <!-- ----------------------------------------------- -->
  </div>
</template>

<script>
import RevenueStatistics from "./dashboard-components/RevenueStatistics";
import Feeds from "./dashboard-components/Feeds";
import SellingProduct from "./dashboard-components/SellingProduct";
import TopCards from "./dashboard-components/TopCards";
export default {
  name: "Starter",
  data: () => ({}),
  components: {
    RevenueStatistics,
    Feeds,
    SellingProduct,
    TopCards,
  },
};
</script>
