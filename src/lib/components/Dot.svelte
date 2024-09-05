<style>
  .dot {
    margin-top: 5px;
    margin-right: 10px;
    float: right;
    width: 15px;
    height: 15px;
    background-color: green;
    border-radius: 50%;
    animation: pulse 1.5s infinite;
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.3);
      opacity: 0.7;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
</style>

<div class="dot"></div>
