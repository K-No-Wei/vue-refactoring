import service from "@/plugins/service";

// 获取首页全部文章？分页
export function getAtricleList(id){
    return service({
        method: 'get',
        url: `/article?id=${id}`
    })
}