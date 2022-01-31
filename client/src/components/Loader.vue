<template>
    <div class="lds-dual-ring"></div>
</template>

<style>
.lds-dual-ring {
  position: absolute;
  top: 50vh;
  left: 50vw;
  width: 80px;
  height: 80px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #a2e9ac;
  border-color: #a2e9ac transparent #a2e9ac transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>