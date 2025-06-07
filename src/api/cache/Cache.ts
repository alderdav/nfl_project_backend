import { RedisClientType } from "redis";
import { CacheManager } from "../../db/CacheManager";

export class Cache {

    private cacheClient: RedisClientType;

    constructor() {
        this.cacheClient = CacheManager.getCacheInstance().getCacheClient();
    }

    public checkCache(key: string): boolean {
        this.cacheClient.get(key)
            .then(cacheResponse => {
                if(cacheResponse !== null) {
                    return true
                }
            })
        return false;
    }

    public grabCacheValue(key: string) {
        return this.cacheClient.get(key);
    }

    public async setCacheValue(key: string, value: any, ttl: number) {
        return new Promise((resolve, reject) => {
            const setValue = this.cacheClient.set(key, JSON.stringify(value));
            if(!setValue) {
                reject(`There was an issue setting value for key ${key} in cache`);
            }
            resolve('Value set  in cache for key ' + key);
        })
    }
}