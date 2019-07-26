function findOutlier(integers) {
    let test = integers[0] % 2 + integers[1] % 2 + integers[2] % 2;
    for (let i = 0; i < integers.lengthl; ++i) {
        if (test > 1) {
            if (i % 2 === 0) {
                return i;
            }
        }
        else {
            if (i % 2 === 1) {
                return i;
            }
        }
    }
}

findOutlier([0, 1, 2]);
findOutlier([1, 2, 3]);
findOutlier([2,6,8,10,3]);
findOutlier([0,0,3,0,0]);
findOutlier([1,1,0,1,1]);