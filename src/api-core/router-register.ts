class RouterRegister{
    public routes:any = {};

    addController(object:any, path?:string) {
        let instance = new object();
        if (!this.routes[object.name]) {
            this.routes[object.name] = {
                actions: {},
                middlewares: [],
                object: object
            };
        }

        if (path) {
            this.routes[object.name].path = path;
        }
    }

    addAction(object:any, methodName:string, type?:string, path?:string) {
        this.addController(object.constructor || object);

        if (!this.routes[object.constructor.name].actions[methodName]) {
            this.routes[object.constructor.name].actions[methodName] = {
                middlewares: [],
                types: {},
                object: object
            };
        }

        var action = this.routes[object.constructor.name].actions[methodName];

        if (type) {
            if (!action.types[type]) {
                action.types[type] = [];
            }

            if (path) {
                action.types[type].push({
                    path: path
                });
            }
        }
    }

    addMiddleware(object:any, methodName?:string, middlewares?:any) {
        if (methodName) {
            this.addAction(object, methodName);
            this.routes[object.constructor.name].actions[methodName].middlewares = middlewares;
        }

        else {
            this.addController(object);
            this.routes[object.name].middlewares = middlewares;
        }
    }

    register(app:any) {

        for (var c in this.routes) {
            var controller  = this.routes[c];
            var path        = controller.path;
            var middlewares = [].concat(controller.middlewares);

            for (var a in controller.actions) {
                var action = controller.actions[a];

                var actionMiddlewares = [].concat(middlewares).concat(action.middlewares);

                var types = action.types;

                for (var t in types) {
                    for (var m in types[t]) {
                        var params = [path + types[t][m].path];

                        params = params.concat(actionMiddlewares);

                        var ctrl = Object.create(controller.object.prototype);

                        params.push(ctrl[a]);
                        app[t.toLowerCase()].apply(app, params);
                    }
                }
            }
        }
    }
}

export let RouterManager = new RouterRegister();