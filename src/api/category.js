import service from "@/plugins/service";

// 获取全部分类
export function getAllCategory(){
    return service({
        method: 'get',
        url: '/category'
    })
}

// 根据分类id获取该所有的文章
export function getCategoryById(id){
    return service({
        method: 'post',
        url: `/category/${id}`
    })
}