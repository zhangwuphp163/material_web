import Http from '../http';

export const sku = function(data: any) {
    return Http.post('/api/sku', data)
}

export const skuCreate = function(data: any) {
    return Http.post('/api/sku/create', data)
}

export const editById = function(id: string) {
    return Http.get('/api/sku/'+id,{})
}

export const deleteById = function(id: string) {
    return Http.delete('/api/sku/'+id,{})
}
