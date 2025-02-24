export class Localstorage {
    constructor() {}

    saveDataInLocalStorage(data) {
        // Check if the data is already in the local storage
        if (window.localStorage.getItem("users") === null) {
            window.localStorage.setItem("users", JSON.stringify([data]));
        } else {
            // If the data is already in the local storage, get the data and push the new data
            let allUsers = this.getDataInLocalStorage();
            allUsers.push(data);
            window.localStorage.setItem("users", JSON.stringify(allUsers));
        }
    }

    getDataInLocalStorage() {
        return JSON.parse(window.localStorage.getItem("users"));
    }

    searchEmailExists(email) {
        // debugger;
        let allUsers = this.getDataInLocalStorage();
        // Check if the data is already in the local storage
        if (window.localStorage.getItem("users") === null) {
            return false;
        } else {
            for (let i = 0; i < allUsers.length; i++) {
                if (allUsers[i].email === email) {
                    window.localStorage.setItem('user',JSON.stringify(allUsers[i]))
                    return true;
                } else {
                    return false;
                }
            }
        }
    }
}