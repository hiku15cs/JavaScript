// 1:-Rotate the given array at a given index.
// 	const arr = [1,2,3,4,5,6]
// 	const index = 3
// 	const output = [4,5,6,1,2,3]

const arr = [1, 2, 3, 4, 5, 6];
const index = 3;
// document.getElementById("index");


for (let i=0;i<index;i++)
{
    let temp=arr[0];
    for(let j=0;j<arr.length-1;j++)
    {
        arr[j]=arr[j+1];
    }
    arr[arr.length-1]=temp;
}
console.log({arr});
document.getElementById("rotatedArray").innerHTML=arr;