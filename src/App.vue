<script setup>
    import { ref, reactive, toRefs, toRef } from 'vue'

    defineProps({
    });

    const form = ref(
        {
                userName: '',
                password: '',
                passwordConfirm: '',
        });


</script>

<template>


    <el-dialog width="85%" v-model="loginVisible" title="User Form" center >

        <el-form :model="form">
            <el-form-item label="Mail">
                <el-input v-model="form.userName"></el-input>
            </el-form-item>

            <el-form-item label="Password">
                <el-input v-model="form.password" show-password></el-input>
            </el-form-item>
        </el-form>

    </el-dialog>


</template>


<script>
    
    export default {
        setup() {
        },
        data() {
            return {
                loginVisible: false,
            }
        },
        mounted() {
        },
        computed: {
        },
        methods: {
            showLoginApp() {
                this.loginVisible = true;
            },
            showLoginAppDisable() {
                this.loginVisible = false;
            },
        }
    }
</script>

