{% chapter number=3 image="/images/chapter-03-usage.png" imageAlt="Using the Scanner" %}

## Usage

{% /chapter %}

### a. Home Screen

The Home screen is the launch point for all functionality. The buttons take you directly to the most accessed functions.

- **ID Scanner** launches the scanning form where IDs and driver licenses are captured and displayed.
- **Scanned Data** displays previously scanned IDs.
- **Search** lets you search for a scanned ID by ID number, first and/or last name.
- **Setup** brings up options to customize the settings of the scanner application.
- **View Photos** shows all photos taken with the scanner camera.
- **Free Pic** lets you photograph an ID that has difficulty scanning.
- **Help** brings up the Help menu.
- **Exit** closes the IDVisor Smart app (default passphrase: 5678).

{% callout type="note" %}
To view photos on a PC, restart the device and connect it to a USB port, then navigate to Storage/Documents/IDVisorSmartPics. Scanned ID photos are organized by name and date/time. Free Pic photos are stored in a separate folder, shown from latest to oldest.
{% /callout %}

### b. Scanned Data

Tapping the Scanned Data button displays a list of all scanned cards in chronological order. Tapping the Stats button shows statistics of recent customer visits by gender, age, state, and cities during a selectable timeframe.

Tapping an individual record displays a detailed view of that customer record in a read-only form. From the individual record, use the Tag button to add or modify tags, the Email/Phone button to append contact information, and the Photo button to view any photos associated with the record.

### c. Search

Tapping the Search button launches a form that lets you search for customers by DL#, Last Name, and/or First Name. Partial name searches are supported.

Once an ID has been found, you can view details of the customer record by tapping the More Info button. Tap the Tag and Email buttons to apply or modify Tags and append Email and/or Phone information.

### d. Help

Tapping the Help button displays a menu for viewing short instructions that describe operations of the ID Scanner. Tap any of the 6 menu items to view the instructions for that operation.

The Help menu also provides access to:

- **Check for Updates** — checks for new software updates (requires Wi-Fi)
- **Update Registration** — update the user information associated with your scanner
- **About** — displays the current version of the IDVisor 3 software and the device serial number
- **EULA** — displays the End User License Agreement
- **IDSentry EULA** — displays the End User License Agreement for IDSentry
- **Purchase Features** — generates a link to purchase upgrade features such as Passport Scanning, Pictures, Anti-Passback, and Tagging

### e. Scanning an ID

Press the ID Scanner button from the Home Screen, hold the ID 3-5 inches from the barcode reader, and press a scan button. Point the laser at the 2D barcode. The scanner will beep and display the ID information.

There are 4 scan buttons: the physical black buttons on each side, the optional pistol grip, or the on-screen scan button. All perform the same function.

After scanning, the age is calculated from the date of birth. If the person is of age, the age icons display green. Other outcomes include ID Expired, Underage, Tagged User (Banned, VIP, etc.), and Anti-Passback alert.

### f. Taking Pictures of an ID

If the Photos option is installed, you can take up to two pictures per scanned ID (front and back). Tap the camera icons on the ID Scanner form after a successful scan.

{% callout type="note" %}
Camera icons are only available after a successful scan and are not the same as the Free Pic option.
{% /callout %}

### g. Free Pic

The Free Pic option lets you photograph an ID that cannot be read due to its condition. Tap Free Pic on the ID Scanner form to initiate the camera.

### h. Manual Entry

Manual Entry lets you enter the first name, last name, date of birth, and expiration date for an ID that cannot be read. Tap the Manual Entry button and fill in the fields.

Once entered, you can use the Edit Manual Entry button to add DL#, sex, and address. Press Save when done.

### i. Editing a Manual Entry

After creating a manual entry, you can edit it to add additional details. Tap the Edit Manual Entry button to modify fields including DL#, sex, and address. Press Save when done.

### j. Tagging an ID

Tags let you flag an ID at scan time (e.g., Banned, VIP). Scan an ID, tap Tag, select a tag type, add an optional note and expiration date, then press Save.

If a tagged ID is scanned again, the scanner alerts the operator with a sound and displays the tag details.

To manage tags on previously scanned IDs, find the customer via Scanned Data, then tap Tag to add, edit, or clear.

### k. Adding an Email or Phone Number

After scanning an ID, tap Email/Tel to associate an email address and/or phone number with the record. Press Save when done.

### l. Anti-Passback

If installed and enabled, Anti-Passback alerts when an ID is scanned more than once within a configured time span. A notification shows how many times the ID has been re-scanned.

To disable: Setup > Configuration > Anti Passback Enable: OFF.

### m. Barcode Detective

IDVisor 3 includes a free subscription to Barcode Detective from ID Sentry, which uses hidden data in barcodes to detect fake IDs. It checks for typos, jumbled info, misplaced data, and hidden codes.

Barcode Detective is automatically enabled on your IDVisor 3. When an ID is scanned, simply look at the Barcode Detective shield for results.

For data security reasons, Barcode Detective may not be allowed under certain circumstances. The service can easily be disabled if desired. To disable: Setup > Configuration > Advanced > IDSentry Check: OFF.

### n. DMVCheck

DMVCheck is TokenWorks' feature to ensure document authenticity. It is a pay-per-use service that allows a recently scanned ID to be checked against the issuing jurisdiction in 40+ states.

To access DMV Check, navigate to the ID Scanner form. The DMVCheck logo will be displayed on the bottom left of the screen. If this is your first time setting up DMVCheck on this device, tapping the DMVCheck logo will display a form to log in to your DMVCheck account.

Create an account at [account.tokenworks.net](https://account.tokenworks.net) if needed. After creating an account online, the same credentials can be entered in the DMVCheck form on your device. At this point, you're ready to start using DMVCheck.
