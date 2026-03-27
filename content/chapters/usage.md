{% chapter id="usage" number=3 image="/images/chapter-03-usage.png" imageAlt="Using the Scanner" %}
{% /chapter %}

{% toc-entry title="Usage" level=1 /%}

## Home Screen

The Home screen is the launch point for all functionality. The buttons take you directly to the most accessed functions.

![Home Screen](/images/home-screen.png)

{% callout type="note" %}
To view photos on a PC, restart the device and connect it to a USB port, then navigate to Storage/Documents/IDVisorSmartPics. Scanned ID photos are organized by name and date/time. Free Pic photos are stored in a separate folder, shown from latest to oldest.
{% /callout %}

## ID Scanner

Tapping the **ID Scanner** button will launch the scanning form. 

Below is an image of the ID Scanner form, which displays a scanned card, and all the elements  of the form.

![ID Scanner](/images/id-scanner.png)

### Scanning IDs & Passports

{% split image="/images/scanning-an-id.png" imageAlt="Scanning an ID" side="right" %}

**When scanning an ID,**

1. Aim the top of the device at an ID&nbsp;barcode.
2. Press the **scan** button, and hold&nbsp;steady.
3. See result.

{% /split %}

{% split image="/images/scanning-passports.png" imageAlt="Scanning Passports" side="right" %}

**When scanning an passport,**

1. Aim the top of the device at the MRZ strip (the numbers at the bottom).
2. Press the **scan** button, and hold&nbsp;steady.
3. See results (*This feature is not enabled on all devices. Upgrade your device to use passport scanning at portal.idscanner.com*).

{% /split %}

After scanning, the age is calculated from the date of birth. If the person is of age, the age icons display green. Other outcomes include ID Expired, Underage, Tagged User (Banned, VIP, etc.), and Anti-Passback alert.

![ID OK, ID Expired, Underage and Fake Alerts](/images/scanning-id-result.png)

{% callout type="note" %}
The scanner does not read 1D barcodes or magnetic stripes. The 2D barcode is the only barcode format present on all US state and Canadian province-issued IDs.
{% /callout %}

### Taking Pictures of an ID

If the Photos option is installed, you can take up to two pictures per scanned ID — typically one of the front and one of the back. After a successful scan, tap either of the two camera icons on the scan results screen to capture a photo.

{% callout type="note" %}
Camera icons are only available after a successful scan and are not the same as the Free Pic option.
{% /callout %}

### Taking a Free Pic

The Free Pic option allows you to photograph an ID that cannot be scanned due to its condition. Tap the **Free Pic** button on the scan screen to open the camera and capture the image.


### Creating & Editing a Manual Entry

Manual Entry allows you enter the first name, last name, date of birth, and expiration date for an ID that cannot be read. Tap the Manual Entry button and fill in the fields.

![Creating a Manual Entry](/images/creating-manual-entry.png)

{% split image="/images/editing-manual-entry.png" imageAlt="Editing a Manual Entry" side="right" %}

After creating a manual entry, you can edit it to add additional details. Tap the **Edit Manual Entry** button to modify fields including DL#, sex, and address. Press Save when done.

{% /split %}

### Tagging an ID

Tags allow you to flag an ID at the time of scanning. To tag an ID, scan it, tap the **Tag** button, then select a tag type from the dropdown menu. You can also add an optional note and expiration date before pressing **Save**.

Tag names can be customized in the Tag List option under Setup.

![Tagging an ID](/images/tagging-an-id.png)

{% split image="/images/tagged-user.png" imageAlt="Tagged User" side="right" %}

If a tagged ID is scanned again, the scanner alerts the operator with a sound and displays the tag details. To add a Tag to a previously scanned ID or to modify or delete an existing Tag for an ID, first  find that customer and tap **Tag**. 

For adding or editing an existing Tag follow the instructions above. 

For deleting an existing Tag, tap **Clear**, then tap **Save**.

{% /split %} 

### Adding an Email or Phone Number

{% split image="/images/adding-email-phone.png" imageAlt="Adding an Email or Phone Number" side="right" %}

The Email/Tel button allows you to associate an email address and phone number with a scanned ID. After scanning, tap the **Email/Tel** button, enter the information, and press **Save**.

{% /split %}

## Search

{% split image="/images/search.png" imageAlt="Search" side="right" %}

Tapping the **Search** button launches a form that lets you search for customers by DL#, Last Name, and/or First Name. Partial name searches are supported.

Once an ID has been found, you can view details of the customer record by tapping the **More Info** button. Tap the **Tag** and **Email** buttons to apply or modify Tags and append Email and/or Phone information.

{% /split %}

## Help

Tapping the **Help** button displays a menu for viewing short instructions that describe operations of the ID Scanner. Tap any of the 6 menu items to view the instructions for that operation.

{% split image="/images/help-menu.png" imageAlt="Help Menu" side="right" %}

The Help menu also provides access to:

- **Check for Updates** — Checks for new software updates (requires Wi-Fi).
- **Update Registration** — Update the user information associated with your&nbsp;scanner.
- **About** — Displays the current version of the IDVisor 3 software and the device serial number.
- **EULA** — Displays the End User License&nbsp;Agreement.
- **IDSentry EULA** — Displays the End User License Agreement for IDSentry.
- **Purchase Features** — Generates a link to purchase upgrade features such as Passport Scanning, Pictures, Anti-Passback, and Tagging.
- **Back** — Returns the application to the Home Screen.

{% /split %}

## Scanned Data

{% split image="/images/scanned-data.png" imageAlt="Scanned Data" side="right" %}

Tapping the **Scanned Data** button displays a list of all scanned cards in chronological&nbsp;order.

{% /split %}

Tapping the **Stats** button shows statistics of recent customer visits by gender, age, state, and cities during a selectable timeframe.

![Stats Button](/images/stats-button.png)

{% split image="/images/individual-record.png" imageAlt="Individual Record" side="right" %}

Tapping an individual record displays a detailed view of that customer record in a read-only form. From the individual record, use the **Tag** button to add or modify tags, the **Email/Phone** button to append contact information, and the **Photo** button to view any photos associated with the record.

{% /split %}

## Set Up

{% split image="/images/setup-menu.png" imageAlt="Set Up Menu" side="right" %}

Tapping the **Setup** button will display a menu of functions that are typically used by a system  administrator. These functions can be protected by pin codes to keep settings and information  secure. 

The unit comes with a pre-initialized pin code (5678) for the following functions: Data base, Configuration, and Tag List. For further information and detailed instructions, please refer to the Settings&nbsp;Chapter.

{% /split %} 

## Anti-Passback

{% split image="/images/anti-passback.png" imageAlt="Anti-Passback Alert" side="right" %}

If installed and enabled, Anti-Passback alerts when an ID is scanned more than once within a configured time span. A notification shows how many times the ID has been re-scanned.

To disable: Setup > Configuration > Anti Passback Enable: OFF.

{% /split %}

## Barcode Detective

IDVisor 3 includes a free subscription to Barcode Detective from ID Sentry, which uses hidden data in barcodes to detect fake IDs. It checks for typos, jumbled info, misplaced data, and hidden codes.

Barcode Detective is automatically enabled on your IDVisor 3. When an ID is scanned, simply look at the Barcode Detective shield for results.

For data security reasons, Barcode Detective may not be allowed under certain circumstances. The service can easily be disabled if desired. To disable: Setup > Configuration > Advanced > IDSentry Check: OFF.

![Barcode Detective](/images/barcode-detective.png)

## DMVCheck

DMVCheck is TokenWorks' feature to ensure document authenticity. It is a pay-per-use service that allows a recently scanned ID to be checked against the issuing jurisdiction in 40+ states.

To access DMV Check, navigate to the ID Scanner form. The DMVCheck logo will be displayed on the bottom left of the screen. If this is your first time setting up DMVCheck on this device, tapping the DMVCheck logo will display a form to log in to your DMVCheck account.

{% split image="/images/dmv-check.png" imageAlt="DMVCheck" side="right" %}

Create an account at [account.tokenworks.net](https://account.tokenworks.net) if needed. After creating an account online, the same credentials can be entered in the DMVCheck form on your device. Once your Smart device is logged into your DMVCheck account and credits have  purchased on the account, you're ready to start using DMVCheck.

{% /split %}

Select the DMVCheck Logo in the bottom left of the screen after scanning an ID.  Follow the Instructions on screen to process and review the results of DMVCheck.

![DMVCheck Result](/images/dmv-check-result.png)

{% callout type="note" %}
Always cross check the data displayed on the scanner versus what is shown on the front of  the ID. Some fake IDs have a 'cloned' data stripe of someone who is ‘of age’.
{% /callout %}

1. *__FEEL FOR:__ Glue line or bumpy surfaces by the picture or birth date. Pin holes on the surface. Thickness of an ID. If it's been re-laminated, it may be thicker.*
2. *__EXAMINE:__ The photo and physical description. They should match the person handing you the ID. The expiration date. You CANNOT accept an expired ID. The birth date. Do your math. Are they 21? Whether or not the ID is a duplicate. If it is, ask for another form of ID. The state logo. If it's partially missing or appears altered, the ID might be fake. The hologram. Is it a genuine hologram or a basic hologram added to a fake ID? The card's reverse side lettering. Some ID-makers neglect the back side of the ID. Look for blurred lettering or a cut out piece of paper. Whether it is an out-of-state license. Use an ID checking guide when you're looking at an unfamiliar license.*
3. *__ASK:__ About basic information on the card, such as the birth date, middle initial, zip code, age, etc. For a second form of ID. People with fakes rarely carry back-up identification.*
4. *__RETURN:__ If you are satisfied that the proof of age is valid, you may permit the individual to be served.*

![Cross Check IDs](/images/cross-check-id.png)