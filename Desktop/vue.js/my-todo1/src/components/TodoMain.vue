<template>
    <div class="page">
        <header><h1>Vue Fire todo1</h1></header>
        <main>
        <div class="todos">
            <div class="write">
            <input type="text" 
            ref="writeArea"
            v-model="addItemText"
            @keyup.enter="addItem">
            <button class="btn add" @click="addItem">Add</button>
            </div>
            <ul v-for="(item, i) in todos" class="list" :key="item.text">
            <li>
                <i
                @click="checkItem(i)"
                :class="[item.state==='yet' ? `far` : `fas`, `fa-check-square`]"></i>
                <span>
                {{ item.text }}
                <b>
                    <a href="">Edit</a>
                    <a href="">Del</a>
                </b>
                </span>
            </li>
            </ul>
        </div>
        </main>
    </div>
</template>

<!-- 1. 할일 목록 리스팅 -->
<!-- 2. 할일 등록 기능 -->
<!-- 3. 체크 기능 -->
<script>
export default {
    data() {
        return {
            addItemText: '',
            todos:[
            {text: '공부하기', state: 'yet'},
            {text: '운동하기', state: 'done'},
            {text: '글쓰기', state: 'done'},
            ]
        }
    },
    methods: {
        addItem() {
            if (this.addItemText==='') return;
            this.todos.push({text: this.addItemText, state: 'yet'})
            this.addItemText ='';
        },
        checkItem(i) {
            if (this.todos[i].state==='yet') {
                this.todos[i].state='done';
            }else{
                this.todos[i].state='yet';
        }
        },
    },
    mounted() {
        this.$refs.writeArea.focus()
    }
}
</script>

<style>

</style>