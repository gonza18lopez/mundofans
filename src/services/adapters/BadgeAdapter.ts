import axios from 'axios';

export default class BadgeAdapter {
    /**
     * The HabboAPI path
     * 
     * @var String
     */
    private path: String;
    
    /**
     * The contrusctor of BadgeAdapter
     * 
     * @returns void
     */
    constructor() {
        this.path = 'https://api.habboapi.net/badges'
    }

    /**
     * Get the latest badges discovered from Habbo
     * 
     * @returns Object<any>
     */
    async latest() {
        const response = await axios.get(`${this.path}?per_page=16`)

        return response.data
    }
}