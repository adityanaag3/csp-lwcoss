import { LightningElement } from 'lwc';



export default class App extends LightningElement {
    searchKey = 'Harry Potter';
    books;
    error;

    handleSearchKeyChange(event) {
        this.searchKey = event.target.value;
    }

    handleSearchClick() {
        fetch(`https://www.googleapis.com/books/v1/volumes?langRestrict=en&q=${this.searchKey}`)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response);
                } else {
                    return response.json();
                }
            })
            .then((jsonResponse) => {
                this.books = jsonResponse;
            })
            .catch((error) => {
                this.error = error;
                this.books = undefined;
            });
    }
}
