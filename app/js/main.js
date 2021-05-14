function scheduleShowMore(btn) {
    let items = btn.parentElement.parentElement.getElementsByClassName("schedule__item");

    [...items].forEach(
        (element) => {
            element.classList.remove("schedule__item_hidden");
        }
    );

    btn.parentElement.classList.add("schedule__item_hidden");
}



window.onload = setupScheduleList();

//contain flights in one row (hide extra flights)
function setupScheduleList() {
    let scheduleItem = document.querySelector(".schedule__item");
    let scheduleItemWidth = scheduleItem.offsetWidth +
        parseInt(getComputedStyle(scheduleItem).getPropertyValue("margin-right"));
    let availiableItemsCount = parseInt(getAvailableWidth() / (scheduleItemWidth + 10)); // + 10 - extra 10px for text in button "more"

    let trips = document.getElementsByClassName("trip");
    [...trips].forEach(
        (trip) => {
            let scheduleItems = trip.getElementsByClassName("schedule__item");

            if (availiableItemsCount < scheduleItems.length) {
                setItemsVisibility(scheduleItems, availiableItemsCount - 1);
                trip.querySelector(".schedule__item_show-more").classList.remove("schedule__item_hidden");
            } else {
                setItemsVisibility(scheduleItems, scheduleItems.length - 1);
            }
        }
    );
}

function getAvailableWidth() {
    let infoItemWidth = document.querySelector(".info__item").offsetWidth;
    let iconItem = document.querySelector(".info__icon");
    let iconItemWidth = iconItem.naturalWidth +
        parseInt(getComputedStyle(iconItem).getPropertyValue("margin-right"));
    let scheduleList = document.querySelector(".schedule__list");

    return infoItemWidth - iconItemWidth;
}

function setItemsVisibility(array, count) {
    for (let i = 0; i < count; i++) {
        array.item(i).classList.remove("schedule__item_hidden");
    }
}

