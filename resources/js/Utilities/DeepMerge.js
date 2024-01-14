export default function deepMerge(obj1, obj2) {
    if (typeof obj1 != "object") {
        if (typeof obj2 != "object") return null;
        else return obj2;
    } else {
        if (typeof obj2 != "object") return obj1;
        let obj = { ...obj1 };
        for (let prop in obj2) {
            if (prop in obj && typeof obj[prop] == "object" && typeof obj2[prop] == "object")
                obj[prop] = deepMerge(obj[prop], obj2[prop]);
            else obj[prop] = obj2[prop];
        }
        return obj;
    }
}
