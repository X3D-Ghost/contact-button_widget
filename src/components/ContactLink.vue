<script setup>
import ContactIcon from "./ContactIcon.vue";

defineProps({
		label: String,
		href: String,
    type: String
})
</script>

<template>
    <a :href="href" target="_blank" class="feedback-type contact-link" :title="label">
				<slot name="before-icon" />
				<slot name="default">
						<ContactIcon :icon="type" />
				</slot>
        <slot name="after-icon" />
				<span class="contact-link__text">{{ label }}</span>
    </a>
</template>

<style scoped>
.contact-link {
		color: var(--cw-primary-color);
    text-decoration: none;
}
.contact-link__text {
		color: #31344b;
}
</style>
