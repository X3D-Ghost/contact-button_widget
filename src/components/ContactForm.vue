<script setup>
import ContactInput from "./ContactInput.vue";
import {ref} from "vue";
const props = defineProps({
	buttonText: {
        type: String,
			default: 'Отправить'
	}
})
const formData = ref({
		name: '',
		phone: '',
		message: '',
})

const resetForm = () => {
    formData.value.name = null
    formData.value.phone = null
    formData.value.message = null
}
</script>

<template>
		<div class="contact-form__wrapper">
        <form method="post" class="contact-form" novalidate="novalidate">

            <ContactInput id="contact-name" label="Ваше имя" v-model="formData.name" />
            <ContactInput id="contact-phone" label="Ваш Телефон" placeholder="+7 (___) ___-__-__" v-model="formData.phone" />

            <ContactInput id="contact-message" type="textarea" label="Ваше сообщение" v-model="formData.message" />

            <div class="checkbox js-input js-parent-input-error" data-related-checkbox=".js-text-confirmation">
                <input value="Y" type="checkbox" checked readonly>

                <label class="checkbox__label" for="callback-chx-4">
                <span class="checkbox__text">
										Я даю согласие на обработку персональных данных
								</span>
                </label>
                <div class="input__message"></div>
            </div>
            <div class="btn-wrap">
                <button class="cw-button" id="callback-submit" type="submit">
										{{ buttonText }}
								</button>
            </div>
        </form>
		</div>
</template>

<style scoped>
.contact-form__wrapper {
    padding: 1rem;
		overflow-y: auto;
}
</style>
