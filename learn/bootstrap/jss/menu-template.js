export function getMenuHTML(menuItem){
    let html=
`<div class="col-12 col-md-4 col-lg-3">
    <div class="card md-3">
        <img src="${menuItem.image}" alt="${menuItem.name}">
        <div class="card-body">
            <div class="card-title">${menuItem.name}</div>
            <div class="card-text">
            ${menuItem.description}
            </div>
            <div class="row">
                <div class="col-6 price"> &euro;${menuItem.price}</div>
                <div class="col-6 add-btn">
                    <button class="btn btn-outline-primary btn-sm">Add</button>
                </div>
            </div>
        </div>
    </div>
</div>`;
            return html;
}