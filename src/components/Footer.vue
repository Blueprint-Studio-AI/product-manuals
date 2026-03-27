<template>
  <footer class="footer">
    <div class="footer-content">
      <span>Copyright © 2025 IDScanner.com by TokenWorks</span>
    </div>
  </footer>
</template>

<style lang="scss">
.footer {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 100px;

  @media (max-width: 1000px) {
    padding: 0 1rem;
  }
}

.footer-content {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 24px 0;
  border-top: 1px solid var(--c-gray200);
  font-size: 12px;
  color: var(--c-gray600);
}
</style>
