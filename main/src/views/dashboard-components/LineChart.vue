<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  data() {
    return {
      gradient: null,
      gradient2: null,
    };
  },
  mounted() {
    this.gradient = this.$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 450);
    this.gradient2 = this.$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 450);

    this.gradient.addColorStop(0, "rgba(0, 158, 251, 0.5)");
    this.gradient.addColorStop(0.5, "rgba(0, 158, 251, 0.25)");
    this.gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

    this.gradient2.addColorStop(0, "rgba(116, 96, 238, 0.9)");
    this.gradient2.addColorStop(0.5, "rgba(116, 96, 238, 0.25)");
    this.gradient2.addColorStop(1, "rgba(116, 96, 238, 0)");

    this.renderChart(
      {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: "One Plus",
            borderColor: "#009efb",
            pointBackgroundColor: "white",
            borderWidth: 2,
            backgroundColor: this.gradient,
            data: [0, 5, 6, 8, 21, 9, 8],
          },
          {
            label: "Iphone",
            borderColor: "#7460ee",
            pointBackgroundColor: "white",
            borderWidth: 2,
            backgroundColor: this.gradient2,
            data: [0, 3, 1, 2, 8, 1, 5],
          },
        ],
      },
      { responsive: true, maintainAspectRatio: false }
    );
  },
};
</script>