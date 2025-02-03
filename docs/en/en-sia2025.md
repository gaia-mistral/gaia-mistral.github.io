---
title: Sia2025
layout: en-home
description: Sia2025
permalink: /en/sia2025/
lang: en
---

<section id="coach" class="bg-gray-light">
  <div class="container-lg p-responsive py-5 py-md-6 text-center">
    <h3 class="alt-h2 mb-4">The Coaches</h3>
      {% include coach-table.html orgs=site.data.coachs id="coachs" name="Coaches" %}
  </div>
</section>

<section id="sujets" class="bg-gray-light">
  <div class="container-lg p-responsive py-5 py-md-6 text-center">
    <h3 class="alt-h2 mb-4">Topics</h3>
    <div class="sujets-content">
      <!-- Content for Topics -->
    </div>
  </div>
</section>

<section id="mallette-developpement" class="bg-gray-light">
  <div class="container-lg p-responsive py-5 py-md-6 text-center">
    <h3 class="alt-h2 mb-4">Development Kit</h3>
    <div class="mallette-developpement-content">
      <!-- Content for Development Kit -->
    </div>
  </div>
</section>

<section id="outils" class="bg-gray-light">
  <div class="container-lg p-responsive py-5 py-md-6 text-center">
    <h3 class="alt-h2 mb-4">Partners and Tools</h3>
    <div class="outils-grid" id="outils-grid">
      {% include liste-table.html orgs=site.data.liste id="liste" name="list" %}
    </div>
  </div>
</section>
