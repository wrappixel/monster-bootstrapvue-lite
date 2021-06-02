<template>
  <div class="table-responsive">
    <table class="table v-middle text-nowrap bg-transparent table-hover">
      <thead class="bg-light">
        <tr class>
          <th class="border-0 font-weight-normal">Clients</th>
          <th class="border-0 font-weight-normal">License</th>
          <th class="border-0 font-weight-normal">Technology</th>
          <th class="border-0 font-weight-normal">Tickets</th>
          <th class="border-0 font-weight-normal">Sales</th>
          <th class="border-0 font-weight-normal">Earnings</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div class="d-flex align-items-center">
              <div class="mr-2">
                <img
                  src="../../assets/images/users/1.jpg"
                  class="rounded-circle"
                  width="45"
                />
              </div>
              <div class>
                <h5 class="mb-0">Johnson Deo</h5>
              </div>
            </div>
          </td>
          <td>Single Use</td>
          <td>
            <b-badge variant="danger" class="rounded-0">Angular</b-badge>
          </td>
          <td>46</td>
          <td>356</td>
          <td>
            <h5 class="mb-0">$2850.06</h5>
          </td>
        </tr>
        <tr>
          <td>
            <div class="d-flex align-items-center">
              <div class="mr-2">
                <img
                  src="../../assets/images/users/5.jpg"
                  class="rounded-circle"
                  width="45"
                />
              </div>
              <div class>
                <h5 class="mb-0">Stephen Mark</h5>
              </div>
            </div>
          </td>
          <td>Single Use</td>
          <td>
            <b-badge variant="info" class="rounded-0">Vue Js</b-badge>
          </td>
          <td>46</td>
          <td>356</td>
          <td>
            <h5 class="mb-0">$2850.06</h5>
          </td>
        </tr>
        <tr>
          <td>
            <div class="d-flex align-items-center">
              <div class="mr-2">
                <img
                  src="../../assets/images/users/3.jpg"
                  class="rounded-circle"
                  width="45"
                />
              </div>
              <div class>
                <h5 class="mb-0">John Peter</h5>
              </div>
            </div>
          </td>
          <td>Single Use</td>
          <td>
            <b-badge variant="success" class="rounded-0">Bootstrap</b-badge>
          </td>
          <td>46</td>
          <td>356</td>
          <td>
            <h5 class="mb-0">$2850.06</h5>
          </td>
        </tr>
        <tr>
          <td>
            <div class="d-flex align-items-center">
              <div class="mr-2">
                <img
                  src="../../assets/images/users/4.jpg"
                  class="rounded-circle"
                  width="45"
                />
              </div>
              <div class>
                <h5 class="mb-0">Denny Jobs</h5>
              </div>
            </div>
          </td>
          <td>Multiple Use</td>
          <td>
            <b-badge variant="warning" class="rounded-0">React</b-badge>
          </td>
          <td>46</td>
          <td>356</td>
          <td>
            <h5 class="mb-0">$2850.06</h5>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "SellingProduct",
  components: {},
};
</script>