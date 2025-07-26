function $s(initialValue){
    let value=initialValue
    const subscribers=[]

    return {

    get: ()=>value,
    set:(v)=>{
        value=v
        subscribers.forEach(fn=>fn())
    },
    subscribe:(fn)=>{
          subscribers.push(fn)
    }
    }
}

const $d=(fn)=>({
    get:() => fn(),
})


const $e=(fn)=>({
    get:() =>fn(),
})