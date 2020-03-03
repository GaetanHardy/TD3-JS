class SuperTable {
    constructor(element, options){
        this._element = element;
        this._options = options;
        this.table();
        this.head();
        this.body();
    }
    table() {
        this._table = document.createElement("table"); // _ indique que c'est une variable de classe
        this._element.appendChild(this._table);
    }
    head() {
        this._head = document.createElement("thead");
        this._element.appendChild(this._head);
        this._options.columns.forEach(col => {
            let colHead = document.createElement("th");
            colHead.innerHTML = col.title;
            this._head.appendChild(colHead);
        });
    }
    body() {
        this._body = document.createElement("tbody");
        this._element.appendChild(this._body);
        this._options.data.forEach(entry => {
            let row = document.createElement("tr");
            this._body.appendChild(row);
            this._options.columns.forEach(col => {
                let cell = document.createElement("td");
                row.appendChild(cell);
                cell.innerHTML = entry[col.field];
            });
        });
    }
    
}