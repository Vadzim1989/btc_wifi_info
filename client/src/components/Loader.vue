<template>
    <div class="lds-dual-ring"></div>
</template>

<style>
.lds-dual-ring {
  position: absolute;
  top: 30vh;
  left: 50.5vw;
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
  border: 6px solid #a2b3e9;
  border-color: #a2b5e9 transparent #a2b3e9 transparent;
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