/* eslint-disable */
<template>
    <div class="max-w-sm m-auto my-8">
        <div class="border p-10 border-grey-light shadow rounded">
            <h3 class="text-2xl mb-6 text-grey-darkest">Withdraw</h3>
            <form @submit.prevent="withdraw">
                <div class="text-red" v-if="error">{{ error }}</div>

                <div class="mb-6">
                    
                    <label for="id" class="label">Id</label>
                    <input type="id" v-model="id" class="input" id="id" placeholder="ex: 1">
                    
                    <label for="amount" class="label">Amount</label>
                    <input type="amount" v-model="amount" class="input" amount="amount" placeholder="ex: 10.00">

                    <button type="submit" class="font-sans font-bold px-4 rounded cursor-pointer no-underline bg-green 
                    hover:bg-green-dark block w-full py-4 text-white items-center justify-center">Withdraw</button>

                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Withdraw',
    data () {
        return {
            id: '',
            amount: '',
            error: ''
        }
    },

    methods: {
        withdraw () {
            let id_user = parseInt(this.id)
            const url = `/accounts/${id_user}/withdraw`
            this.$http.plain.post(url, { amount: parseInt(this.amount) })
                .then(response => this.withdrawSucessful(response))
                .catch(error => this.withdrawFailed(error))
        },
        withdrawSucessful () {
            if(!response.data.csrf) {
                this.withdrawFailed(response)
                return
            }

            localStorage.csrf = response.data.csrf
            this.error = ''
            this.$router.replace('/home')
        },
        withdrawFailed (error) {
            this.error = (error.response && error.response.data && error.response.data.error) || ''
            delete localStorage.csrf
            
        }
    }

}
</script>


