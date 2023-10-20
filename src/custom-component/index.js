import Vue from 'vue'

const components = [
    'CircleShape',
    'Picture',
    'VText',
    'VButton',
    'Group',
    'RectShape',
    'LineShape',
    'VTable',
    'VChart',
    'CSVfileLoad',
]

components.forEach(key => {
    Vue.component(key, () => import(`@/custom-component/OldComponent/${key}/Component`))
    Vue.component(key + 'Attr', () => import(`@/custom-component/OldComponent/${key}/Attr`))
})

const svgs = [
    'SVGStar',
    'SVGTriangle',
]

svgs.forEach(key => {
    Vue.component(key, () => import(`@/custom-component/OldComponent/svgs/${key}/Component`))
    Vue.component(key + 'Attr', () => import(`@/custom-component/OldComponent/svgs/${key}/Attr`))
})

const DataImport = [
    'CSVfileLoad',
    'ExcelFileLoad',
]

DataImport.forEach(key => {
    Vue.component(key, () => import(`@/custom-component/DataImport/${key}/Component`))
    Vue.component(key + 'Attr', () => import(`@/custom-component/DataImport/${key}/Attr`))
})

const PreProcessing = [
    'MissingValueProcessing',
]

PreProcessing.forEach(key => {
    Vue.component(key, () => import(`@/custom-component/PreProcessing/${key}/Component`))
    Vue.component(key + 'Attr', () => import(`@/custom-component/PreProcessing/${key}/Attr`))
})

const FeatureEngineer = [
    'Normalization',
]

FeatureEngineer.forEach(key => {
    Vue.component(key, () => import(`@/custom-component/FeatureEngineer/${key}/Component`))
    Vue.component(key + 'Attr', () => import(`@/custom-component/FeatureEngineer/${key}/Attr`))
})

const ModelSelection = [
    'RandomForest',
]

ModelSelection.forEach(key => {
    Vue.component(key, () => import(`@/custom-component/ModelSelection/${key}/Component`))
    Vue.component(key + 'Attr', () => import(`@/custom-component/ModelSelection/${key}/Attr`))
})

const ModelEvaluation = [
    'Accuracy',
]

ModelEvaluation.forEach(key => {
    Vue.component(key, () => import(`@/custom-component/ModelEvaluation/${key}/Component`))
    Vue.component(key + 'Attr', () => import(`@/custom-component/ModelEvaluation/${key}/Attr`))
})