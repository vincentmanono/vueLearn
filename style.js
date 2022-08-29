let app = Vue.createApp({
        data: function() {
            return {
                name: 'Vincent Manono',
                isVisible: true,
            }
        },
        methods: {
            toggleFunction() {
                this.isVisible = !this.isVisible
            },
            greet() {
                console.log(this.name)
            }
        }
    })
    //parent component
app.component('login-form', {
        template: `    
    <div>   
        <label>{{title}}</label>
        <form @submit.prevent="submitForm">
            <custom-input v-for="(input,i) in inputs"
             :key="i" 
             v-model="input.value" 
             v-bind:label="input.label"
             :type="input.type"
             /> 
            <button>Send</button>
        </form> 
    </div>
    `,
        data() {
            return {
                title: "Login Form",
                inputs: [{
                        type: 'email',
                        label: 'Email',
                        value: ''
                    },
                    {
                        type: 'password',
                        label: 'Password',
                        value: ''
                    }
                ]
            }
        },
        methods: {
            submitForm() {
                console.log(this.inputs[0].value, this.inputs[1].value)
            }
        }
    })
    //child componet
app.component('custom-input', {
    template: `
    
    <label>
    {{label}}
    <input :type="type" v-model="inputValue" />
    </label> 
    `,
    props: ['label', 'type', 'modelValue'],
    computed: {
        inputValue: {
            get() {
                return this.modelValue
            },
            set(value) {
                this.$emit('update:modelValue', value)
            }
        }
    }
})
app.mount('#app')