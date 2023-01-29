import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
    const startIndex = (pageNumber - 1) * pageSize;

    return _(items).slice(startIndex).take(pageSize).value();

    //_(items)  => lodash wrapper/object
    //.slice(items, startIndex)  => cuts in pieces for each page
    //.take() => takes items for the current page (how many)
    //.value() => converts to array
}
