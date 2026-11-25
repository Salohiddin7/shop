export function errorHandler (error: any, type?: string) {
    
    let text = ''
    
    if(type == 'login') {
        text = error.data.detail
    }else {
        for(let key in error.data) {
            error.data[key].forEach((value: string) => {
                text += value
            })
        }
    }
    
    return text
}



