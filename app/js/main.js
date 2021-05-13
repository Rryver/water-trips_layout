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
    let scheduledItem = document.querySelector(".schedule__item");
    let scheduledItemWidth = scheduledItem.offsetWidth + parseInt(getComputedStyle(scheduledItem).getPropertyValue("margin-right"));


    console.log(scheduleWidth);
    console.log(scheduledItemWidth);
    console.log(scheduleWidth / scheduledItemWidth);




    let infoItem = document.querySelector(".info__item");
    console.log(infoItem);
    console.log(infoItem.offsetWidth);



    let iconItem = document.querySelector(".info__icon");
    console.log(iconItem);
    console.log(iconItem.naturalWidth);
    let iconItemWidth = document.querySelector(".info__icon");



    [...trips].forEach(
        (trip) => {
            let scheduledItems = trip.getElementsByClassName("schedule__item");

            for (let i = 0; i < scheduledItems.length; i++) {

            }
        }
    );
}