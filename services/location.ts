import { location_data_url} from '../config/rest-config';

export async function getStates() {
    try {
        let states = await fetch(`${location_data_url}.json?shallow=true`);
        let result = await states.json();
        return Object.keys(result).sort();
    } catch (error) {
        throw error;
    }
}

export async function getDistricts(state:string) {
    try {
        let districts = await fetch(`${location_data_url}/${state}.json?shallow=true`);
        let result = await districts.json();
        return Object.keys(result).sort();
    } catch (error) {
        throw error;
    }
}

export async function getSubDistricts(state:string,district:string) {
    try {
        let subdistricts = await fetch(`${location_data_url}/${state}/${district}.json?shallow=true`);
        let result = await subdistricts.json();
        return Object.keys(result).sort();
    } catch (error) {
        throw error;
    }
}

export async function getCities(state:string,district:string,subdistrict:string) {
    try {
        let cities = await fetch(`${location_data_url}/${state}/${district}/${subdistrict}.json?shallow=true`);
        let result = await cities.json();
        return Object.keys(result).sort();
    } catch (error) {
        throw error;
    }
}

