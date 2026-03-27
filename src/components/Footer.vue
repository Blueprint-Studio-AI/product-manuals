<template>
  <footer class="footer">
    <span>Copyright © 2025 IDScanner.com by TokenWorks</span>
  </footer>
</template>

<style lang="scss">
.footer {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 16px 40px;
  background: var(--c-frost);
  border-top: 0.6px solid rgba(0, 0, 0, 0.08);
  font-size: 12px;
  color: var(--c-gray600);

  // Full viewport width breakout
  position: relative;
  left: 50%;
  width: 100vw;
  margin-left: -50vw;
  z-index: 51;

  @media (max-width: 1000px) {
    padding: 16px 1rem;
  }
}
</style>
