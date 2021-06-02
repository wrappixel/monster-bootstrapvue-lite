<template>
  <b-row>
    <b-col lg="3" cols="12" md="6" v-for="sale in sales" :key="sale.title">
      <b-card class="mb-4" :title="sale.title">
        <div class="text-right">
          <h2 class="font-weight-light mb-0">
            <i :class="[sale.progressicon]"></i> {{ sale.rate }}
          </h2>
          <span class="text-muted">{{ sale.subtitle }}</span>
        </div>
        <span :class="'text-' + [sale.percentcolor]">{{ sale.percent }}%</span>
        <b-progress
          :value="sale.percent"
          :variant="sale.percentcolor"
          max="100"
        ></b-progress>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "TopCards",
  data: () => ({
    title: "Sales Card",
    sales: [
      {
        title: "Daily Sales",
        progressicon: "ti-arrow-up text-success",
        rate: "$120",
        subtitle: "Todays Income",
        percent: 80,
        percentcolor: "success",
      },
      {
        title: "Weekly Sales",
        progressicon: "ti-arrow-up text-info",
        rate: "$5,000",
        subtitle: "Todays Income",
        percent: 30,
        percentcolor: "info",
      },
      {
        title: "Monthly Sales",
        progressicon: "ti-arrow-up text-primary",
        rate: "$8,000",
        subtitle: "Todays Income",
        percent: 60,
        percentcolor: "primary",
      },
      {
        title: "Yearly Sales",
        progressicon: "ti-arrow-down text-danger",
        rate: "$12,000",
        subtitle: "Todays Income",
        percent: 80,
        percentcolor: "danger",
      },
    ],
  }),
};
</script>