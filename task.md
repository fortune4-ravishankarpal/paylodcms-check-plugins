# Panch Pakshi Scraper Implementation

- [x] Create `PanchPakshiScanJobs` collection
- [x] Create `PanchPakshiMainActivities` collection
- [x] Create `PanchPakshiSubActivities` collection
- [x] Implement `runPanchPakshiScraper` utility
- [x] Implement `afterChange` hook for automated scraping
- [x] Implement data normalization hooks
- [x] Verify implementation with tests

# Architecture

---

# Collection 2 — `panchPakshiMainActivities`

Purpose:
Stores accordion blocks.

1 row = 1 major activity block.

---

## Fields

### Relations

* `scanJob`

  * relationship
  * relationTo:

  ```text
  panchPakshiScanJobs
  ```

---

### Identity

* `date`

* `pakshi`

---

### Time

* `startTime`

* `endTime`

* `durationMinutes`

---

### Main Activity

From:

```html id="5bcm1v"
<div class="dpPakshiActivity">Sleeping</div>
```

field:

* `activity`

values:

```text id="0p6v3t"
sleeping
walking
eating
ruling
dying
```

---

### Meta

* `dayType`

values:

```text id="q8e6g1"
day
night
```

---

* `paksha`

values:

```text id="ofjlwm"
shukla_paksha
krishna_paksha
```

---

### Birds

* `mainBird`

* `rulingBird`

* `dyingBird`

---

### Order

* `sequence`

---

# Collection 3 — `panchPakshiSubActivities`

Purpose:
Stores inner rows.

---

## Fields

### Relation

* `mainActivity`

  * relationship
  * relationTo:

  ```text
  panchPakshiMainActivities
  ```

---

### Order

* `sequence`

---

### Time

* `startTime`

* `endTime`

* `durationMinutes`

---

### Bird

From:

```html id="uqypl7"
alt="Peacock"
```

* `bird`

---

### Activity

From:

```html id="nl5m33"
Sleeping
```

* `activity`

---

### Activity Icon

From:

```html id="hns46q"
alt="Sleep"
```

* `activityType`

values:

```text id="7ph4gs"
sleep
food
walk
ruling
death_rip
```

---

### Effect

From:

```html id="kmb2mw"
Bad
Very Bad
Average
Good
```

* `effect`

---

### Relationship

From:

```html id="qq8l12"
Self
Friend
Enemy
```

* `relationship`

---

### Power

From:

```html id="mxtvl8"
++
+++++
+
```

* `powerScore`

---

# Scraper Logic

## Step 1

Get active scan jobs.

---

## Step 2

Generate URLs.

Example:

```text id="mjlwm5"
?geoname-id=6619347
&date=29/04/2026
&pakshi=crow
```

Loop:

* dates
* pakshis

---

## Step 3

Fetch HTML.

---

## Step 4

Find:

```html id="3rwp7u"
.dpPakshiMainRowAccordion
```

Each = main activity block.

---

## Step 5

Extract main block data.

Selectors:

```text id="1z2k4v"
.dpPakshiMainActivityRow
.dpPakshiActivity
.dpMainRowRulingPakshi
.dpMainRowDyingPakshi
```

Save into:

```text id="lby2f5"
panchPakshiMainActivities
```

---

## Step 6

Inside each block:

find:

```html id="7xwd3v"
.dpPakshiSubActivityRow
```

Extract:

* time
* bird
* activity
* effect
* relationship
* power

Save into:

```text id="0ghx2t"
panchPakshiSubActivities
```

---

# Important

Use unique constraint logic:

```text id="42igp3"
date + pakshi + startTime
```

to avoid duplicates.

---

# Recommended Payload Hooks

## beforeChange

Normalize:

```text id="zy0kr7"
Sleeping → sleeping
Very Bad → very_bad
```

---

## afterChange on Scan Job

Trigger scraper automatically when job created.

---

# Final Result

You will have:

```text id="s4z5tl"
1 scan job
   ↓
many main activities
   ↓
many sub activities
```

Perfect for:

* astrology analysis
* API
* AI prediction
* timeline UI
* fast SQLite queries
* future automation in Antigravity setup
