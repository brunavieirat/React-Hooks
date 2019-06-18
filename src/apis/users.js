import protocolo from './configuracao'

export function getUsers() {
 return protocolo.get()   
}

export function getIdUser(id) {
    const url=`/${id}`
    return protocolo.get(url)
}

export function paginator(start, end){
    const url = `?_start=${start}&_end=${end}`
    return protocolo.get(url)
}

export function ordenar(filtro, start, limit){
    const url = `?_sort=${filtro}&_order=asc&_start=${start}&_limit=${limit}`
    console.log(url)
    return protocolo.get(url)
}