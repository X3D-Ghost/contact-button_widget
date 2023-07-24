<script setup>

import {ref} from "vue";
import ContactLink from "./ContactLink.vue";
import ContactTabs from "./ContactTabs.vue";
import ContactPopup from "./ContactPopup.vue";
import ContactForm from "./ContactForm.vue";

const isOpen = ref(false)

const activeTab = ref(1)

const props = defineProps({
    socials: Array,
    widgetType: String,
    widgetStyle: {
        // type: String,
        default: 'neomorphism'
    },
    needTabs: Boolean,
})

const component = props.widgetType === 'popup' && ContactPopup

const tabs = [
    'Написать',
    'Позвонить',
    'Соц сети',
]

const formShow = ref(null)
</script>

<template>
    <div class="contact-widget" :class="`style_${widgetStyle}`">
        <button class="contact-button" v-show="!isOpen" @click="isOpen = !isOpen">
            <slot name="button_content">
                <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M22 3.25596C22 1.46296 20.548 0 18.744 0H3.25596C1.46296 0 0 1.45196 0 3.25596V12.7551C0 14.5481 1.45196 16.011 3.25596 16.011H17.6L21.1099 20.3896C21.4053 20.7582 22 20.5492 22 20.0768V3.25596ZM3.96973 6C3.96973 5.44772 4.41744 5 4.96973 5H16.9697C17.522 5 17.9697 5.44772 17.9697 6C17.9697 6.55228 17.522 7 16.9697 7H4.96973C4.41744 7 3.96973 6.55228 3.96973 6ZM4.96973 9C4.41744 9 3.96973 9.44771 3.96973 10C3.96973 10.5523 4.41744 11 4.96973 11H12.9697C13.522 11 13.9697 10.5523 13.9697 10C13.9697 9.44771 13.522 9 12.9697 9H4.96973Z" fill="white"></path>
                </svg>
            </slot>
        </button>
        <component :is="component" v-show="isOpen">
            <template #header>
                <div class="contact-widget__header">
                    <slot name="header">
                        Связь с нами
                    </slot>
                </div>
            </template>
            <div class="contact-widget__body main-block main-block--policies js-main-policies">
                <contact-tabs v-show="!formShow" :tabs="tabs">
                    <template #content-0>
                        <ContactLink label="Задать вопрос" type="ask" @click="formShow = 'call'" />
                    </template>
                    <template #content-1>
                        <ContactLink href="tel:88003330999" label="Позвонить" type="call" />
                        <ContactLink label="Заказать обратный звонок" type="call-request" @click="formShow = 'message'" />
                    </template>
                    <template #content-2 v-if="socials">
                        <ContactLink v-for="item in socials" :href="item.url" :label="item.title" :type="item.type">
                            <slot :name="`social-${item.type}`" />
                        </ContactLink>
                    </template>
                </contact-tabs>
                <ContactForm v-if="formShow === 'call'" class="contact-widget__form" />
                <ContactForm v-if="formShow === 'message'" class="contact-widget__form" />
            </div>
            <template #footer>
                <div class="contact-widget__footer">
                    <slot name="footer">
                        Сделано разработчиком
                    </slot>
                </div>
            </template>
            <button class="popup__close close-feedback contact-widget__button_close" @click="isOpen = false">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <path d="M2 1L1 2l21 21 1-1L2 1z"></path>
                    <path d="M1 22l1 1L23 2l-1-1L1 22z"></path>
                </svg>
            </button>
        </component>
    </div>
</template>

<style scoped>
.contact-widget {
    position: fixed;
    right: 0;
    bottom: 0;
}
@media (min-width: 768px) {
    .contact-widget {
        right: 50px;
        bottom: 100px;
    }
}
.contact-widget__button_close {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    width: 2rem;
    height: 2rem;
    padding: 0;
    border: none;
    background-color: transparent;
    margin: 0;
    cursor: pointer;
}
.style_neomorphism .contact-widget__button_close{
    top: 0.5rem;
    right: 0.5rem;
    border-radius: 50%;
    width: 3.75rem;
    height: 3.75rem;
    padding: 1.25rem;
    //background: #e0e0e0;
    box-shadow: 4px 4px 9px #bebebe,
    -5px -5px 9px #ffffff;
}
.style_neomorphism .contact-widget__button_close:hover {
    box-shadow: inset 5px 5px 8px #bebebe,
    inset -5px -5px 8px #ffffff;
}
.contact-widget__button_close svg {
    fill: var(--cw-primary-color);
}
.style_neomorphism .contact-widget__button_close svg{
    stroke-width: 4px;
    filter: drop-shadow(3px 3px 5px grey);
}

.contact-widget__form {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>
