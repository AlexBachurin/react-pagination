//pagination logic

export const paginate = (data) => {
    //how many users we want to show on page
    const itemsOnPage = 10;
    //now we need to create an array of arrays from data we get in this function so if it was [1,2,3,4,5,6,7,8,9,10]
    //we transform it into [[1,2,3],[4,5,6],[7,8,9],[10]] if we want to show 3 items on 1 page

    //number of pages to show
    const numberOfPages = Math.ceil(data.length / itemsOnPage)

    const transformedData = Array.from({ length: numberOfPages }, ((item, index) => {
        //so we starting from index * items to show on Page
        //0 10, 10 20 , 20 30, 30 40
        const startSlice = index * itemsOnPage;
        //end slice will be startSlice + items to show on page, so if it will be
        //start: 0 * 10 / end : 0 + 10
        //start : 1*10 / end : 10 + 10
        //start : 2*10 / end: 20 + 10
        return data.slice(startSlice, startSlice + itemsOnPage)
    }))

    return transformedData;
}