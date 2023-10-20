<template>
    <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item title="原始组件" name="0">
            <div class="component-list" @dragstart="handleDragStart">
                <div
                    v-for="(item, index) in componentList"
                    :key="index"
                    class="list"
                    draggable
                    :data-index="index"
                    :data-type="item.type"
                >
                    <span v-if="item.icon.substr(0,2) === 'el'" :class="item.icon"></span>
                    <span v-else class="iconfont" :class="'icon-' + item.icon"></span>
                    {{ item.label }}
                </div>
            </div>
        </el-collapse-item>
        <el-collapse-item title="数据导入" name="1">
            <div class="component-list" @dragstart="handleDragStart">
                <div
                    v-for="(item, index) in componentDataImport"
                    :key="index"
                    class="list"
                    draggable
                    :data-index="index"
                    :data-type="item.type"
                >
                    <span v-if="item.icon.substr(0,2) === 'el'" :class="item.icon"></span>
                    <span v-else class="iconfont" :class="'icon-' + item.icon"></span>
                    {{ item.label }}
                </div>
            </div>
        </el-collapse-item>
        <el-collapse-item title="数据预处理" name="2">
            <div class="component-list" @dragstart="handleDragStart">
                <div
                    v-for="(item, index) in componentPreProcessing"
                    :key="index"
                    class="list"
                    draggable
                    :data-index="index"
                    :data-type="item.type"
                >
                    <span v-if="item.icon.substr(0,2) === 'el'" :class="item.icon"></span>
                    <span v-else class="iconfont" :class="'icon-' + item.icon"></span>
                    {{ item.label }}
                </div>
            </div>
        </el-collapse-item>
        <el-collapse-item title="特征工程" name="3">
            <div class="component-list" @dragstart="handleDragStart">
                <div
                    v-for="(item, index) in componentFeatureEngineer"
                    :key="index"
                    class="list"
                    draggable
                    :data-index="index"
                    :data-type="item.type"
                >
                    <span v-if="item.icon.substr(0,2) === 'el'" :class="item.icon"></span>
                    <span v-else class="iconfont" :class="'icon-' + item.icon"></span>
                    {{ item.label }}
                </div>
            </div>
        </el-collapse-item>
        <el-collapse-item title="模型选择" name="4">
            <div class="component-list" @dragstart="handleDragStart">
                <div
                    v-for="(item, index) in componentModelSelection"
                    :key="index"
                    class="list"
                    draggable
                    :data-index="index"
                    :data-type="item.type"
                >
                    <span v-if="item.icon.substr(0,2) === 'el'" :class="item.icon"></span>
                    <span v-else class="iconfont" :class="'icon-' + item.icon"></span>
                    {{ item.label }}
                </div>
            </div>
        </el-collapse-item>
        <el-collapse-item title="模型评估" name="5">
            <div class="component-list" @dragstart="handleDragStart">
                <div
                    v-for="(item, index) in componentModelEvaluation"
                    :key="index"
                    class="list"
                    draggable
                    :data-index="index"
                    :data-type="item.type"
                >
                    <span v-if="item.icon.substr(0,2) === 'el'" :class="item.icon"></span>
                    <span v-else class="iconfont" :class="'icon-' + item.icon"></span>
                    {{ item.label }}
                </div>
            </div>
        </el-collapse-item>
    </el-collapse>
</template>

<script>
import componentList from '@/custom-component/component-list'
import componentSvg from '@/custom-component/component-svg'
import componentDataImport from '@/custom-component/component-DataImport'
import componentPreProcessing from '@/custom-component/component-PreProcessing'
import componentFeatureEngineer from '@/custom-component/component-FeatureEngineer'
import componentModelSelection from '@/custom-component/component-ModelSelection'
import componentModelEvaluation from '@/custom-component/component-ModelEvaluation'

export default {
    data() {
        return {
            activeNames: '1',
            componentList,
            componentSvg,
            componentDataImport,
            componentPreProcessing,
            componentFeatureEngineer,
            componentModelSelection,
            componentModelEvaluation,
        }
    },
    methods: {
        handleDragStart(e) {
            const dataIndex = e.target.dataset.index
            const dataType = e.target.dataset.type // 获取组件的类型
            const data = {
                index: dataIndex,
                type: dataType, // 添加类型信息
            }
            e.dataTransfer.setData('dragData', JSON.stringify(data))
        },
        handleChange(val) {
            console.log(val)
        },
    },
}
</script>

<style lang="scss" scoped>
.component-list {
    height: 65%;
    padding: 5px;
    display: grid;
    grid-gap: 10px 19px;
    grid-template-columns: repeat(auto-fill, 80px);
    grid-template-rows: repeat(auto-fill, 40px);

    .list {
        width: 80px;
        height: 40px;
        border: 1px solid #ddd;
        cursor: grab;
        text-align: center;
        color: #333;
        padding: 2px 5px;
        display: flex;
        align-items: center;
        justify-content: center;

        &:active {
            cursor: grabbing;
        }

        .iconfont {
            margin-right: 4px;
            font-size: 20px;
        }

        .icon-wenben,
        .icon-biaoge {
            font-size: 18px;
        }

        .icon-tupian {
            font-size: 16px;
        }
    }
}
</style>
