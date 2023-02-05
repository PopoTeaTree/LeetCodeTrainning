// 207_Course_Schedule
main()
function main(){
    console.log("Result : ", canFinish( 20,[[0,10],[3,18],[5,5],[6,11],[11,14],[13,1],[15,1],[17,4]]) );
}
function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    var mapg: Map<number,number[]> = new Map<number,number[]>();
    // Create graph
    for (let ele of prerequisites) {
        // Set the edge
        var edge: number[] = mapg.has(ele[0]) ? mapg.get(ele[0])! :[];
        // Add the new node to edge array
        edge.push(ele[1]);
        mapg.set(ele[0],edge);
    }
    recurrtravel(mapg);
    // Travelling in each node
    // for (let ele of mapg) {
    //     // console.log("mapg ele: ", ele);
    //     var arr: number[] = ele[1]; 
    //     for (let ele2 of arr) {
    //         console.log("");
    //     }
    // }
    return true;
}

function recurrtravel(mapg: Map<number,number[]>): boolean {
    if (mapg != null) {
        for (let ele of mapg) {
            // console.log("mapg ele: ", ele);
            var arr: number[] = ele[1];
            console.log("> ele1 <");
            // loop find node in edge that match value
            for (let ele2 of arr) {
                console.log("> ele2 <");
                if ( mapg.has()) ) {
                    var arrTarget: number[] = 
                }
            }
        }
    }
    return true;
}
// function canFinish(numCourses: number, prerequisites: number[][]): boolean {
//     // Check there are at least one
//     if (prerequisites.length <= 1) {
//         return true;
//     }
//     // Init the stack array
//     var stack: number[] = [];
//     for (var ele of prerequisites[0]) {
//         stack.push(ele);
//     }
//     // Init the comparing map
//     var map: Map<number, number> = new Map<number, number>();
//     for (let i =0; i< numCourses;i++) {
//         map.set(prerequisites[1][i],i);
//     }
//     // Pop the value of the stack
//     var pivot: number = -1;
//     while(stack.length != 0 && stack != null ) {
//         var popVal = stack.pop();
//         var position = popVal ? map.get(popVal) : null;
//         // console.log("popVal: ", popVal);
//         if (position != undefined && position != null) {
//             console.log("position - pivot ", position, pivot);
//             if (position>pivot) {
//                 return false;
//             }
//             pivot = position;
//         }
//     }
//     return true;
// };
