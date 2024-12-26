export class Container {

    private static instance: Container;
    private instances: {[key: string]: any} = {};

    //Singleton
    private constructor() {
        this.registerControllers();
    }

    public static getInstance(): Container {
        if(Container.instance === null || Container.instance === undefined) {
            Container.instance = new Container();
        }
        return Container.instance;
    }

    register(key: string, instance: any) {
        this.instances[key] = instance;
    }

    resolve<T>(key: string): T {
        return this.instances[key];
    }

    registerControllers(): void {

    }
}