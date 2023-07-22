<script setup>
import {ref} from "vue";

defineProps({
		tabs: Array,
		showTabs: {
				type: Boolean,
				default: true,
		}
})
const activeTab = ref(0)
</script>

<template>
<div class="contact-widget__tabs-wrapper">
		<div v-if="showTabs" class="contact-widget__tabs">
        <button
								v-for="(tab, i) in tabs"
								class="contact-widget__tab"
								:class="{'is-active': activeTab === i}"
								@click="activeTab = i"
				>
						{{tab}}
				</button>
		</div>
		<div class="contact-widget__tab-content-wrapper">
				<div
								v-for="(tab, i) in tabs"
								class="contact-widget__tab-content"
								:class="{'is-active': activeTab === i}"
				>
						<slot :name="`content-${i}`"></slot>
				</div>
		</div>
</div>
</template>

<style scoped>
.contact-widget__tabs-wrapper {
		height: 100%;
		display: flex;
		flex-direction: column;
}
.contact-widget__tabs {
    display: flex;
    justify-content: center;
}

.style_neomorphism .contact-widget__tabs {
		//margin-bottom: 1rem;
		padding: 0.5rem;
}
.contact-widget__tab {
    padding: 10px 30px;
    font-weight: 600;
    font-size: 18px;
    width: 100%;
    border: none;
    border-radius: 0;
    outline: none;
    cursor: pointer;
    transition: background-color 0.25s ease;
}
.contact-widget__tab-content-wrapper {
		height: 100%;
    position: relative;
}
.style_neomorphism .contact-widget__tab-content-wrapper {
		margin: 1rem;
}
.contact-widget__tab-content {
    padding: 1rem 0;
    opacity: 0;
		transition: opacity 0.5s ease;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
}
.contact-widget__tab-content.is-active {
    opacity: 1;
		z-index: 1;
}
@media (max-width: 768px) {
    .contact-widget__tab {
        padding: 10px 6px;
        flex-grow: 1;
        font-size: 15px;
        justify-content: center
    }
}
.contact-widget__tab.is-active {
    /*line-height: 36px;*/
    color: var(--cw-primary-color);
    background-color: #f0f0f2;
}
.style_neomorphism .contact-widget__tab{
		color: #31344b;
		border-radius: 1rem;
    //background: #e0e0e0;
    background: transparent;
    box-shadow: 3px 3px 9px #bebebe,
    -3px -3px 9px #ffffff;
    margin: 0 0.5rem;
		padding: 10px;
		transition: box-shadow 0.5s ease;
}
.style_neomorphism .contact-widget__tab.is-active{
    box-shadow: inset 3px 3px 12px #bebebe,
    inset -4px -4px 12px #ffffff;
}
.style_neomorphism .contact-widget__tab-content {
    border-radius: 1rem;
    /*background: #e0e0e0;*/
    box-shadow: inset 4px 4px 9px #bebebe,
    inset -5px -5px 9px #ffffff;
}
</style>
