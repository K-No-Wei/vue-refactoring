import service from "@/plugins/service";

// 获取全部标签
export function getAllTag(){
    return service({
        method: 'get',
        url: '/tag'
    })
}

// 获取id下的文章
export function getArticlesById(id){
    return service({
        method: 'post',
        url: `/tag/${id}`
    })
}