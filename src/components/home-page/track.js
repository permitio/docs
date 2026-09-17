// Click tracking for the docs home and walkthroughs landing. Same gtag event
// shape as the TOC help box and NextStepCallout: a fixed event name, the page
// as the category, a readable label, and the current path as the value.
export function trackLandingClick(category, label) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "click_landing_link", {
      event_category: category,
      event_label: label,
      value: window.location.pathname,
    });
  }
}
