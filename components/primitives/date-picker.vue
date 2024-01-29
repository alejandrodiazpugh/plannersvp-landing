<template>
    <div class="datepicker">
        <label>{{ props.label }}</label>
        <input type="text" class="date input" readonly />
        <Icon name="mdi:calendar" class="calendar-icon" size="24px" />
        <div class="calendar">
            <div class="calendar-header">
                <Icon name="mdi:chevron-left" class="arrow-icon" size="24px" />
                <h3>{{ header }}</h3>
                <Icon name="mdi:chevron-right" class="arrow-icon" size="24px" />
            </div>
            <ul class="calendar-days" role="list">
                <li v-for="day in DAYS_OF_THE_WEEK" :key="day">
                    {{ day.substring(0, 3) }}
                </li>
            </ul>
        </div>
    </div>
</template>
<script setup lang="ts">
const props = defineProps({
    label: {
        type: String,
        required: true,
    },
    required: {
        type: Boolean,
        default: false,
    },
    min: {
        type: Date,
        required: false,
    },
    max: {
        type: Date,
        required: false,
    },
    icon: {
        type: Boolean,
        default: true,
    },
    header: {
        type: Boolean,
        default: true,
    },
});

type TODO = any;
const current = new Date();

const header = current.toLocaleDateString("en-us", {
    month: "long",
    year: "numeric",
});

const getNumberOfDays = (year: number, month: number) => {
    return 40 - new Date(year, month, 40).getDate();
};

const getDayDetails = (args: TODO) => {
    let date = args.index - args.firstDay;
    let day = args.index % 7;
    // console.log(day)
    let prevMonth = args.month - 1;
    let prevYear = args.year;
    if (prevMonth < 0) {
        prevMonth = 11;
        prevYear--;
    }
    let prevMonthNumberOfDays = getNumberOfDays(prevYear, prevMonth);

    let _date =
        (date < 0 ? prevMonthNumberOfDays + date : date % args.numberOfDays) +
        1;
    // console.log(_date)
    let month = date < 0 ? -1 : date >= args.numberOfDays ? 1 : 0;
    let timestamp = new Date(args.year, args.month, _date).getTime();
    // console.log(timestamp)
    return {
        date: _date,
        day,
        month,
        timestamp,
        dayString: days[day],
    };
};

const getMonthDetails = (year, month) => {
    let firstDay = new Date(year, month).getDay();
    let numberOfDays = getNumberOfDays(year, month);
    let monthArray = [];
    let rows = 5;
    let currentDay = null;
    let index = 0;
    let cols = 7;

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            currentDay = getDayDetails({
                index,
                numberOfDays,
                firstDay,
                year,
                month,
            });
            monthArray.push(currentDay);
            index++;
        }
    }
    return monthArray;
};
// getMonthDetails(2023, 3)

const DAYS_OF_THE_WEEK = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
const MONTHS_OF_THE_YEAR = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
</script>
<style scoped>
.datepicker {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
}

.input {
    border-radius: 10px;
    border: none;
    outline: 2px solid var(--blue-200);
    padding-block: 4px;
    padding-inline: 10px;
    width: 100%;
}

.input:focus {
    outline: 2px solid var(--blue-100);
}

.calendar-icon {
    position: absolute;
    color: var(--blue-200);
    right: 10px;
    top: 50%;
}

.calendar {
    position: absolute;
    bottom: -10px;
    border: 1px solid red;
    width: 500px;
    height: 300px;
    background-color: plum;
    border-radius: 20px;
    display: grid;
    grid-template-columns: [header-start] 1fr [] 1fr [] 1fr [] 1fr [] 1fr [] 1fr [] 1fr [header-end];
    grid-template-rows: 50px 30px auto;
}
.calendar-header {
    display: grid;
    grid-template-columns: subgrid;
    grid-column: header;
    justify-content: center;
    align-items: center;
}

.arrow-icon {
    margin: auto;
}

.calendar-header > h3 {
    grid-column: span 5;
    text-align: center;
}

.calendar-days {
    padding: 0;
    display: grid;
    grid-column: header;
    grid-template-columns: subgrid;
    grid-template-rows: subgrid;
    text-align: center;
}
</style>
