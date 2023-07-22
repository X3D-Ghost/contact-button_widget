<script setup>
 const props = defineProps({
		 label: String,
		 caption: String,
		 type: String,
		 id: String,
 })
</script>

<template>
<div class="contact-input__wrapper">
    <label :for="id" class="contact-input__label">{{ label }}</label>
    <input v-bind="$attrs" v-if="type !== 'textarea'" :id="id" :type="type" class="contact-input" />
    <textarea
						v-bind="$attrs" v-if="type === 'textarea'"
						name=""
            :id="id"
						cols="30"
						rows="5"
						class="contact-input contact-input_textarea">
		</textarea>
		<span class="contact-input__caption">{{caption}}</span>
</div>
</template>

<style scoped>
.contact-input__wrapper {
		margin-bottom: 1rem;
}
.contact-input__wrapper:has(.contact-input:focus) .contact-input__label {
		color: var(--cw-primary-color);
}
.contact-input__label {
    color: grey;
		display: block;
		text-align: left;
		padding-left: 0.75rem;
		padding-bottom: 0.5rem;
}
.contact-input {
		display: block;
		width: 100%;
		padding: 1rem;
		color: grey;
		font-size: 1.125rem;
}
.contact-input_textarea {}
.contact-input__caption {}
.style_neomorphism .contact-input__wrapper {

}

.style_neomorphism .contact-input {
		border-width: 0;
		border-radius: 20px;
		background-color: transparent;
    box-shadow: inset 4px 4px 9px #bebebe,
    inset -5px -5px 9px #ffffff;
		padding-left: 1.5rem;
}

.style_neomorphism .contact-input:focus {
    box-shadow: inset 8px 8px 9px #bebebe,
    inset -8px -8px 9px #ffffff;
		outline: none;
}
</style>
