<script setup lang="ts">
import ContentSection from '@/components/ContentSection.vue'
import ContentCard from '@/components/ContentCard.vue'
import NoteCallout from '@/components/NoteCallout.vue'
import SectionDivider from '@/components/SectionDivider.vue'
import AnnotatedImage from '@/components/AnnotatedImage.vue'
</script>

<template>
  <main class="idivisor-placeholder">
    <!-- Hero -->
    <section class="hero">
      <div class="hero__content">
        <h1 class="hero__title">IDivisor 3</h1>
        <p class="hero__subtitle">User Manual</p>
        <p class="hero__standin">Stand-in page — build the real manual here</p>
      </div>
    </section>

    <!-- Component Examples -->
    <ContentSection>
      <h2>Component Reference</h2>
      <p class="section-intro">
        These are the reusable components available for building the manual.
        Each example below shows the component in action. Use them as building blocks.
      </p>
    </ContentSection>

    <!-- SectionDivider example -->
    <SectionDivider
      :number="1"
      title="Section Divider"
    />

    <ContentSection>
      <h2>ContentCard</h2>
      <p class="section-intro">Cards wrap content blocks. They can have an optional title and subtitle.</p>

      <ContentCard title="Card With Title" subtitle="Optional subtitle for extra context">
        <p class="card-text">
          This is a content card. Use it to group related information — instructions, tables,
          lists, or any block of content that belongs together.
        </p>
      </ContentCard>

      <ContentCard>
        <p class="card-text">
          Cards without a title work too. Good for simple content blocks that don't need a heading.
        </p>
      </ContentCard>
    </ContentSection>

    <!-- NoteCallout examples -->
    <ContentSection>
      <h2>NoteCallout</h2>
      <p class="section-intro">Three types: note, important, and warning.</p>

      <NoteCallout type="note">
        This is an informational note. Use it for helpful tips or supplementary context.
      </NoteCallout>

      <NoteCallout type="important">
        This is an important callout. Use it for critical instructions the reader must follow.
      </NoteCallout>

      <NoteCallout type="warning">
        This is a warning. Use it for safety information or actions that could cause problems.
      </NoteCallout>
    </ContentSection>

    <!-- Table example -->
    <ContentSection>
      <h2>Tables</h2>
      <p class="section-intro">Use the <code>data-table</code> class for consistent table styling.</p>

      <ContentCard title="Example Table">
        <table class="data-table">
          <thead>
            <tr>
              <th>Feature</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>ID Scanning</strong></td>
              <td>Reads barcode data from inserted IDs</td>
              <td>Standard</td>
            </tr>
            <tr>
              <td><strong>DMVCheck</strong></td>
              <td>Verifies against DMV records</td>
              <td>Add-on</td>
            </tr>
            <tr>
              <td><strong>Photo Capture</strong></td>
              <td>Captures patron photo alongside scan</td>
              <td>Add-on</td>
            </tr>
          </tbody>
        </table>
      </ContentCard>
    </ContentSection>

    <!-- Lists example -->
    <ContentSection>
      <h2>Lists</h2>

      <ContentCard title="Ordered Steps">
        <ol class="step-list">
          <li>First step in a process.</li>
          <li>Second step — each item is clearly numbered.</li>
          <li>Third step wraps nicely if the text is long enough to demonstrate multi-line behavior.</li>
        </ol>
      </ContentCard>

      <ContentCard title="Bullet Points">
        <ul class="bullet-list">
          <li>A simple unordered list item.</li>
          <li>Another point worth making.</li>
          <li>Use for non-sequential information.</li>
        </ul>
      </ContentCard>
    </ContentSection>

    <!-- Status chips example -->
    <ContentSection>
      <h2>Status Chips</h2>
      <p class="section-intro">Color-coded indicators for pass/fail/neutral states.</p>

      <ContentCard>
        <div class="status-grid">
          <div class="status-chip status-chip--green">
            <span class="status-chip__label">Pass</span>
            <span class="status-chip__desc">Everything checks out</span>
          </div>
          <div class="status-chip status-chip--red">
            <span class="status-chip__label">Fail</span>
            <span class="status-chip__desc">Something needs attention</span>
          </div>
          <div class="status-chip status-chip--gray">
            <span class="status-chip__label">N/A</span>
            <span class="status-chip__desc">Not applicable or not yet checked</span>
          </div>
        </div>
      </ContentCard>
    </ContentSection>

    <!-- AnnotatedImage example -->
    <ContentSection>
      <h2>AnnotatedImage</h2>
      <p class="section-intro">Images with optional captions. Place product photos in <code>/public/images/</code>.</p>

      <AnnotatedImage
        src="/images/logo-lockup-full-black.svg"
        alt="IDscanner logo"
        caption="Example: logo displayed with a caption underneath."
      />
    </ContentSection>

    <!-- Two-column layout example -->
    <ContentSection>
      <h2>Two-Column Layout</h2>
      <p class="section-intro">Use the <code>two-col</code> class for side-by-side content. Stacks on mobile.</p>

      <div class="two-col">
        <ContentCard title="Left Column">
          <p class="card-text">Content on the left side. Good for pairing an image with a description.</p>
        </ContentCard>
        <ContentCard title="Right Column">
          <p class="card-text">Content on the right side. Collapses to a single column below 640px.</p>
        </ContentCard>
      </div>
    </ContentSection>
  </main>
</template>

<style scoped lang="scss">
.hero {
  background-color: var(--p-gray-900);
  color: var(--p-surface-0);
  padding: 4rem 1.5rem 3rem;
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;

  &__content {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.25rem;
  }

  &__title {
    font-size: clamp(2.5rem, 8vw, 4rem);
    font-weight: 600;
    color: var(--p-surface-0);
    letter-spacing: -0.02em;
  }

  &__subtitle {
    font-size: clamp(1.25rem, 4vw, 2rem);
    font-weight: 600;
    color: var(--p-surface-0);
    opacity: 0.9;
  }

  &__standin {
    margin-top: 1.5rem;
    font-size: 0.875rem;
    color: var(--p-primary-500);
    font-weight: 500;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  @media (max-width: 640px) {
    min-height: 50vh;
    padding: 3rem 1rem 2rem;
  }
}

// Shared page styles (same as HomePage — keep in sync)
.section-intro {
  font-size: 0.9375rem;
  color: var(--p-gray-700);
}

.card-text {
  font-size: 0.875rem;
  line-height: 1.6;
  color: var(--p-gray-700);
  margin-bottom: 0.75rem;
  &:last-child { margin-bottom: 0; }
}

code {
  font-size: 0.8125rem;
  background-color: var(--p-gray-100);
  padding: 0.125rem 0.375rem;
  border-radius: 3px;
  font-family: monospace;
}

.step-list {
  list-style: decimal;
  padding-left: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: var(--p-gray-700);
}

.bullet-list {
  list-style: disc;
  padding-left: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  font-size: 0.875rem;
  color: var(--p-gray-700);
}

.data-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.8125rem;

  th, td {
    text-align: left;
    padding: 0.5rem 0.75rem;
    border-bottom: 1px solid var(--p-gray-350);
  }

  th {
    font-weight: 600;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: var(--p-gray-600);
    background-color: var(--p-gray-100);
  }

  td { color: var(--p-gray-700); }

  tbody tr:last-child td { border-bottom: none; }
}

.status-grid {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.status-chip {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.625rem 0.875rem;
  border-radius: 4px;
  font-size: 0.8125rem;

  &__label { font-weight: 600; font-size: 0.75rem; min-width: 3rem; }
  &__desc { color: var(--p-gray-700); }

  &--green {
    background-color: var(--p-primary-50);
    border-left: 3px solid var(--p-primary-500);
  }
  &--red {
    background-color: var(--p-red-100);
    border-left: 3px solid var(--p-red-500);
  }
  &--gray {
    background-color: var(--p-gray-300);
    border-left: 3px solid var(--p-gray-400);
  }
}

.two-col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  align-items: start;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
}
</style>
