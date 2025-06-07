import { createClient, RedisClientType } from 'redis';

export class CacheManager {

    constructor() {
        // Empty due to singleton
    }

    private static instance: CacheManager; //This is here to grab the CacheManager object
    private cacheClient!: RedisClientType; //I NEED TO FIND OUT WHAT DATATYPE THIS IS
    
    public static getCacheInstance(): CacheManager {
        if(CacheManager.instance === undefined) {
            CacheManager.instance = new CacheManager();
        }
        return CacheManager.instance;
    }

    public async intializeCacheClient() {
        this.cacheClient = await createClient({
            url: 'redis://127.0.0.1:6379'
        }) as RedisClientType
        this.cacheClient.on('error', (err: Error) => console.log('Issue Connection to Redis. Error => ', err));
        await this.cacheClient.connect();
    }

    public getCacheClient() {
        return this.cacheClient;
    }
}