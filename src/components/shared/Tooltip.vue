<template>
  <div class="tooltip">
    <slot name="tooltip-title"></slot>
    <div class="tooltiptext">
      <slot name="tooltip-content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tooltip",
};
</script>

<style scoped>
.tooltip {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 350px;
  background-color: #272727;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 10px;
  position: absolute;
  z-index: 1;
  top: 110%;
  left: -130%;
}

.tooltip .tooltiptext::after {
  content: "";
  position: absolute;
  bottom: 100%;
  left: 80%;
  margin-left: -5px;
  border-width: 10px;
  border-style: solid;
  border-color: transparent transparent #272727 transparent;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}
</style>
