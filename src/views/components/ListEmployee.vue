<script>
import '../../assets/employeeTable.scss'

export default {
  data() {
    return {
      tableData: [
        { id: 1, column1: 'Row 1 Column 1', column2: 'Row 1 Column 2', column3: 'Row 1 Column 3' },
        { id: 2, column1: 'Row 2 Column 1', column2: 'Row 2 Column 2', column3: 'Row 2 Column 3' },
        { id: 3, column1: 'Row 3 Column 1', column2: 'Row 3 Column 2', column3: 'Row 3 Column 3' },
      ],
    };
  },
};
</script>


<template>
  <div class="overview">
    <div class="header">
      <h2>Overview</h2>
      <h4>Employee List</h4>

    </div>
    <div class="list">
      <table class="table">
        <thead class="thead-light">
          <tr>
            <th class="top-left">ID</th>
            <th>Column 1</th>
            <th>Column 2</th>
            <th class="top-right">Column 3</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in tableData" :key="row.id">
            <td>{{ row.id }}</td>
            <td>{{ row.column1 }}</td>
            <td>{{ row.column2 }}</td>
            <td>{{ row.column3 }}</td>
          </tr>
        </tbody>

      </table>
    </div>
  </div>
</template>

<style lang="scss">
// Import the library


.table {
  margin-top: 2%;
  width: 100%;
  font-size: 18px;

  th,
  td {
    padding: 25px;
    text-align: center;
  }

}

.top-left {
  border-top-left-radius: 10px;
}

.top-right {
  border-top-right-radius: 10px;
}

.thead-light {
  border-top-left-radius: 10px;
  background-color: #969696;
}

.overview {
  margin-left: 10%;
  align-items: center;
  justify-content: space-around;
  margin-right: 10%;
}

.header {
  display: flexbox;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5%;

  h2 {
    display: flex;
    font-size: 24px;
    margin-bottom: 5px;

  }

  h4 {
    font-size: 38px;
  }
}
</style> 