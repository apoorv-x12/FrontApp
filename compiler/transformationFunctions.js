let currentFunction=null

export function $s(v){
    let value=v
    const subscribers= new Set()

    return {

    get: ()=>{
        if(currentFunction){
            subscribers.add(currentFunction)
        }

        return value
    },
    set:(v)=>{
        value=v
        subscribers.forEach(fn=>fn())
    },
    subscribe:(fn)=>{
          subscribers.add(fn)
          return ()=>subscribers.delete(fn)
    }
    }
}

export function $e(fn){
    currentFunction=fn
    fn();
    currentFunction=null
}

export function $d(fn){
    const value=$s(fn())
    
    $e(()=>{
        value.set(fn())
    })

    return{
        get:()=>{
            return value.get()
        },
    }

}