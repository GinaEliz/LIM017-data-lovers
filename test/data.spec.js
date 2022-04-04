import { filterByName, filterByRoles, dataOrden } from '../src/data.js';
const testLol = [{
        id: "Braum",
        name: "Braum",
        tags: ["Support", "Tank"],
    }, {
        id: "Akali",
        name: "Akali",
        tags: ["Assassin"],

    }, {
        id: "Ahri",
        name: "Ahri",
        tags: ["Mage", "Assassin"],

    },
    {
        id: "Zyra",
        name: "Zyra",
        tags: ["Mage", "Support"],
    },
    {
        id: "Aatrox",
        name: "Aatrox",
        tags: ["Fighter", "Tank"],
    },
    {
        id: "Akali",
        name: "Akali",
        tags: ["Assassin"],
    },

    {
        id: "Alistar",
        name: "Alistar",
        tags: ["Tank", "Support"],
    },
];

const testOrder = [{
        id: "Zyra",
        name: "Zyra",
        tags: ["Mage", "Support"],
    },
    {
        id: "Braum",
        name: "Braum",
        tags: ["Support", "Tank"],
    },
    {
        id: "Alistar",
        name: "Alistar",
        tags: ["Tank", "Support"],
    },
    {
        id: "Akali",
        name: "Akali",
        tags: ["Assassin"],
    },
    {
        id: "Akali",
        name: "Akali",
        tags: ["Assassin"],
    },
    {
        id: "Ahri",
        name: "Ahri",
        tags: ["Mage", "Assassin"],
    },
    {
        id: "Aatrox",
        name: "Aatrox",
        tags: ["Fighter", "Tank"],
    },
];
const testOrderAz = [{
        id: "Aatrox",
        name: "Aatrox",
        tags: ["Fighter", "Tank"],
    },
    {
        id: "Ahri",
        name: "Ahri",
        tags: ["Mage", "Assassin"],
    },
    {
        id: "Akali",
        name: "Akali",
        tags: ["Assassin"],
    },
    {
        id: "Akali",
        name: "Akali",
        tags: ["Assassin"],
    },
    {
        id: "Alistar",
        name: "Alistar",
        tags: ["Tank", "Support"],
    },
    {
        id: "Braum",
        name: "Braum",
        tags: ["Support", "Tank"],
    },
    {
        id: "Zyra",
        name: "Zyra",
        tags: ["Mage", "Support"],
    },
];

const testFilterName = [{
        id: "Akali",
        name: "Akali",
        tags: ["Assassin"],
    },
    {
        id: "Akali",
        name: "Akali",
        tags: ["Assassin"],

    },
];
const assassinTest = [{
        id: "Akali",
        name: "Akali",
        tags: ["Assassin"],
    }, {
        id: "Ahri",
        name: "Ahri",
        tags: ["Mage", "Assassin"],
    },
    {
        id: "Akali",
        name: "Akali",
        tags: ["Assassin"],
    },
];
describe("filterByName", () => {
    it("es una función", () => {
        expect(typeof filterByName).toBe("function");
    });

    it("debería obtener el personaje seleccionado", () => {
        expect(filterByName(testLol, "Akali")).toStrictEqual(testFilterName);
    });
});
describe("filterByRoles", () => {
    it("es una función", () => {
        expect(typeof filterByRoles).toBe("function");
    });

    it("debería devolver un array", () => {
        expect(filterByRoles(testLol)).toEqual([]);
    });
    it("debería devolver un campeon por su Rol", () => {
        expect(filterByRoles(testLol, "Assassin")).toEqual(assassinTest);
    });
});

describe("dataOrden", () => {
    it("es una function", () => {
        expect(typeof dataOrden).toBe("function");
    });
    it("deberia ordenar los personajes de la Z-A", () => {
        expect(dataOrden(testOrder, "za")).toEqual(testOrder);
    });
    it("deberia ordenar los personajes de la A-Z", () => {
        expect(dataOrden(testOrderAz, "az")).toEqual(testOrderAz);
    });
    it("deberia retornar toda la data", () => {
        expect(dataOrden(testLol)).toEqual(testLol);
    });
});