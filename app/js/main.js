/*
* Показать скрытые элементы расписания
* */
function scheduleShowMore(btn) {
    let items = btn.parentElement.parentElement.getElementsByClassName("schedule__item");

    [...items].forEach(
        (element) => {
            element.classList.remove("schedule__item_hidden");
        }
    );

    btn.parentElement.classList.add("schedule__item_hidden");
}


/*
* Если времен больше чем на 1 строчку, то в конце строчки появляется
* кнопка "ещё..." при нажатии на которую раскрываются скрытые времена.
* */
window.onload = setupScheduleList();
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

/*
* Возвращает доступное для заполенния место
*  */
function getAvailableWidth() {
    let infoItemWidth = document.querySelector(".info__item").offsetWidth;
    let iconItem = document.querySelector(".info__icon");
    let iconItemWidth = iconItem.naturalWidth +
        parseInt(getComputedStyle(iconItem).getPropertyValue("margin-right"));
    let scheduleList = document.querySelector(".schedule__list");

    return infoItemWidth - iconItemWidth;
}

/*
* Удаление класса, скрывающего элементы
* array - коллекция html элементов
* count - количество элементов, начиная с 1ого, у которых необходимо убрать скрывающий класс
* */
function setItemsVisibility(array, count) {
    for (let i = 0; i < count; i++) {
        array.item(i).classList.remove("schedule__item_hidden");
    }
}

