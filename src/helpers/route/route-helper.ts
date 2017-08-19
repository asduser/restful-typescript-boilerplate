import {uniq} from "lodash";

export class RouteHelper {

    public static appRoutes: AppRoute[] = [];

    public static countRoutes(controls: any): void {
        if (RouteHelper.appRoutes.length == 0) {
            let newRoutes:AppRoute[] = [];
            let routeList = [];
            controls.stack.forEach((el) => {
                routeList.push(el.route);
            });
            let uniqueRoutes = uniq(routeList.map(r => r.path));

            uniqueRoutes.forEach((ur) => {
                let similarRoutes = routeList.filter((_r) => _r.path == ur);
                let methods = {};
                similarRoutes.forEach((sr) => {
                    methods = Object.assign(methods, sr.methods)
                });
                let _methods:string[] = [];
                for (let key in methods) {
                    _methods.push(key);
                }
                newRoutes.push(new AppRoute(ur, _methods));
            });
            console.log('Getting routes...');
            RouteHelper.appRoutes = newRoutes;
            console.log(RouteHelper.appRoutes);
        }
    }

}


export class AppRoute {
    constructor(
        public path: string,
        public methods: string[]
    ){}
}