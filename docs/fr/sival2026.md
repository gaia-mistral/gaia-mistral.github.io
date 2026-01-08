---
title: SIVAL 2026
layout: home
description: SIVAL 2026
permalink: /sival2026/
lang: fr
---
<section id="logo-org" class="bg-gray-light">
  <div class="container-lg p-responsive py-5 py-md-12 text-center">
    <img src="/assets/img/projects/org_sival.svg" alt="drawing" width="500px"/>
   </div>
</section>

<section id="coach" class="bg-gray-light">
  <div class="container-lg p-responsive py-5 py-md-12 text-center">
    <h3 class="alt-h2 mb-4">Le Déroulement</h3>
      Le hackathon <b>Agreen Defi SIVAL 2026</b> se déroule du <b>14/01/2026</b> au <b>15/01/2026</b> au sein du salon      
      <a href="https://www.sival-angers.com/agreen-defi-hackhaton-intelligence-artificielle/" target="_blank"><b>SIVAL</b></a>
      <br>
      Vous pouvez consulter le détails du <a href="https://agreen-startup.chambres-agriculture.fr/concours-a-venir/agreen-defi/sival-angers" target="_blank"><b>réglement de participation</b></a>
  </div>
</section>

<section id="coach" class="bg-gray-light">
  <div class="container-lg p-responsive py-5 py-md-12 text-center">
    <h3 class="alt-h2 mb-4">Les Coachs</h3>
      Les coachs seront présents pour vous aider à avancer dans votre projet, vous pouvez les <b>solliciter sur Discord</b> ou via <b>Nicolas</b>.
      <br><br>
      {% include coach-table.html orgs=site.data.sival2026_coachs id="coachs" name="Coachs" %}
  </div>
</section>

<section id="sujets" class="bg-gray-light">
  <div class="container-lg p-responsive py-5 py-md-6 text-center">
    <h3 class="alt-h2 mb-4">Les Sujets</h3>
    <div class="sujets-content">
      Les sujets vont êtres publiés au fil de l'eau sur notre zone d'échange 
       <a href="https://discord.gg/D6Ma5NVUy3" target="_blank"><b>Discord</b></a>
      dédiée au hackathon SIVAL 2026.
      <br><br>
      {% include sara-subjects-table.html orgs=site.data.sival2026_subjects id="subjects" name="subjects" %}
    </div>
  </div>
</section>

<section id="mallette-developpement" class="bg-gray-light">
  <div class="container-lg p-responsive py-5 py-md-6 text-center">
    <h3 class="alt-h2 mb-4">Le Kit de développement</h3>
    <div class="mallette-developpement-content">
      {% include liste-table.html orgs=site.data.sival2026_liste id="liste" name="liste" %}
    </div>
  </div>
</section>
