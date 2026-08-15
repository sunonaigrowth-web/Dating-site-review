const affiliateLinks = {
  "candy-ai": "https://example.com/affiliate/candy-ai",
  "hinge": "https://example.com/affiliate/hinge",
  "nomi-ai": "https://example.com/affiliate/nomi-ai",
  "bumble": "https://example.com/affiliate/bumble"
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("a[data-affiliate]").forEach(link => {
    const key = link.getAttribute("data-affiliate");
    if (affiliateLinks[key]) {
      link.href = affiliateLinks[key];
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "nofollow noopener sponsored");
    }
  });
});
