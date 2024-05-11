<script setup>

const props = defineProps(["meal"])

</script>



<template>

    <div class="common-layout">
        <el-container>
            <el-header>Header</el-header>
            <el-main>
                <el-row :gutter="20">
                    <el-col :span="8">
                        <div class="grid-content ep-bg-purple" />
                    </el-col>
                    <el-col :span="16">
                        <div class="grid-content ep-bg-purple" />
                    </el-col>
                </el-row>
            </el-main>
            <el-footer>Footer</el-footer>
        </el-container>
    </div>

</template>

<style scoped>
.el-row {
    margin-bottom: 20px;
}

.el-row:last-child {
    margin-bottom: 0;
}

.el-col {
    border-radius: 4px;
}

.grid-content {
    border-radius: 4px;
    min-height: 36px;
}
</style>