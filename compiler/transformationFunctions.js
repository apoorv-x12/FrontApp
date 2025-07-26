let currentFunction=null

function $s(v){
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

function $e(fn){
    currentFunction=fn
    fn();
    currentFunction=null
}

function $d(fn){
    const value=$s(fn())
    
    $e(()=>{
        value.set(fn())
    })

    return{
        get:()=>value.get(),
    }

}