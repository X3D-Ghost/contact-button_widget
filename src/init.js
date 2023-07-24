import {createApp} from 'vue'

// window.vue = window.Vue;
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
                url: 'https://tg.ru/',
                title: 'Telegram',
                type: 'tg'
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

    const app = createApp({})

    app.mount(widgetParams.rootContainer)
    app.use(contactWidgetPlugin, widgetParams )
