import { routes } from "../../../app.routes";

// interface Root {
//     name: string;
//     icon: string;
//     route?: string;
//     expand: boolean;
//     // routes: Routes[];
// }

// interface Routes {
//     name: string;
//     route: string;
//     icon: string;
//     tipo_usuario: string;
//     // sub: Subroutes[];
// }

// interface Subroutes {
//     name: string;
//     route: string;
//     icon: string;
//     permisos: string[];
// }


export var views: any = [
    {
        name: "MODULOS",
        routes: [
            {
                name: "DEMO",
                route: "/demo",
                icon: "local_pizza",
            },
        ]
    }
];