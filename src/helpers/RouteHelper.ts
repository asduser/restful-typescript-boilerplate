import * as lodash from "lodash";

class AppRoute {
    constructor(
        public path: string,
        public methods: string[]
    ){}
}

export class RouteHelper {

    public static appRoutes: AppRoute[] = [];
    
    public static countRoutes(controls: any): void {
        if (RouteHelper.appRoutes.length == 0) {
            let newRoutes:AppRoute[] = [];
            let routeList = [];
            controls.stack.forEach((el) => {
                //console.log(el.route);
                routeList.push(el.route);
            });
            let routes = lodash.uniq(routeList, 'path');
            let uniqueRoutes = lodash.uniq(routeList.map(r => r.path));
            //console.log( routeList );

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
                //console.log(_methods);
                newRoutes.push(new AppRoute(ur, _methods));
            });
            console.log(RouteHelper.appRoutes);
            console.log('Getting routes...');
            RouteHelper.appRoutes = newRoutes;
        }
    }
    
}