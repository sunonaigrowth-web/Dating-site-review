document.addEventListener("DOMContentLoaded", () => {
  const tableBody = document.getElementById("comparison-table-body");
  if (tableBody && typeof platformsData !== "undefined") {
    tableBody.innerHTML = platformsData.map(item => `
      <tr>
        <td><strong>${item.name}</strong></td>
        <td><span class="badge">★ ${item.rating}</span></td>
        <td>${item.category === 'ai-girlfriend' ? 'AI Companion' : 'Dating App'}</td>
        <td>${item.pricing}</td>
        <td>${item.bestFor}</td>
        <td><a href="#" data-affiliate="${item.id}" class="btn btn-primary btn-sm">Visit Site</a></td>
      </tr>
    `).join("");
  }
});