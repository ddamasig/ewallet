<template>
  <div class="white text-center py-3">
    <v-btn-toggle
      v-model="selectedTab"
      color="primary accent-3"
      background-color="white"
      borderless
      group
    >
      <v-btn
        rounded
        value="Income"
        class="text-capitalize"
      >
        Income
      </v-btn>

      <v-btn
        rounded
        value="Expenses"
        class="text-capitalize"
      >
        Expenses
      </v-btn>

    </v-btn-toggle>

    <!-- Chart -->
    <highchart :options="incomeOptions"></highchart>

    <!-- Filters -->
    <v-row class="justify-center">
      <v-col
        v-for="(timeframe,index) in timeframes"
        :key="index"
        cols="3"
      >
        <v-btn
          rounded
          :color="timeframe.color"
          elevation="0"
          class="text-capitalize"
        >
          {{ timeframe.name }}
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timeframes: [
        {
          name: 'Day',
          color: 'transparent',
        },
        {
          name: 'Week',
          color: 'primary',
        },
        {
          name: 'Month',
          color: 'transparent',
        }
      ],
      tabs: [
        {
          name: 'Income',
          color: 'black--text',
        },
        {
          name: 'Expense',
          color: 'grey--text',
        },
      ],
      selectedTab: 'Income',
      show: true,
      incomeOptions: {
        chart: {
          type: 'areaspline'
        },
        title: {
          text: 'Week of Feb 21'
        },
        legend: {
          layout: 'vertical',
          align: 'left',
          verticalAlign: 'top',
          x: 150,
          y: 100,
          floating: true,
          borderWidth: 1,
          backgroundColor: '#ffffff'
        },
        xAxis: {
          categories: [
            'M',
            'T',
            'W',
            'TH',
            'F',
            'ST',
            'SN'
          ],
          // plotBands: [{ // visualize the weekend
          //   from: 4.5,
          //   to: 6.5,
          //   color: 'rgba(68, 170, 213, .2)'
          // }]
        },
        yAxis: {
          title: {
            text: 'Income (Thousands)'
          },
          gridLineWidth: 0,
        },
        tooltip: {
          shared: true,
          valueSuffix: ' thousand'
        },
        credits: {
          enabled: false
        },
        plotOptions: {
          areaspline: {
            fillOpacity: 0.15
          }
        },
        series: [
          {
            name: 'Income',
            data: [3, 4, 3, 5, 4, 10, 12],
            color: '#f55258'
          },
          // {
          //   name: 'Expense',
          //   data: [1, 3, 4, 3, 3, 5, 4],
          //   color: 'rgb(246,119,106)'
          // }
        ]
      }
    }
  },
}
</script>
