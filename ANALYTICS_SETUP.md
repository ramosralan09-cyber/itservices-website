# Analytics Setup Guide

This project includes Google Analytics 4 (GA4) and Meta Pixel tracking for comprehensive analytics and conversion tracking.

## Current Status

✅ Analytics code installed and ready
⚠️ **Tracking IDs required to activate**

The site functions normally without tracking IDs, but analytics will not collect data until configured.

---

## Part 1: Google Analytics 4 Setup

### Step 1: Create GA4 Property

1. Go to [Google Analytics](https://analytics.google.com)
2. Sign in with your Google account
3. Click **Admin** (gear icon, bottom left)
4. Under **Account**, click **Create Account** (or select existing)
5. Under **Property**, click **Create Property**
6. Fill in property details:
   - Property name: `IT Services & Security PR`
   - Timezone: `(GMT-04:00) Puerto Rico`
   - Currency: `US Dollar`
7. Click **Next** and complete business details
8. Accept Terms of Service

### Step 2: Get Measurement ID

1. In your new property, go to **Admin** → **Data Streams**
2. Click **Add stream** → **Web**
3. Enter website URL: `https://itservicespr.com`
4. Stream name: `ITSS Website`
5. Click **Create stream**
6. Copy your **Measurement ID** (format: `G-XXXXXXXXXX`)

### Step 3: Add to Environment Variables

1. Open `.env` file in project root
2. Uncomment and update the GA4 line:
   ```bash
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```
3. Save the file
4. Restart development server or redeploy

---

## Part 2: Meta Pixel Setup

### Step 1: Create Meta Pixel

1. Go to [Meta Business Suite](https://business.facebook.com)
2. Sign in or create a business account
3. Go to **Business Settings** → **Data Sources** → **Pixels**
4. Click **Add** → **Create a Pixel**
5. Name your pixel: `ITSS Website`
6. Click **Create**

### Step 2: Get Pixel ID

1. After creation, you'll see your Pixel ID (format: 16 digits)
2. Copy the Pixel ID (just the numbers, e.g., `1234567890123456`)

### Step 3: Add to Environment Variables

1. Open `.env` file in project root
2. Uncomment and update the Meta Pixel line:
   ```bash
   NEXT_PUBLIC_META_PIXEL_ID=1234567890123456
   ```
3. Save the file
4. Restart development server or redeploy

---

## Part 3: Verify Tracking

### Test Google Analytics

1. Install [Google Analytics Debugger Chrome Extension](https://chrome.google.com/webstore/detail/google-analytics-debugger/)
2. Visit your website
3. Open browser console (F12)
4. Check for GA4 events being sent
5. Verify in GA4 Real-Time reports (Admin → Reports → Realtime)

### Test Meta Pixel

1. Install [Meta Pixel Helper Chrome Extension](https://chrome.google.com/webstore/detail/facebook-pixel-helper/)
2. Visit your website
3. Click the extension icon
4. Should show green checkmark with PageView event
5. Verify in Meta Events Manager (Test Events section)

---

## Part 4: Tracked Events

The following conversion events are automatically tracked:

### Quote System
- `quote_submitted` - User submits quote form

### Communication
- `whatsapp_click` - User clicks any WhatsApp button
- `whatsapp_emergency` - User clicks emergency WhatsApp
- `phone_click` - User clicks phone number

### Form Actions
- `form_submit` - Generic form submission

All events are tracked in both GA4 and Meta Pixel for comprehensive analytics.

---

## Part 5: View Analytics Data

### Google Analytics 4

**Real-time Data:**
- Go to GA4 → Reports → Realtime
- See current active users and events

**Historical Data:**
- Reports → Engagement → Events
- Reports → Acquisition → Traffic acquisition
- Reports → Conversions

**Custom Reports:**
- Explore → Create custom explorations
- Set up conversion goals in Admin → Events

### Meta Pixel

**Events Manager:**
- Go to Events Manager in Business Suite
- Select your pixel
- View Overview, Diagnostics, Test Events

**Conversions:**
- Create custom conversions from events
- Use in Facebook/Instagram ad campaigns
- Track ROAS (Return on Ad Spend)

---

## Part 6: Privacy & Compliance

### Included Features

✅ Scripts only load if IDs are configured
✅ No tracking without user consent (add cookie banner if needed)
✅ Scripts load with `afterInteractive` strategy (performance optimized)

### Recommended: Add Cookie Consent

Consider adding a cookie consent banner for GDPR/CCPA compliance:
- [CookieYes](https://www.cookieyes.com/)
- [Osano](https://www.osano.com/)
- [Cookiebot](https://www.cookiebot.com/)

---

## Part 7: Advanced Configuration

### Custom Events

Add custom tracking to any component:

```typescript
import { trackConversion } from '@/lib/analytics'

<button onClick={() => trackConversion('custom_event', 100)}>
  Custom Action
</button>
```

### GA4 Custom Parameters

```typescript
import { trackEvent } from '@/lib/analytics'

trackEvent('purchase', {
  value: 500,
  currency: 'USD',
  items: ['CCTV System']
})
```

### Meta Pixel Custom Events

```typescript
import { trackPixelEvent } from '@/lib/analytics'

trackPixelEvent('Lead', {
  value: 0,
  currency: 'USD'
})
```

---

## Troubleshooting

### Analytics Not Showing Data

1. ✅ Verify IDs are uncommented in `.env`
2. ✅ Check IDs match format (GA4: `G-XXXXXXXXXX`, Meta: 16 digits)
3. ✅ Restart dev server after `.env` changes
4. ✅ Clear browser cache
5. ✅ Check browser console for errors
6. ✅ Use browser extensions to verify events firing

### Events Not Tracking

1. ✅ Open browser console (F12)
2. ✅ Check for `gtag` and `fbq` function calls
3. ✅ Verify window.dataLayer exists (for GA4)
4. ✅ Test on production (some blockers only affect dev)

---

## Support

- **Google Analytics Help:** [support.google.com/analytics](https://support.google.com/analytics)
- **Meta Pixel Help:** [facebook.com/business/help](https://www.facebook.com/business/help)

---

**Ready to activate tracking!** Simply add your IDs to `.env` and redeploy.
