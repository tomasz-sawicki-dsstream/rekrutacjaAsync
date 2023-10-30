async function firstAsyncWithForEach(array: number[]) {
    array.forEach(async (element) => {
        const result  = await new Promise((resolve) => {
            setTimeout(() => {
                resolve(element)
            }, Math.random() * 1000)
        })

        console.log(result)
    })
}

async function secondAsyncWithForOf(array: number[]) {
    for (const element of array) {
        const result = await new Promise((resolve) => {
            setTimeout(() => {
                resolve(element)
            }, Math.random() * 1000)
        })

        console.log(result)
    }
}

// comment out one of lines beneath
firstAsyncWithForEach([1, 2, 3, 4]) 
// secondAsyncWithForOf([1, 2, 3, 4])

