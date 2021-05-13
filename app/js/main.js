function scheduleShowMore(btn) {
    let items = btn.parentElement.parentElement.getElementsByClassName("schedule__item");

    [...items].forEach(
        (element) => {
            console.log(element);
            element.classList.remove("schedule__item_hidden");
        }
    );

    btn.parentElement.classList.add("schedule__item_hidden");
}


window.onload = scheduleCheckWidth();

function scheduleCheckWidth() {
    let trips = document.getElementsByClassName("trip");
    let scheduleWidth = document.querySelector(".schedule__list").scrollWidth;
    let scheduleItem = document.querySelector(".schedule__item");
    let scheduleItemWidth = scheduleItem.offsetWidth + parseInt(getComputedStyle(scheduleItem).getPropertyValue("margin-right"));


    console.log(scheduleWidth);
    console.log(scheduleItemWidth);
    console.log(scheduleWidth / scheduleItemWidth);


    let infoItemWidth = document.querySelector(".info__item").offsetWidth;
    console.log("infoItem width = " + infoItemWidth);

    let iconItem = document.querySelector(".info__icon");
    let iconItemWidth = iconItem.naturalWidth + parseInt(getComputedStyle(iconItem).getPropertyValue("margin-right"));
    console.log("IconItemWidht = " + iconItemWidth);

    let availiableWidth = infoItemWidth - iconItemWidth;
    console.log("availeableWidth = " + availiableWidth);
    let availiableItemsCount = parseInt(availiableWidth / scheduleItemWidth);
    console.log("count = " + availiableItemsCount);


    [...trips].forEach(
        (trip) => {
            let scheduleItems = trip.getElementsByClassName("schedule__item");

            console.log(scheduleItems.length);

            if (availiableItemsCount > scheduleItems.length) {
                setItemsVisibility(scheduleItems, availiableItemsCount - 1);
                scheduleItems.querySelector(".schedule__item_show-more");
            } else {
                setItemsVisibility(scheduleItems, availiableItemsCount);
            }
        }
    );
}

function setItemsVisibility(array, count) {
    for (let i = 0; i < count; i++) {
        array.item(i).classList.remove("schedule__item_hidden");
    }
}