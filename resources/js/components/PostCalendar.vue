<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import usePosts from "@/services/postServices.js";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/24/solid";


const { posts, getPostsAll,} = usePosts();
const daysTag = ref(null);
const currentDate = ref(null);
const router = useRouter();
let date = new Date(),
    currYear = date.getFullYear(),
    currMonth = date.getMonth();

const months = [
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

const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(),
        lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(),
        lastDayofMonth = new Date(
            currYear,
            currMonth,
            lastDateofMonth
        ).getDay(),
        lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
    let liTag = "";

    for (let i = firstDayofMonth; i > 0; i--) {
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDateofMonth; i++) {
        let isToday =
            i === date.getDate() &&
            currMonth === new Date().getMonth() &&
            currYear === new Date().getFullYear()
                ? "active"
                : "";
             let size =  posts.value.filter((post) =>{
                let cmdate = (currMonth + 1 < 10) && (i < 10) ? `${currYear}-0${currMonth + 1}-0${i}` 
                            : (currMonth + 1 < 10) ? `${currYear}-0${currMonth + 1}-${i}` 
                            : (i < 10) ? `${currYear}-${currMonth + 1}-0${i}` : `${currYear}-${currMonth + 1}-${i}` ;
            return   post.date === cmdate;
            });
             
            let havePub = size.length > 0  ? "have-pub" : "";
        liTag += `<li class="${isToday} ${havePub} days-items">${i}</li>`;
    }

    for (let i = lastDayofMonth; i < 6; i++) {
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
    }
    currentDate.value.innerText = `${months[currMonth]} ${currYear}`;
    daysTag.value.innerHTML = liTag;
};

async function nextMonth() {
   currMonth =  currMonth + 1;
    if (currMonth < 0 || currMonth > 11) {
        date = new Date(currYear, currMonth);
        currYear = date.getFullYear();
        currMonth = date.getMonth();
    } else {
        date = new Date();
    }
    renderCalendar();
    setItemsDays();
}

async function prevMonth() {
    currMonth = currMonth - 1;
    console.log(currMonth)
    if (currMonth < 0 || currMonth > 11) {
        date = new Date(currYear, currMonth);
        currYear = date.getFullYear();
        currMonth = date.getMonth();
    } else {
        date = new Date();
    }
    renderCalendar();
    setItemsDays();
}

onMounted(async function () {
    await getPostsAll('article');
    renderCalendar();
    setItemsDays();
});

async function setItemsDays() {
    let days_items = document.querySelectorAll("#postcalendar .days-items");
    for (let i = 0; i < days_items.length; i++) {
        days_items[i].addEventListener("click", function (e) {
            e.preventDefault();
            router.push({
                name: "articles",
                query: {
                    search_date: `${currYear}-${currMonth + 1}-${
                        e.target.innerHTML
                    }`,
                },
            });
        });
    }
}
</script>

<template>
    <div id="postcalendar">
    <div class="wrapper">
        <header>
            <p class="current-date" ref="currentDate"></p>
            <div class="icons">
                <span id="prev" @click="prevMonth()"
                    ><ChevronLeftIcon class="h-5 w-5"
                /></span>
                <span id="next" @click="nextMonth()"
                    ><ChevronRightIcon class="h-5 w-5"
                /></span>
            </div>
        </header>
        <div class="calendar">
            <ul class="weeks">
                <li>Sun</li>
                <li>Mon</li>
                <li>Tue</li>
                <li>Wed</li>
                <li>Thu</li>
                <li>Fri</li>
                <li>Sat</li>
            </ul>
            <ul class="days" ref="daysTag"></ul>
        </div>
    </div>
</div>
</template>

<style>
#postcalendar .wrapper {
    width: 100%;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
}
#postcalendar .wrapper header {
    display: flex;
    align-items: center;
    padding: 10px 30px 10px;
    justify-content: space-between;
}
#postcalendar  header .icons {
    display: flex;
}
#postcalendar  header .icons span {
    height: 30px;
    width: 30px;
    margin: 0 1px;
    cursor: pointer;
    color: #878787;
    text-align: center;
    line-height: 38px;
    font-size: 1.5rem;
    user-select: none;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}
#postcalendar  .icons span:last-child {
    margin-right: -10px;
}

#postcalendar  header .icons span:hover {
    background: #f2f2f2;
}
#postcalendar  header .current-date {
    font-size: 1rem;
    font-weight: 500;
}
#postcalendar  .calendar {
    padding: 15px;
}
#postcalendar  .calendar ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    text-align: center;
}
#postcalendar  .calendar .days {
    margin-bottom: 5px;
}
#postcalendar  .calendar li {
    color: #333;
    width: calc(100% / 7);
    font-size: 0.875rem;
}
#postcalendar .calendar .weeks li {
    font-weight: 500;
    cursor: default;
}
#postcalendar  .calendar .days li {
    z-index: 1;
    cursor: pointer;
    position: relative;
    margin-top: 20px;
}
#postcalendar  .days li.inactive {
    color: #aaa;
}
#postcalendar  .days li.active {
    color: #fff;
}
#postcalendar  .days li::before {
    position: absolute;
    content: "";
    left: 50%;
    top: 50%;
    height: 35px;
    width: 35px;
    z-index: -1;
    border-radius: 50%;
    transform: translate(-50%, -50%);
}
#postcalendar  .days li.active::before {
    background: #289dcc !important;
}
#postcalendar  .days li.have-pub::before {
    background: #f2f2f2;
}
#postcalendar  .days li:not(.active):hover::before {
    background: rgb(223, 223, 223);
}
</style>
