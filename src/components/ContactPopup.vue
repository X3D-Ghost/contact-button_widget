<script setup>

</script>

<template>
<div class="contact-widget__popup popup-feedback popup-feedback-parent">
		<slot></slot>
</div>
</template>

<style scoped>
.contact-widget__popup {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    z-index: 100;
    background-color: #fff;
    /*-webkit-box-shadow: 0 12px 30px rgba(0, 0, 0, .12);*/
    box-shadow: 0 12px 30px rgba(0, 0, 0, .12);
    border-radius: 1.5rem;
}

.style_neomorphism .contact-widget__popup {
    border-radius: 30px;
		background-color: #e6e7ee;
    //background-image: linear-gradient(145deg, #cacaca, #f0f0f0);
    box-shadow: inset 10px 10px 20px #bebebe,
    inset -10px -10px 20px #ffffff;
}

@media (min-width: 768px) {
    .contact-widget__popup {
        width: 474px;
        height: 600px;
    }
}
</style>
