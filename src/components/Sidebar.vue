<template>
    <div>
        <!-- 个人小卡片 -->
        <Person/>
        <!-- 分类 -->
        <Category/>
        <!-- 标签 -->
        <Tag/>
    </div>
</template>

<script>
import Person from './Person.vue';
import Category from './Category.vue';
import Tag from './Tag.vue';
export default {
    components: { Person, Category, Tag }
}
</script>

<style lang="less" scoped>

</style>