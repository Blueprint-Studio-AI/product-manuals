<script setup lang="ts">
import ManualHeader from '@/components/ManualHeader.vue'
import ManualFooter from '@/components/ManualFooter.vue'
import SectionDivider from '@/components/SectionDivider.vue'
import ContentSection from '@/components/ContentSection.vue'
import ContentCard from '@/components/ContentCard.vue'
import TableOfContents from '@/components/TableOfContents.vue'
import NoteCallout from '@/components/NoteCallout.vue'
import AnnotatedImage from '@/components/AnnotatedImage.vue'

const tocData = [
  {
    title: 'Usage',
    number: 1,
    entries: [
      { label: 'Scan Screen Overview', anchor: 'scan-screen-overview' },
      {
        label: 'ID Scanning',
        anchor: 'id-scanning',
        children: [
          { label: 'How to Scan', anchor: 'how-to-scan' },
          { label: 'Manual Entry', anchor: 'manual-entry' },
          { label: 'Mobile Drivers License', anchor: 'mobile-dl' },
          { label: 'Passport Scanning (Add On)', anchor: 'passport' },
          { label: "If an ID Won't Scan", anchor: 'id-wont-scan' },
        ],
      },
      {
        label: 'Age Verification',
        anchor: 'age-verification',
        children: [
          { label: 'ID Status', anchor: 'id-status' },
          { label: 'Age Verification Indicators', anchor: 'age-indicators' },
        ],
      },
      {
        label: 'Fake ID Detection',
        anchor: 'fake-id-detection',
        children: [
          { label: 'Barcode Detective', anchor: 'barcode-detective' },
          { label: 'Mismatch Check', anchor: 'mismatch-check' },
          { label: 'DMVCheck', anchor: 'dmvcheck' },
        ],
      },
      { label: 'FEAR Method of Carding', anchor: 'fear-method' },
      {
        label: 'Advanced Features',
        anchor: 'advanced-features',
        children: [
          { label: 'Adding Contact Information', anchor: 'contact-info' },
          { label: 'Photo Capture (Add On)', anchor: 'photo-capture' },
          { label: 'Occupancy Counter', anchor: 'occupancy-counter' },
          { label: 'Anti-Passback (Add On)', anchor: 'anti-passback' },
          { label: 'Challenge Questions', anchor: 'challenge-questions' },
          { label: 'Tagging (Add On)', anchor: 'tagging' },
        ],
      },
      { label: 'Purchasing Add-on Features', anchor: 'purchasing-addons' },
    ],
  },
  {
    title: 'Hardware',
    number: 2,
    entries: [
      { label: 'Hardware Overview', anchor: 'hardware-overview' },
      { label: 'In the Box', anchor: 'in-the-box' },
      { label: 'Starting Up', anchor: 'starting-up' },
      { label: 'Power and Mobile Operation', anchor: 'power-mobile' },
      { label: 'Warranty', anchor: 'warranty' },
    ],
  },
  {
    title: 'Settings',
    number: 3,
    entries: [
      { label: 'Age Settings', anchor: 'age-settings' },
      { label: 'Display', anchor: 'display-settings' },
      { label: 'Device Setup', anchor: 'device-setup' },
      { label: 'Connectivity', anchor: 'connectivity' },
      { label: 'Data', anchor: 'data' },
    ],
  },
  {
    title: 'Copyright Notice',
    number: 4,
    entries: [],
  },
]
</script>

<template>
  <ManualHeader />

  <main>
    <!-- ===== COVER ===== -->
    <section class="cover">
      <div class="cover__content">
        <h1 class="cover__title">AgeVisor 3</h1>
        <p class="cover__subtitle">User Manual</p>
        <div class="cover__images">
          <img
            src="/images/agevisor3-white-45.png"
            alt="AgeVisor 3 — White"
            class="cover__device cover__device--white"
          />
          <img
            src="/images/agevisor3-black-45.png"
            alt="AgeVisor 3 — Black"
            class="cover__device cover__device--black"
          />
        </div>
      </div>
    </section>

    <!-- ===== TABLE OF CONTENTS ===== -->
    <TableOfContents :sections="tocData" />

    <!-- ===== 1. USAGE ===== -->
    <SectionDivider
      :number="1"
      title="Usage"
      image="/images/agevisor3-white-hand.png"
      image-alt="AgeVisor 3 scanning an ID"
    />

    <!-- Scan Screen Overview -->
    <ContentSection id="scan-screen-overview">
      <h2>a. Scan Screen Overview</h2>
      <p class="section-intro">
        Below is an overview of the Scan Screen, displayed after scanning a card.
      </p>

      <ContentCard>
        <div class="screen-overview">
          <div class="screen-overview__labels">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Element</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Status Bar</strong></td>
                  <td>Shows sync status, battery level, and Wi-Fi connection</td>
                </tr>
                <tr>
                  <td><strong>ID Data</strong></td>
                  <td>Name, age, date of birth, address, and other ID details</td>
                </tr>
                <tr>
                  <td><strong>ID Tags</strong></td>
                  <td>Custom tags like VIP, visit count, or notes about the patron</td>
                </tr>
                <tr>
                  <td><strong>Age Verification</strong></td>
                  <td>Color-coded indicators for age thresholds (gaming, vape, alcohol, etc.)</td>
                </tr>
                <tr>
                  <td><strong>ID Warning</strong></td>
                  <td>Flags for underage status (e.g., "Under Tobacco Age")</td>
                </tr>
                <tr>
                  <td><strong>Barcode Detective</strong></td>
                  <td>Validates that the barcode data matches the printed card information</td>
                </tr>
                <tr>
                  <td><strong>Mismatch Check</strong></td>
                  <td>Compares front and back of the ID for inconsistencies</td>
                </tr>
                <tr>
                  <td><strong>DMVCheck</strong></td>
                  <td>Verifies the ID against DMV records (add-on feature)</td>
                </tr>
                <tr>
                  <td><strong>Occupancy Counter</strong></td>
                  <td>Tracks venue occupancy with plus/minus controls</td>
                </tr>
                <tr>
                  <td><strong>Scan Button</strong></td>
                  <td>Initiates a new barcode scan</td>
                </tr>
                <tr>
                  <td><strong>Manual Entry</strong></td>
                  <td>Manually enter an ID when scanning isn't possible</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </ContentCard>
    </ContentSection>

    <!-- ID Scanning -->
    <ContentSection id="id-scanning">
      <h2>b. ID Scanning</h2>

      <ContentCard id="how-to-scan" title="How to Scan">
        <ol class="step-list">
          <li>Insert the ID into the scanning bay, barcode-side down.</li>
          <li>The device will automatically read the barcode and display the ID data on screen.</li>
          <li>Review the scan results — check age verification indicators, ID status, and any warnings.</li>
          <li>To scan another ID, simply insert the next card or tap the Scan button.</li>
        </ol>
      </ContentCard>

      <ContentCard id="manual-entry" title="Manual Entry">
        <p class="card-text">
          If a barcode is damaged or unreadable, use Manual Entry to type in the patron's date of birth.
          Tap the <strong>Manual Entry</strong> button on the scan screen, enter the date, and confirm.
        </p>
        <NoteCallout type="note">
          Manual Entry only performs age verification — it does not validate the ID itself.
          Barcode Detective and DMVCheck will not be available for manually entered IDs.
        </NoteCallout>
      </ContentCard>

      <ContentCard id="mobile-dl" title="Mobile Drivers License">
        <p class="card-text">
          AgeVisor 3 supports Mobile Drivers Licenses (mDL). Tap the <strong>Mobile Drivers License</strong>
          button to activate the mDL reader. The patron will present their digital license via
          their phone, and the device will read it wirelessly.
        </p>
      </ContentCard>

      <ContentCard id="id-wont-scan" title="If an ID Won't Scan">
        <ul class="bullet-list">
          <li>Ensure the barcode is facing down and fully inserted into the scanning bay.</li>
          <li>Clean the scanning window with a soft, dry cloth.</li>
          <li>Try re-inserting the card at a slightly different angle.</li>
          <li>If the card still won't scan, use Manual Entry to verify age.</li>
        </ul>
      </ContentCard>
    </ContentSection>

    <!-- Age Verification -->
    <ContentSection id="age-verification">
      <h2>c. Age Verification</h2>

      <ContentCard id="id-status" title="ID Status">
        <p class="card-text">
          After scanning, the ID card area changes color to indicate status at a glance:
        </p>
        <div class="status-grid">
          <div class="status-chip status-chip--green">
            <span class="status-chip__label">Green</span>
            <span class="status-chip__desc">ID is valid — patron meets all age requirements</span>
          </div>
          <div class="status-chip status-chip--red">
            <span class="status-chip__label">Red</span>
            <span class="status-chip__desc">Underage — patron does NOT meet one or more thresholds</span>
          </div>
          <div class="status-chip status-chip--gray">
            <span class="status-chip__label">Gray</span>
            <span class="status-chip__desc">Neutral — no scan has been performed yet</span>
          </div>
        </div>
      </ContentCard>

      <ContentCard id="age-indicators" title="Age Verification Indicators">
        <p class="card-text">
          The ID Verification Panel displays multiple age thresholds simultaneously. Each indicator shows a check or X:
        </p>
        <table class="data-table">
          <thead>
            <tr>
              <th>Indicator</th>
              <th>Default Threshold</th>
              <th>Configurable</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Gaming</td>
              <td>21+</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Vape / Tobacco</td>
              <td>18+</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Alcohol</td>
              <td>21+</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Cannabis</td>
              <td>21+</td>
              <td>Yes</td>
            </tr>
          </tbody>
        </table>
        <NoteCallout type="note">
          Age thresholds can be customized in Settings &gt; Age Settings to match your jurisdiction's requirements.
        </NoteCallout>
      </ContentCard>
    </ContentSection>

    <!-- Fake ID Detection -->
    <ContentSection id="fake-id-detection">
      <h2>d. Fake ID Detection</h2>

      <ContentCard id="barcode-detective" title="Barcode Detective™">
        <p class="card-text">
          Barcode Detective analyzes the barcode data against known formatting rules for each state and province.
          It checks for data anomalies that are commonly found in counterfeit IDs.
        </p>
        <div class="status-grid">
          <div class="status-chip status-chip--green">
            <span class="status-chip__label">Pass</span>
            <span class="status-chip__desc">Barcode data is consistent with expected formatting</span>
          </div>
          <div class="status-chip status-chip--red">
            <span class="status-chip__label">Fail</span>
            <span class="status-chip__desc">Anomalies detected — inspect the ID more closely</span>
          </div>
          <div class="status-chip status-chip--gray">
            <span class="status-chip__label">N/A</span>
            <span class="status-chip__desc">Not available for this ID type or manual entries</span>
          </div>
        </div>
      </ContentCard>

      <ContentCard id="mismatch-check" title="Mismatch Check">
        <p class="card-text">
          Mismatch Check compares the data encoded in the barcode against the information printed
          on the front of the card. A mismatch may indicate a tampered or counterfeit ID.
        </p>
      </ContentCard>

      <ContentCard id="dmvcheck" title="DMVCheck (Add-On)">
        <p class="card-text">
          DMVCheck verifies the scanned ID against official DMV records in real time. This is
          a credit-based add-on feature — each verification consumes one credit.
        </p>
        <NoteCallout type="important">
          DMVCheck requires an active internet connection and available credits.
          Purchase credits through Settings &gt; Purchasing Add-on Features.
        </NoteCallout>
      </ContentCard>
    </ContentSection>

    <!-- FEAR Method -->
    <ContentSection id="fear-method">
      <h2>e. FEAR Method of Carding</h2>
      <ContentCard title="The FEAR Method">
        <p class="card-text">
          The FEAR method is a systematic approach to verifying IDs. Use it as a mental checklist every time you check an ID:
        </p>
        <table class="data-table data-table--accent">
          <tbody>
            <tr>
              <td class="fear-letter">F</td>
              <td><strong>Feel</strong> — Does the ID feel right? Check thickness, texture, and edges.</td>
            </tr>
            <tr>
              <td class="fear-letter">E</td>
              <td><strong>Examine</strong> — Look at the photo, holograms, and microprinting.</td>
            </tr>
            <tr>
              <td class="fear-letter">A</td>
              <td><strong>Ask</strong> — Ask the patron questions about their ID (address, zodiac sign, etc.).</td>
            </tr>
            <tr>
              <td class="fear-letter">R</td>
              <td><strong>Return</strong> — Return the ID and observe the patron's reaction.</td>
            </tr>
          </tbody>
        </table>
      </ContentCard>
    </ContentSection>

    <!-- ===== 2. HARDWARE ===== -->
    <SectionDivider
      :number="2"
      title="Hardware"
      image="/images/agevisor3-white-front.png"
      image-alt="AgeVisor 3 front view"
    />

    <ContentSection id="hardware-overview">
      <h2>a. Hardware Overview</h2>
      <AnnotatedImage
        src="/images/agevisor3-white-45-hw.png"
        alt="AgeVisor 3 hardware — 45-degree view"
        caption="AgeVisor 3 hardware overview showing volume buttons, power button, scanning bay, and power connection."
      />

      <table class="data-table">
        <thead>
          <tr>
            <th>Component</th>
            <th>Location</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Volume Buttons</td>
            <td>Left side</td>
            <td>Adjust audio volume for scan feedback sounds</td>
          </tr>
          <tr>
            <td>Power Button</td>
            <td>Left side (below volume)</td>
            <td>Hold 3 seconds to power on/off</td>
          </tr>
          <tr>
            <td>Scanning Bay</td>
            <td>Front, bottom</td>
            <td>Insert IDs barcode-side down for scanning</td>
          </tr>
          <tr>
            <td>Power Port</td>
            <td>Rear, bottom</td>
            <td>USB-C connection for charging</td>
          </tr>
        </tbody>
      </table>
    </ContentSection>

    <ContentSection id="in-the-box">
      <h2>b. In the Box</h2>
      <ContentCard>
        <ul class="bullet-list">
          <li>1 x AgeVisor 3 Scanner</li>
          <li>1 x USB-C Power Adapter (Minimum 15W, 5V/3A)</li>
          <li>1 x USB-C Charging Cable</li>
          <li>1 x Quickstart Guide</li>
        </ul>
        <NoteCallout type="important">
          Use only the supplied power adapter or a certified USB-C Power Delivery (PD) adapter
          providing at least 15W (5V/3A). Using an underpowered adapter may prevent proper
          charging or cause malfunction.
        </NoteCallout>
      </ContentCard>
    </ContentSection>

    <ContentSection id="starting-up">
      <h2>c. Starting Up</h2>
      <ContentCard>
        <ol class="step-list">
          <li>Hold the power button for 3 seconds until the screen lights up.</li>
          <li>Wait 45–60 seconds for the device to fully start up.</li>
          <li>The Scan Screen will appear once the device is ready.</li>
        </ol>
        <NoteCallout type="note">
          Do not switch off the device during normal use. Plug the unit into a wall outlet
          at the end of the night. Only power off when storing the unit long-term.
        </NoteCallout>
      </ContentCard>
    </ContentSection>

    <!-- ===== 3. SETTINGS ===== -->
    <SectionDivider
      :number="3"
      title="Settings"
      image="/images/agevisor3-black-top.png"
      image-alt="AgeVisor 3 top view — black"
    />

    <ContentSection id="data">
      <h2>e. Data</h2>
      <p class="section-intro">
        Data is found under Settings &gt; Device Setup &gt; Data
      </p>

      <div class="two-col">
        <AnnotatedImage
          src="/images/screenshot-data.png"
          alt="Data settings screen"
          caption="Data management screen"
        />
        <ContentCard title="Export Files">
          <ul class="bullet-list">
            <li>Tapping either "GO" button exports data as CSV files to internal storage.</li>
            <li>After tapping "GO", you'll be asked if you want to send the file.</li>
            <li>Select <strong>YES</strong> to send via Gmail or Drive (requires Wi-Fi).</li>
            <li>Select <strong>NO</strong> to save locally — retrieve by connecting to a computer.</li>
          </ul>
        </ContentCard>
      </div>

      <div class="two-col">
        <ContentCard title="Backup & Restore">
          <table class="data-table">
            <thead>
              <tr>
                <th>Action</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Backup DB</strong></td>
                <td>Creates a timestamped backup (dbcopy_yyyymmdd_hhmmss.db)</td>
              </tr>
              <tr>
                <td><strong>Restore DB</strong></td>
                <td>Shows available backups — tap to restore</td>
              </tr>
              <tr>
                <td><strong>Check DB Stats</strong></td>
                <td>Shows counts for customers, scans, photos, and tagged customers</td>
              </tr>
            </tbody>
          </table>
        </ContentCard>

        <ContentCard title="Maintenance">
          <table class="data-table">
            <thead>
              <tr>
                <th>Action</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Send Diagnostics</strong></td>
                <td>Send data to TokenWorks Support (use only when directed)</td>
              </tr>
              <tr>
                <td><strong>Delete Backups</strong></td>
                <td>Remove backup files no longer needed</td>
              </tr>
              <tr>
                <td><strong>Delete Photos</strong></td>
                <td>Remove stored photos no longer needed</td>
              </tr>
              <tr>
                <td><strong>Clear Scan Data</strong></td>
                <td>Remove old scans, customers, and/or tagged customers</td>
              </tr>
            </tbody>
          </table>
          <NoteCallout type="note">
            To clear old data, enter the number of days and select which data types to delete.
            For example, 365 means delete records older than one year.
          </NoteCallout>
        </ContentCard>
      </div>
    </ContentSection>

    <!-- ===== 4. COPYRIGHT ===== -->
    <SectionDivider
      :number="4"
      title="Copyright Notice"
      image="/images/agevisor3-black-45.png"
      image-alt="AgeVisor 3 — Black"
    />

    <ContentSection id="copyright">
      <ContentCard>
        <div class="copyright-text">
          <p>Copyright 2002 – 2025 TokenWorks, Inc.</p>
          <p>Barcode Detective™ is a trademark of ID Sentry, Inc.</p>
          <p>
            Information in this document is subject to change without notice. No part of this
            document may be reproduced or transmitted in any form or by any means, electronic
            or mechanical, for any purpose, without the express written permission of TokenWorks, Inc.
          </p>
          <p>
            <a href="https://www.tokenworks.com" target="_blank">www.TokenWorks.com</a> (Company Web Site)<br />
            <a href="https://www.idscanner.com" target="_blank">www.IDScanner.com</a> (Product Web Site)
          </p>
          <p>
            TokenWorks®, CardVisor®, CardTool®, IDVisor®, IDVisor Pro®, IDVisor Smart®,
            AgeVisor®, and IDentiFake® are trademarks of TokenWorks, Inc.
          </p>
        </div>
      </ContentCard>
    </ContentSection>
  </main>

  <ManualFooter />
</template>

<style scoped lang="scss">
// ===== COVER =====
.cover {
  background-color: var(--c-charcoal);
  color: var(--c-frost);
  padding: 4rem 1.5rem 3rem;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;

  &__content {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0;
  }

  &__title {
    font-size: clamp(2.5rem, 8vw, 4rem);
    font-weight: 600;
    color: var(--c-frost);
    letter-spacing: -0.02em;
    margin-bottom: -0.125rem;
  }

  &__subtitle {
    font-size: clamp(1.25rem, 4vw, 2rem);
    font-weight: 600;
    color: var(--c-frost);
    opacity: 0.9;
  }

  &__images {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 0;
    margin-top: 2rem;
    position: relative;
  }

  &__device {
    max-height: 320px;
    width: auto;
    object-fit: contain;

    &--white {
      transform: translateX(20px);
      z-index: 1;
    }

    &--black {
      transform: translateX(-20px);
      z-index: 2;
    }
  }

  @media (max-width: 640px) {
    min-height: 70vh;
    padding: 3rem 1rem 2rem;

    &__device {
      max-height: 200px;
    }
  }
}

// ===== SECTION INTRO =====
.section-intro {
  font-size: 0.9375rem;
  color: var(--c-gray700);
}

// ===== CARD TEXT =====
.card-text {
  font-size: 0.875rem;
  line-height: 1.6;
  color: var(--c-gray700);
  margin-bottom: 0.75rem;

  &:last-child {
    margin-bottom: 0;
  }
}

// ===== LISTS =====
.step-list {
  list-style: decimal;
  padding-left: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: var(--c-gray700);
  margin-bottom: 0.75rem;
}

.bullet-list {
  list-style: disc;
  padding-left: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  font-size: 0.875rem;
  color: var(--c-gray700);
  margin-bottom: 0.75rem;
}

// ===== TABLES =====
.data-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.8125rem;

  th, td {
    text-align: left;
    padding: 0.5rem 0.75rem;
    border-bottom: 1px solid var(--c-gray-border);
  }

  th {
    font-weight: 600;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: var(--c-gray600);
    background-color: var(--c-gray100);
  }

  td {
    color: var(--c-gray700);
  }

  tbody tr:last-child td {
    border-bottom: none;
  }

  &--accent {
    .fear-letter {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--c-green500);
      width: 3rem;
      text-align: center;
      vertical-align: middle;
    }
  }
}

// ===== STATUS CHIPS =====
.status-grid {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 0.75rem;
}

.status-chip {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.625rem 0.875rem;
  border-radius: 4px;
  font-size: 0.8125rem;

  &__label {
    font-weight: 600;
    font-size: 0.75rem;
    min-width: 3rem;
  }

  &__desc {
    color: var(--c-gray700);
  }

  &--green {
    background-color: var(--c-green-light);
    border-left: 3px solid var(--c-green500);
  }

  &--red {
    background-color: var(--c-red-light);
    border-left: 3px solid var(--c-red);
  }

  &--gray {
    background-color: var(--c-gray300);
    border-left: 3px solid var(--c-gray400);
  }
}

// ===== TWO-COL LAYOUT =====
.two-col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  align-items: start;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
}

// ===== COPYRIGHT =====
.copyright-text {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  font-size: 0.8125rem;

  p {
    color: var(--c-gray700);
    font-size: inherit;
  }
}
</style>
