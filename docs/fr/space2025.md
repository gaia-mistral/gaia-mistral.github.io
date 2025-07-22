---
title: Space 2025
layout: home
description: Space 2025
permalink: /space2025/
lang: fr
---
<section id="logo-org" class="bg-gray-light">
  <div class="container-lg p-responsive py-5 py-md-12 text-center">
    <img src="/assets/img/projects/org_space2025.png" alt="drawing" width="500px"/>
   </div>
  <div class="container-lg p-responsive py-5 py-md-12 text-center">
    <img src="/assets/img/projects/space.png" alt="drawing" width="250px"/>
    <img src="/assets/img/projects/ca_pdl.png" alt="drawing" width="250px"/>
    <img src="/assets/img/projects/osfarm.png" alt="drawing" width="250px"/>
   </div>
</section>

<section id="coach" class="bg-gray-light">
  <div class="container-lg p-responsive py-5 py-md-12 text-center">
    <h3 class="alt-h2 mb-4">Le Déroulement</h3>
      Le hackathon Agreen Défi 2025 se déroule du <b>17/09/2025</b> au <b>18/09/2025</b>au sein du
      <a href="https://www.space.fr/fr/agreen-defi" target="_blank"><b>SPACE à Rennes</b></a>
      <br>
      Vous pouvez consulter le <a href="https://mobicheckin-assets.s3.eu-west-1.amazonaws.com/uploads/events/67a632a404559a743f95771e/website/assets-folder67af8dbdbf44f7437f264198/REGLEMENT_AGREEN-DEFI-SPACE2025_539adde9-d52d-4053-a345-ac1170a85768.pdf" target="_blank"><b>réglement</b></a> pour participer.<br>
      Il est animé par <a href="https://www.linkedin.com/in/dorisonnicolas/" target="_blank"><b>Nicolas DORISON</b></a> qui sera votre principal relais si vous avez une question durant l'épreuve.
      <br>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Date</th>
          <th scope="col">Horaire</th>
          <th scope="col">Activité</th>
          <th scope="col">Responsable</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Mercredi 17 Septembre 2025</th>
          <td>09H00</td>
          <td>Accueil des participants</td>
          <td>Équipe organisatrice</td>
        </tr>
        <tr>
          <th scope="row"></th>
          <td>09H30</td>
          <td>Lancement du hackathon</td>
          <td>Équipe organisatrice</td>
        </tr>
        <tr>
          <th scope="row"></th>
          <td>10H00</td>
          <td>Cadrage des projets</td>
          <td>Experts / Coachs</td>
        </tr>
        <tr>
          <th scope="row"></th>
          <td>Journée</td>
          <td>Développement des prototypes en équipe</td>
          <td>Candidats</td>
        </tr>
        <tr>
          <th scope="row">Jeudi 18 Septembre 2025</th>
          <td>09h00 - 16h00</td>
          <td>Développement des prototypes en équipe</td>
          <td>Candidats</td>
        </tr>
        <tr>
          <th scope="row"></th>
          <td>16h00 - 17h00</td>
          <td>Présentation des projets – Espace Jeunes du salon</td>
          <td>Candidats / Jury</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<section id="coach" class="bg-gray-light">
  <div class="container-lg p-responsive py-5 py-md-12 text-center">
    <h3 class="alt-h2 mb-4">Les Coachs</h3>
      Les coachs seront présents pour vous aider à avancer dans votre projet, vous pouvez les <b>solliciter sur Discord</b> ou via <b>Nicolas</b>.
      <br><br>
      {% include coach-table.html orgs=site.data.space_coachs id="coachs" name="Coachs" %}
  </div>
</section>

<section id="sujets" class="bg-gray-light">
  <div class="container-lg p-responsive py-5 py-md-6 text-center">
    <h3 class="alt-h2 mb-4">Les Sujets</h3>
    <div class="sujets-content">
      Les sujets sont publiés au fil de l'eau sur notre zone d'échange 
       <a href="https://discord.gg/rjEtFNsb" target="_blank"><b>Discord</b></a> et 
       <a href="https://chat.whatsapp.com/CKtRdDffaMN5MSNRHryCW4" target="_blank"><b>Whatsapp</b></a>
      dédiée au hackathon GAIA 2025.
      <br><br>
      {% include sara-subjects-table.html orgs=site.data.space_subjects id="subjects" name="subjects" %}

      Autres sujets en lien avec le machinisme et les équipements d’élevage à venir...
    </div>
  </div>
</section>

<section id="mallette-developpement" class="bg-gray-light">
  <div class="container-lg p-responsive py-5 py-md-6 text-center">
    <h3 class="alt-h2 mb-4">Le Kit de développement</h3>
    <div class="mallette-developpement-content">
      {% include liste-table.html orgs=site.data.space_liste id="liste" name="liste" %}
    </div>
  </div>
</section>
