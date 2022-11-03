let test1 = [1, 2, 3];
let test2 = [0, 1];

/*
numlength = 3
    1,2,3
ci   *       

cI = 0
i = 0
tempL = []
list = [[]]
tempL for next call [1]

cI = 1
i = 1
tempL = [1]
list = [[], [1]]
tempL for next call [[], [2]]

cI = 2
i = 2
tempL = [2] 
list = [[], [1], [2]]  list will always add prev tempL 
tempL for next call [[], [1], [2]]

cI = 3
i = 3 BUT i < nums.length is false so loop is terminated
remove this call from stack frame


[] initial push of templist is empty
[1] first iteration of for loop 
[2] 
[1,2]
[3]
[1,3]
[2,3]
[1,2,3]


*/

function calcSubset(nums) {
	let lists = [];
	function subsetBuilder(currentIndex, tempList) {
		lists.push([...tempList]);
		for (let i = currentIndex; i < nums.length; i++) {
			tempList.push(nums[i]);
			subsetBuilder(i + 1, tempList); //why increment i, not CI
			tempList.pop();
		}
	}
	subsetBuilder(0, []);
	return lists;
}

console.log(calcSubset(test1));
