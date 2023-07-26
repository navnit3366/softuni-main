function orderRectangles(rectangles) {

    let orderedRectangles = [];
    for(let rect of rectangles) {
        orderedRectangles.push({
            width: rect[0],
            height: rect[1],
            area: function() {
                return this.width * this.height;
            },
            compareTo: function(other) {
                return this.area() - other.area();
            }
        });
    }
    orderedRectangles.sort((a, b) => b.compareTo(a));

    console.log(orderedRectangles);
}

orderRectangles([[10,5],[5,12]]);
