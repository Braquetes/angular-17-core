export var views: any = [
    {
        name: "CORRESPONDENCIA EXTERNA",
        routes: [
            {
                name: "NUEVO DOCUMENTO",
                route: "/finanzas",
                icon: "description",
                expand: true
            }
        ]
    },
    {
        name: "FICHAS INFORMATIVAS",
        routes: [
            {
                name: "NUEVA FICHA",
                route: "/finanzas",
                icon: "description",
                expand: true
            }
        ]
    },
    {
        name: "CORRESPONDENCIA INTERNA",
        routes: [
            {
                name: "NUEVO DOCUMENTO",
                route: "./nuevo-documento-interno",
                icon: "description",
                expand: true
            }
        ]
    }
];