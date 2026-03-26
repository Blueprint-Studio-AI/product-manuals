{% chapter id="settings" number=4 image="/images/chapter-04-settings.png" imageAlt="Settings" %}
{% /chapter %}

{% toc-entry title="Settings" level=1 /%}

This section covers the Setup options available on the IDVisor 3. These settings can be accessed through the Setup menu on the device. 

## Set Date/Time

Set the correct date and time to ensure accurate age calculations. You can verify the current date and time in the top right corner of the main scanning screen.

## Database

The Database menu provides tools for managing stored data. Each tool is briefly explained below.

{% split image="/images/database-menu.png" imageAlt="Database Menu" side="right" %}

- **Export Files** — Tap 'GO' to export data as a CSV to Phone Storage/Documents/IDVisorSmart. You can send it wirelessly or transfer manually via USB.
- **Backup DB** — Creates a database backup named with the date, time, and scan count.
- **Restore DB** — Restore from a previous database backup.
- **Check DB Stats** — View counts for customers, scans, photos, and tagged customers.
- **Send Diagnostics** — Sends data to TokenWorks Support. Use only when directed by support.
- **Delete Backups** — Remove old backup files.
- **Delete Photos** — Remove photos from the database.
- **Clear Scan Data** — Delete scans, customers, and/or tagged customers older than a specified number of days.

{% /split %}

## Configuration

The Configuration screen controls age verification settings and scanner behavior.

{% split image="/images/configuration.png" imageAlt="Configuration" side="right" %}

- **Tag Check Enable** — Enable or disable tag checking.
- **Anti Passback Enable** — Enable or disable the Anti-Passback feature.
- **Anti Passback Time** - Set the Anti-Passback time period.
- **Alcohol Age Check** — Enable or disable the primary age verification.
- **Alcohol Age** — Set the primary age threshold.
- **Tobacco Age Check** — Enable or disable the secondary age verification.
- **Tobacco Age** — Set the secondary age threshold.
- **Backlight Timer** — Adjust the backlight timer and display settings.
- **Do not save any data** — Enable if scanned data should not be stored *(may be required in some jurisdictions)*.
- **Volume** — Adjust the device alert volume.

{% /split %}

{% callout type="note" %}
If the IDVisor 3 is part of an IDVisor Sync network, highlighted settings will be locked. In a networked configuration, highlighted settings are centrally controlled by the IDVisor Sync software. Refer to IDVisor Sync documentation for details.
{% /callout %}

### Advanced Settings

- **Auto Deletion** — Automatically delete data after a specific time period.
- **Auto Export** — Automatically export scans and/or customers after a specific time period.

![Advanced Settings](/images/configuration-advanced.png)

### Change Pincode

{% split image="/images/change-pincode.png" imageAlt="Change Pincode" side="right" %}

Change the device PIN (default: 5678). Enter your current pincode, then enter and confirm your new pincode. Press Save to apply the changes.

{% /split %}

## Tag List

{% split image="/images/tag-list.png" imageAlt="Tag List" side="right" %}

View and manage the list of available tags. Press **Add New** to create custom tags. Use **View Tag Cust.** to see tagged customers, and the **Export Tagged Cust.** to export tagged customer data as CSV.

{% /split %}

## Wi-Fi

Access device Wi-Fi settings. Turn Wi-Fi on/off and connect to available networks. You can also access Wi-Fi settings by tapping the Wi-Fi icon at the top of any screen.
