interface Root {
    name: string;
    icon: string;
    route?: string;
    expand: boolean;
    routes: Routes[];
}

interface Routes {
    name: string;
    route: string;
    icon: string;
    tipo_usuario: string;
    sub: Subroutes[];
}

interface Subroutes {
    name: string;
    route: string;
    icon: string;
    permisos: string[];
}


export var routes: Root[] = [
    {
        name: "Inicio",
        route: "",
        icon: "home",
        expand: true,
        routes: [
            {
                name: "SICOCED",
                route: "",
                icon: "home",
                tipo_usuario: "ADMIN",
                sub: [
                    {
                        name: "Inicio",
                        route: "/",
                        icon: "home",
                        permisos: ['VER_DASHBOARD', 'VER_SUBMENU_DASHBOARD']
                    }
                ]
            }
        ]
    },
];