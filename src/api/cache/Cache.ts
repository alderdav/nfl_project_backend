import { RedisClientType } from "redis";
import { CacheManager } from "../../db/CacheManager";
import { NextFunction, Request, Response } from "express";

export class Cache {

    private cacheClient: RedisClientType;

    constructor() {
        this.cacheClient = CacheManager.getCacheInstance().getCacheClient();
    }


    public static async checkCacheAsync(req: Request, res: Response, next: NextFunction) {
        const cacheClient = CacheManager.getCacheInstance().getCacheClient();;
        const key = req.url;
        cacheClient.get(key)
        .then((cachedData) => {
            if(cachedData) {
                res.send(JSON.parse(cachedData));
            } else {
                next(); // Continue to route handler if data is not in cache
            }
        })
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