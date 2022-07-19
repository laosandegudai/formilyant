# Formily

## DicSelect 自定义异步组件

内部有一个网络请求，此请求无论是否`useRequest`均不影响正常请求（不会触发多次请求）

## formily/components/ModalForm

此组件为表单载体，内部通过网络请求获取表单数据，此网络请求在`useRequest`下会导致`DicSelect`加载异常（触发多次网络请求），使用reqeust则正常加载。
