import service from "@/plugins/service";

export function getArticleBody(id){
    return service({
        method: 'post',
        url: `/article/${id}`
    })
}