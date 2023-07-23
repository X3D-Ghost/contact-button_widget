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
				<slot name="default" class="contact-link__icon">
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
		display: inline-flex;
		width: 100%;
		text-align: left;
		align-items: center;
		padding: 0.5rem 0;
    cursor: pointer;
}
.contact-link__text {
		padding-left: 0.75rem;
		color: #31344b;
}

.contact-link:hover .contact-link__text {
    color: var(--cw-primary-color);
		filter: drop-shadow(0 0 1px grey);
}
.contact-link:hover .contact-link__icon {
		background-color: #31344b;
}
</style>
