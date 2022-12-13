// 1

// let array = [17,3,19,45,89,55]

// let randomNumber = Math.round(Math.random() * array.length)
    
// const element = array[randomNumber];

// 2

// let even = []
// let odd = []

// for (let index = 0; index < 20; index++) {
//     let input = Number(prompt("please enter Any Number"))

//     if(input % 2 == 0)
//     {
//         even.push(input)
//     }
//     else
//     {
//         odd.push(input)
//     }
// }


// 20 58 81


// function SortArrayByDecreasing(array)
// {
//     for (let i = 0; i < array.length; i++) {
//         let save = array[i]
//         // console.log(save)
//         if(array[i] < array[i + 1])
//         {
//             array[i] = array[i + 1]
//             array[i + 1] = save 

//             i = -1
//         }
        
//     }
// }


// SortArrayByDecreasing(odd)
// SortArrayByDecreasing(even)


// console.log(odd)
// console.log(even)

// console.log(even)
// console.log(odd)

//3

let array = []

function GenerateAndPushRandomNumsInArray(number,array)
{
    for (let index = 0; index < number; index++) {
        let RandomNumber = Math.round(Math.random() * 50)

        array.push(RandomNumber)
    }

    return array
}

function IDK(array)
{
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        let counter = 1

        for (let i = 0; i < 10; i++) {
            if (element % i == 0)
            {
                counter++;
            }
            
        }
        
        console.log(`${element} ის გამყოფების რაოდენობაა ${counter}`)
    }
}

GenerateAndPushRandomNumsInArray(10,array)
IDK(array)

// 4

// for (let i = 0; i < 11; i++) {
//     for (let j = 0; j < 11; j++) {
//         console.log(`${i} * ${j} = ${i * j}`)
//     }
// }


// 5

// let array = [45,5,14,55]

// let min = array[0]

// function GetArraysSmallestElement(array)
// {
//     for (let index = 0; index < array.length; index++) {
//         const element = array[index];

//         if(min > array[index])
//         {
//             min = array[index]
//         }
        
//     }

//     return min
// }

// console.log(GetArraysSmallestElement(array))

// 6

// function CreatePerson(name,lastname,mail,age)
// {
//     return {
//         name: name,
//         lastname: lastname,
//         mail:mail,
//         age:age
//     }
// }

// console.log("ALeksandre","Tsetskhladze","idk@gmail.com",5)

// 7

// let Confirmation = confirm("Answer :(")

// if(Confirmation)
// {
//     console.log("true")
// }
// else
// {
//     console.log("false")
// }

