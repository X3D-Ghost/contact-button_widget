import {createApp} from 'vue'
import './style.css'
// import App from './App.vue'
import ContactWidget from "./components/ContactWidget.vue";

const widgetParams = {
    rootContainer: '#app',
    socials: [
        {
            url: 'https://vk.com/',
            title: 'Вконтакте',
            type: 'vk'
        },
        {
            url: 'https://ok.ru/',
            title: 'Одноклассники',
            type: 'ok'
        },
        {
            url: 'https://dzen.ru/',
            title: 'Дзен',
            type: 'dzen'
        },
        {
            url: 'https://www.youtube.com/',
            title: 'Youtube',
            type: 'yt'
        },
    ],
    widgetType: 'popup',
    needTabs: true,
}

// const contactWidgetComponent = defineCustomElement(ContactWidget)

export function contactWidgetInit(params) {
    const widgetApp = createApp(ContactWidget, widgetParams).mount(params.rootContainer)
}

const contactWidgetPlugin = {
    install: (app, options) => {
        console.log('contactWidgetPlugin')
        /* declare global component */
        // app.component("contact-widget", {...ContactWidget, ...options});
        app.component("contact-widget", ContactWidget, options);

        const pluginWrapper = document.createElement("div")
        app.mount(pluginWrapper)
        document.body.appendChild(pluginWrapper)

        const widgetApp = createApp(ContactWidget, options).mount(options.rootContainer || pluginWrapper)

    },
};

window.contactWidgetPlugin = contactWidgetPlugin

export default contactWidgetPlugin

export { contactWidgetPlugin, ContactWidget }

// register
// customElements.define('contactWidgetComponent', contactWidgetComponent)

// document.body.appendChild(
//     new contactWidgetComponent({
//         // initial props (optional)
//         props: widgetParams
//     })
// )
// contactWidgetInit(widgetParams)
