/**
 * Created by Administrator on 2017/6/1.
 */
Vue.component('currency-input', {
    template: '\
			<span>\
			  $\
			  <input\
			    ref="input"\
			    v-bind:value="value"\
			    v-on:input="updateValue($event.target.value)"\
			  >\
			</span>\
			',
    props: ['value'],
    methods: {
        // 不是直接更新值，而是使用此方法来对输入值进行格式化和位数限制
        updateValue: function (value) {
            var formattedValue = value
            // 删除两侧的空格符
                .trim()
                // 保留 2 小数位
                .slice(0, value.indexOf('.') + 3)
            // 如果值不统一，手动覆盖以保持一致
            if (formattedValue !== value) {
                this.$refs.input.value = formattedValue
            }
            // 通过 input 事件发出数值
            this.$emit('input', Number(formattedValue))
        //    $emit触发当前实例上的事件。附加参数都会传给监听器回调。
        }
    }
})
new Vue({
    el:'#form',
    data: {
        price: 0
    }
})