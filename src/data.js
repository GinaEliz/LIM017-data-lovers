//Filtrar en barra de busqueda (por nombre)
export const filterByName = (data, championsNameFilter) => {
    return data.filter(championName => (championName.id).toLowerCase().includes(championsNameFilter.toLowerCase()))
};

export const filterByRoles = (data, valueRol) => {
    let result = [];
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].tags.length; j++) {
            if (data[i].tags[j].includes(valueRol)) {
                result.push(data[i]);
            }
        }
    }
    return result;
};

export const dataOrden = (data, sortOrder) => {
    switch (sortOrder) {
        case "az":
            return dataOrden(data).reverse()
        case "za":
            return dataOrden(data).reverse()

        default:
            return data
    }
};

export const percetFloor = (num, tot) => Math.floor(num * 100 / tot);

export const computeStats = (data) => {
    const total = data.length;
    let countEasy = 0;
    let countMedium = 0;
    let countHard = 0;
    for (const element of data) {
        if (element.info.difficulty <= 3) {
            countEasy++;
        } else if (element.info.difficulty >= 4 && element.info.difficulty <= 6) {
            countMedium++;
        } else {
            countHard++;
        }

    }
    return [percetFloor(countEasy, total), percetFloor(countMedium, total), percetFloor(countHard, total)]
}