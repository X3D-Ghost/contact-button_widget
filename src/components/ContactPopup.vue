<script setup>
import {onMounted, ref} from "vue";

const header = ref()

onMounted(() => {

    dragElement(document.getElementById("cw-popup"));

    function dragElement(elmnt) {
        let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        if (document.getElementById('cw-popup__header')) {
            // if present, the header is where you move the DIV from:
            document.getElementById('cw-popup__header').onmousedown = dragMouseDown;
            // header.onmousedown = dragMouseDown;
        } else {
            // otherwise, move the DIV from anywhere inside the DIV:
            elmnt.onmousedown = dragMouseDown;
        }

        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            // get the mouse cursor position at startup:
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            // call a function whenever the cursor moves:
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            // calculate the new cursor position:
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            // set the element's new position:
            elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
            elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        }

        function closeDragElement() {
            // stop moving when mouse button is released:
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }
})
</script>

<template>
<div id="cw-popup" class="contact-widget__popup popup-feedback popup-feedback-parent">
		<div :id="'cw-popup__header'" class="contact-widget__popup-header" :ref="header" draggable="true">
        <slot name="header" ></slot>
    </div>
		<slot></slot>
    <slot name="footer"></slot>
</div>
</template>

<style scoped>
.contact-widget__popup {
		position: fixed;

    right: 50px;
    bottom: 100px;

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
		background-color: #e6e6e6;
		/*background-color: #e6e7ee;*/
    /*background-image: linear-gradient(145deg, #cacaca, #f0f0f0);*/
    box-shadow: inset 6px 6px 8px #bebebe,
    inset -8px -8px 8px #ffffff;
}

@media (min-width: 768px) {
    .contact-widget__popup {
        width: 400px;
        height: 600px;
    }
}

.contact-widget__popup-header {
		cursor: move;
}
</style>
