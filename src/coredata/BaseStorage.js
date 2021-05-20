// const {AsyncStorage} = require("react-native")
import AsyncStorage from '@react-native-async-storage/async-storage'

class BaseStorage {
    static storeData = async (k, v) => {
        try {
            const jsonValue = JSON.stringify(v)
            await AsyncStorage.setItem(k, jsonValue)
        } catch (e) {}
    }
    static getData = async (k) => {
        try {
            const jsonValue = await AsyncStorage.getItem(k)
            return jsonValue != null ? JSON.parse(jsonValue) : null
        } catch (e) {}
    }
}

export default BaseStorage
